// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Softika Software Development | SaaS Development, Cloud, Frontend, Backend API Services, Kubernetes, Cloud Native Solutions, AWS, GCP, Hetzner, Linode | Software Development Consultant | Softika',
            meta: [
                {
                    name: 'description',
                    content: 'Softika Software Development | SaaS Development, Cloud, Frontend, Backend API Services, Kubernetes, Cloud Native Solutions, AWS, GCP, Hetzner, Linode | Software Development Consultant | Softika'
                },
                {
                    name: 'ogDescription',
                    content: 'Softika Software Development | SaaS Development, Cloud, Frontend, Backend API Services, Kubernetes, Cloud Native Solutions, AWS, GCP, Hetzner, Linode | Software Development Consultant | Softika'
                }
            ],
        },
    },

    devtools: {enabled: true},
    css: [
        'vuetify/lib/styles/main.css',
        '@mdi/font/css/materialdesignicons.min.css',
        '@/style/main.sass',
        '@/style/custom.css'
    ],
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        'vue-recaptcha/nuxt',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
        //SEO
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        'nuxt-og-image',
        'nuxt-schema-org',
        'nuxt-link-checker',
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
            recaptcha: {
                v2SiteKey: process.env.V2_SITE_KEY,
                v3SiteKey: process.env.V3_SITE_KEY,
            },

            EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
            EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
        },
    },
    site: {
        url: 'https://www.softika.dev/',
        trailingSlash: true,
        defaultLocale: 'en',
        name: 'Softika Software Development',
        description: 'Softika Software Development | SaaS Development, Cloud, Frontend, Backend API Services, Kubernetes, Cloud Native Solutions, AWS, GCP, Hetzner, Linode | Software Development Consultant | Softika',
    },
})
