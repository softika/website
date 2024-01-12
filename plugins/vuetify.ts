import {createVuetify, type ThemeDefinition} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


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
        components,
        directives,
        theme: {
            defaultTheme: 'light',
            themes: {dark, light},
        },
    })

    nuxtApp.vueApp.use(vuetify)
})
