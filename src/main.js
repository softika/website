import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { initContactPage } from './contact.js';
import { createIcon, icons } from './icons.js';
import './styles/main.css';

inject();
injectSpeedInsights();

setCurrentYear();
setupMobileNavigation();
setupRouteButtons();
setActiveNavigation();
renderAllIcons();
setupHeaderHideOnScroll();

if (document.body.dataset.page === 'contact') {
  initContactPage();
}

function setCurrentYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = year;
  });
}

function setupMobileNavigation() {
  const menuButton = document.querySelector('[data-mobile-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');

  if (!(menuButton instanceof HTMLButtonElement) || !(mobileNav instanceof HTMLElement)) {
    return;
  }

  const closeNav = () => {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
  };

  const openNav = () => {
    mobileNav.hidden = false;
    menuButton.setAttribute('aria-expanded', 'true');
  };

  menuButton.addEventListener('click', () => {
    if (mobileNav.hidden) {
      openNav();
      return;
    }
    closeNav();
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Node) || mobileNav.hidden) {
      return;
    }
    if (mobileNav.contains(target) || menuButton.contains(target)) {
      return;
    }
    closeNav();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNav();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 960) {
      closeNav();
    }
  });
}

function setupRouteButtons() {
  document.querySelectorAll('[data-route-path]').forEach((node) => {
    if (!(node instanceof HTMLElement)) {
      return;
    }
    const path = node.dataset.routePath;
    if (!path) {
      return;
    }
    node.addEventListener('click', () => {
      window.location.href = path;
    });
  });
}

function setActiveNavigation() {
  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll('[data-nav-link]').forEach((node) => {
    if (!(node instanceof HTMLAnchorElement)) {
      return;
    }
    const nodePath = normalizePath(new URL(node.href, window.location.origin).pathname);
    if (nodePath === currentPath) {
      node.classList.add('is-active');
    }
  });
}

function normalizePath(path) {
  let normalizedPath = path.endsWith('index.html') ? path.replace(/index\.html$/, '') : path;

  if (normalizedPath.length > 1 && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1);
  }

  return normalizedPath || '/';
}

function renderAllIcons() {
  document.querySelectorAll('[data-icon]').forEach((node) => {
    if (!(node instanceof HTMLElement)) {
      return;
    }

    const key = node.dataset.icon;
    if (!key) {
      return;
    }

    const path = icons[key];
    if (!path) {
      return;
    }

    const sizeValue = Number.parseInt(node.dataset.size ?? '24', 10);
    const size = Number.isNaN(sizeValue) ? 24 : sizeValue;
    node.innerHTML = createIcon(path, size);
  });
}

function setupHeaderHideOnScroll() {
  const header = document.querySelector('.site-header');
  if (!(header instanceof HTMLElement)) {
    return;
  }

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      header.classList.add('is-hidden');
    } else {
      header.classList.remove('is-hidden');
    }

    lastScrollY = currentScrollY;
  });
}
