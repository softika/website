import emailjs from '@emailjs/browser';
import { createIcon, icons } from './icons.js';

const EMAIL_PATTERN = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

const FIELD_CONFIG = {
  name: {
    validate: (value) => (value || '').trim().length > 0 && (value || '').trim().length < 100,
    message: (value) => {
      if ((value || '').trim().length === 0) {
        return 'This field is required';
      }
      if ((value || '').trim().length >= 100) {
        return 'This field cannot be longer than 100 characters.';
      }
      return '';
    },
  },
  email: {
    validate: (value) => EMAIL_PATTERN.test((value || '').trim()),
    message: (value) => {
      if ((value || '').trim().length === 0) {
        return 'This field is required';
      }
      if (!EMAIL_PATTERN.test((value || '').trim())) {
        return 'Please enter a valid email.';
      }
      return '';
    },
  },
  subject: {
    validate: (value) => (value || '').trim().length > 0 && (value || '').trim().length < 100,
    message: (value) => {
      if ((value || '').trim().length === 0) {
        return 'This field is required';
      }
      if ((value || '').trim().length >= 100) {
        return 'This field cannot be longer than 100 characters.';
      }
      return '';
    },
  },
  text: {
    validate: (value) => (value || '').trim().length > 0,
    message: (value) => {
      if ((value || '').trim().length === 0) {
        return 'This field is required';
      }
      return '';
    },
  },
};

