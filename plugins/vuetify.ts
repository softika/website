import {createVuetify, type ThemeDefinition} from 'vuetify'
import {aliases as defaultAliases, mdi} from 'vuetify/iconsets/mdi-svg'
import {
    mdiAccountMultipleOutline,
    mdiChatOutline,
    mdiCheckboxMarkedCircle,
    mdiClockFast,
    mdiCloudOutline,
    mdiEmailFastOutline,
    mdiEmailOutline,
    mdiFacebook,
    mdiHandshakeOutline,
    mdiHomeOutline,
    mdiInfinity,
    mdiInstagram,
    mdiLinkedin,
    mdiMagnify,
    mdiRobotOutline,
    mdiRocketLaunchOutline,
    mdiServerOutline,
    mdiShieldCheckOutline,
    mdiShieldLockOutline,
    mdiSourceBranch,
    mdiTwitter,
    mdiAlertCircleOutline,
} from '@mdi/js'

const customAliases = {
    ...defaultAliases,
    'mdi-account-multiple-outline': mdiAccountMultipleOutline,
    'mdi-chat-outline': mdiChatOutline,
    'mdi-checkbox-marked-circle': mdiCheckboxMarkedCircle,
    'mdi-clock-fast': mdiClockFast,
    'mdi-cloud-outline': mdiCloudOutline,
    'mdi-email-fast-outline': mdiEmailFastOutline,
    'mdi-email-outline': mdiEmailOutline,
    'mdi-facebook': mdiFacebook,
    'mdi-handshake-outline': mdiHandshakeOutline,
    'mdi-home-outline': mdiHomeOutline,
    'mdi-infinity': mdiInfinity,
    'mdi-instagram': mdiInstagram,
    'mdi-linkedin': mdiLinkedin,
    'mdi-magnify': mdiMagnify,
    'mdi-robot-outline': mdiRobotOutline,
    'mdi-rocket-launch-outline': mdiRocketLaunchOutline,
    'mdi-server-outline': mdiServerOutline,
    'mdi-shield-check-outline': mdiShieldCheckOutline,
    'mdi-shield-lock-outline': mdiShieldLockOutline,
    'mdi-source-branch': mdiSourceBranch,
    'mdi-twitter': mdiTwitter,
    'alert-circle-outline': mdiAlertCircleOutline,
}

const colors = {
    background: '#FCFBF4',
    primary: '#63AEBB',
    secondary: '#6382BB',
}

const dark: ThemeDefinition = {
    dark: true,
    colors: colors,
}

const light: ThemeDefinition = {
    dark: false,
    colors: colors
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        icons: {
            defaultSet: 'mdi-svg',
            aliases: customAliases,
            sets: {'mdi-svg': mdi},
        },
        theme: {
            defaultTheme: 'light',
            themes: {dark, light},
        },
    })

    nuxtApp.vueApp.use(vuetify)
})
