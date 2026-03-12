import {
  mdiAccountMultipleOutline,
  mdiArrowUp,
  mdiAlertCircleOutline,
  mdiBookOpenOutline,
  mdiChatOutline,
  mdiCheckboxMarkedCircle,
  mdiClockFast,
  mdiCloudOutline,
  mdiEmailOutline,
  mdiFacebook,
  mdiHandshakeOutline,
  mdiHomeOutline,
  mdiInfinity,
  mdiInstagram,
  mdiLinkedin,
  mdiMagnify,
  mdiMenu,
  mdiRobotOutline,
  mdiRocketLaunchOutline,
  mdiServerOutline,
  mdiShieldCheckOutline,
  mdiShieldLockOutline,
  mdiSourceBranch,
  mdiTwitter,
} from '@mdi/js';

export const icons = {
  'account-multiple-outline': mdiAccountMultipleOutline,
  'alert-circle-outline': mdiAlertCircleOutline,
  'arrow-up': mdiArrowUp,
  'book-open-outline': mdiBookOpenOutline,
  'chat-outline': mdiChatOutline,
  'checkbox-marked-circle': mdiCheckboxMarkedCircle,
  'clock-fast': mdiClockFast,
  'cloud-outline': mdiCloudOutline,
  'email-outline': mdiEmailOutline,
  facebook: mdiFacebook,
  'handshake-outline': mdiHandshakeOutline,
  'home-outline': mdiHomeOutline,
  infinity: mdiInfinity,
  instagram: mdiInstagram,
  linkedin: mdiLinkedin,
  magnify: mdiMagnify,
  menu: mdiMenu,
  'robot-outline': mdiRobotOutline,
  'rocket-launch-outline': mdiRocketLaunchOutline,
  'server-outline': mdiServerOutline,
  'shield-check-outline': mdiShieldCheckOutline,
  'shield-lock-outline': mdiShieldLockOutline,
  'source-branch': mdiSourceBranch,
  twitter: mdiTwitter,
};

export function createIcon(path, size = 24) {
  if (!path) {
    return '';
  }

  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true" focusable="false"><path d="${path}"></path></svg>`;
}