export function initContactPage() {
  const form = document.querySelector('#contact-form');
  if (!(form instanceof HTMLFormElement)) {
    return;
  }

  const nameField = getInput('#contact-name');
  const emailField = getInput('#contact-email');
  const subjectField = getInput('#contact-subject');
  const textField = getTextArea('#contact-text');
  const robotCheck = getInput('#robot-check');
  const policyCheck = getInput('#policy-check');
  const clearButton = document.querySelector('#clear-button');
  const sendButton = document.querySelector('#send-button');
  const statusBanner = document.querySelector('#contact-status');
  const statusIcon = document.querySelector('#contact-status-icon');
  const statusTitle = document.querySelector('#contact-status-title');
  const statusDetail = document.querySelector('#contact-status-detail');

  if (
    !nameField ||
    !emailField ||
    !subjectField ||
    !textField ||
    !robotCheck ||
    !policyCheck ||
    !(clearButton instanceof HTMLButtonElement) ||
    !(sendButton instanceof HTMLButtonElement) ||
    !(statusBanner instanceof HTMLDivElement) ||
    !(statusIcon instanceof HTMLSpanElement) ||
    !(statusTitle instanceof HTMLSpanElement) ||
    !(statusDetail instanceof HTMLSpanElement)
  ) {
    return;
  }

  const siteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  let recaptchaToken = '';
  let recaptchaLoaderPromise = null;
  let statusTimer = 0;
  const touched = new Set();

  const fields = { name: nameField, email: emailField, subject: subjectField, text: textField };

  const closeStatus = () => {
    statusBanner.hidden = true;
    statusBanner.classList.remove('success', 'error');
    statusTitle.textContent = '';
    statusDetail.textContent = '';
    statusIcon.innerHTML = '';
  };

  const showStatus = (type, title, detail = '') => {
    closeStatus();
    statusBanner.hidden = false;
    statusBanner.classList.add(type);
    statusTitle.textContent = title;
    statusDetail.textContent = detail;
    statusIcon.innerHTML =
      type === 'success'
        ? createIcon(icons['checkbox-marked-circle'], 20)
        : createIcon(icons['alert-circle-outline'], 20);
    if (statusTimer) {
      window.clearTimeout(statusTimer);
    }
    statusTimer = window.setTimeout(closeStatus, 4500);
  };

  const setFieldError = (fieldName, message) => {
    const field = fields[fieldName];
    const errorNode = form.querySelector(`[data-error-for="${fieldName}"]`);
    if (!(field instanceof HTMLElement) || !(errorNode instanceof HTMLParagraphElement)) {
      return;
    }

    if (message) {
      field.classList.add('is-invalid');
      field.setAttribute('aria-invalid', 'true');
      errorNode.textContent = message;
      return;
    }

    field.classList.remove('is-invalid');
    field.setAttribute('aria-invalid', 'false');
    errorNode.textContent = '';
  };

  const validateFields = (force = false) => {
    let allValid = true;

    Object.entries(FIELD_CONFIG).forEach(([fieldName, config]) => {
      const field = fields[fieldName];
      const value = field.value;
      const isValid = config.validate(value);
      const shouldShow = force || touched.has(fieldName);
      setFieldError(fieldName, shouldShow && !isValid ? config.message(value) : '');
      if (!isValid) {
        allValid = false;
      }
    });

    return allValid;
  };

  const isSendReady = () => {
    const fieldsValid = Object.entries(FIELD_CONFIG).every(([fieldName, config]) =>
      config.validate(fields[fieldName].value),
    );

    return fieldsValid && policyCheck.checked && Boolean(recaptchaToken);
  };

  const updateSendButtonState = () => {
    sendButton.disabled = !isSendReady();
  };

  const resetForm = () => {
    form.reset();
    recaptchaToken = '';
    touched.clear();
    Object.keys(FIELD_CONFIG).forEach((fieldName) => setFieldError(fieldName, ''));
    updateSendButtonState();
  };

  const ensureRecaptcha = async () => {
    if (!siteKey) {
      throw new Error('VITE_RECAPTCHA_V3_SITE_KEY is not configured');
    }

    if (window.grecaptcha) {
      return window.grecaptcha;
    }

    if (recaptchaLoaderPromise) {
      return recaptchaLoaderPromise;
    }

    recaptchaLoaderPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (!window.grecaptcha) {
          reject(new Error('reCAPTCHA script loaded without grecaptcha object'));
          return;
        }
        resolve(window.grecaptcha);
      };
      script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
      document.head.append(script);
    });

    return recaptchaLoaderPromise;
  };

  const runChallenge = async () => {
    const recaptcha = await ensureRecaptcha();
    return new Promise((resolve, reject) => {
      recaptcha.ready(() => {
        recaptcha
          .execute(siteKey, { action: 'submit' })
          .then((token) => resolve(token))
          .catch((error) => reject(error));
      });
    });
  };

  Object.entries(fields).forEach(([fieldName, field]) => {
    field.addEventListener('input', () => {
      touched.add(fieldName);
      validateFields(false);
      updateSendButtonState();
    });
  });

  policyCheck.addEventListener('change', updateSendButtonState);

  robotCheck.addEventListener('change', async () => {
    if (!robotCheck.checked) {
      recaptchaToken = '';
      updateSendButtonState();
      return;
    }

    robotCheck.disabled = true;
    try {
      recaptchaToken = await runChallenge();
      if (!recaptchaToken) {
        throw new Error('Empty token returned from reCAPTCHA');
      }
    } catch (error) {
      recaptchaToken = '';
      robotCheck.checked = false;
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      showStatus('error', 'Verification failed', errorMessage);
    } finally {
      robotCheck.disabled = false;
      updateSendButtonState();
    }
  });

  clearButton.addEventListener('click', () => {
    resetForm();
    closeStatus();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    touched.add('name');
    touched.add('email');
    touched.add('subject');
    touched.add('text');

    const validFields = validateFields(true);
    if (!validFields || !policyCheck.checked || !recaptchaToken) {
      showStatus('error', 'Message send failed', 'Please complete all required fields.');
      updateSendButtonState();
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      showStatus(
        'error',
        'Message send failed',
        'EmailJS configuration is missing. Set VITE_EMAILJS_* variables.',
      );
      return;
    }

    sendButton.disabled = true;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: nameField.value.trim(),
          email: emailField.value.trim(),
          subject: subjectField.value.trim(),
          text: textField.value.trim(),
        },
        publicKey,
      );

      showStatus('success', 'Message sent successfully');
      resetForm();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Please try later';
      showStatus('error', 'Message send failed', errorMessage);
    } finally {
      updateSendButtonState();
    }
  });

  updateSendButtonState();
}

function getInput(selector) {
  const node = document.querySelector(selector);
  return node instanceof HTMLInputElement ? node : null;
}

function getTextArea(selector) {
  const node = document.querySelector(selector);
  return node instanceof HTMLTextAreaElement ? node : null;
}
