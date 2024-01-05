import {createVuetify, type ThemeDefinition} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const colors = {
    background: '#FCFBF4',
    primary: '#e04050', //#360a3b
    secondary: '#40e0d0',//#1e90ff
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
            defaultTheme: 'dark',
            themes: {dark, light},
        },
    })

    nuxtApp.vueApp.use(vuetify)
})
