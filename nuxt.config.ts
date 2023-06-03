import {defineNuxtConfig} from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    modules: [
        'nuxt-quasar-ui'
    ],
    quasar: {
        iconSet: 'mdi-v7',
    }
})
