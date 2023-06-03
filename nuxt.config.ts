import {defineNuxtConfig} from 'nuxt/config';
import {fileURLToPath} from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    modules: [
        'nuxt-quasar-ui',
        '@vueuse/nuxt',
        '@pinia/nuxt',
    ],
    quasar: {
        iconSet: 'mdi-v7',
    },
    /**
     * Sounds: https://github.com/vueuse/sound
     */
    sound: {
        sounds: {
            scan: true,
        }
    },
    /*
     ** Global CSS: https://nuxt.com/docs/api/configuration/nuxt-config#css
     */
    css: ['@/assets/style/style.scss'],
    alias: {
        // Doc: https://nuxt.com/docs/api/configuration/nuxt-config#alias
        '@img': fileURLToPath(new URL('./src/assets/img/', import.meta.url)),
        '@sounds': fileURLToPath(new URL('./src/assets/sounds/', import.meta.url)),
    },
})
