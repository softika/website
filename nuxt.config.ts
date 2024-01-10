// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    // reCAPTCHA
    // site key // 6LeRoUspAAAAAC_Th9MTLNAGkuZVwycKKT7HM1_b
    // secret key // 6LeRoUspAAAAAEQ_jeedZUV8-bNqUPux9ItCj310
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Softika Development',
            meta: [
                {
                    name: 'description',
                    content: 'Discover unparalleled software solutions with Softika, your go-to partner for expert website design, UX, mobile app development, frontend and backend API services. Elevate your digital presence with our Cloud Native SaaS solutions, tailored to meet your unique business needs.'
                },
                {
                    name: 'ogDescription',
                    content: 'Discover unparalleled software solutions with Softika, your go-to partner for expert website design, UX, mobile app development, frontend and backend API services. Elevate your digital presence with our Cloud Native SaaS solutions, tailored to meet your unique business needs.'
                }
            ],
        },
    },

    devtools: {enabled: true},
    css: [
        'vuetify/lib/styles/main.css',
        '@mdi/font/css/materialdesignicons.min.css',
        '@/style/main.sass'
    ],
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    runtimeConfig: {
        public: {
            // recaptcha: {
            //     v2SiteKey: '6LeRoUspAAAAAC_Th9MTLNAGkuZVwycKKT7HM1_b',
            //     v3SiteKey: '6LeRoUspAAAAAC_Th9MTLNAGkuZVwycKKT7HM1_b',
            // },
        },
    },
})
