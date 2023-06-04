import { fileURLToPath } from 'url';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    modules: ['nuxt-quasar-ui', '@vueuse/nuxt', '@pinia/nuxt'],
    quasar: {
        iconSet: 'mdi-v7',
        config: {
            dark: true, // or 'auto'
        },
        extras: {
            // string | null: Auto-import roboto font. https://quasar.dev/style/typography#default-font
            font: 'roboto-font',
            // string[]: Auto-import webfont icons. Usage: https://quasar.dev/vue-components/icon#webfont-usage
            fontIcons: ['mdi-v7'],
        },
    },
    /*
     ** Global CSS: https://nuxt.com/docs/api/configuration/nuxt-config#css
     */
    css: ['@/assets/style/style.scss'],
    app: {
        head: {
            script: [{ src: 'WebOS-1.2.4/webOSTV.js' }, { src: 'WebOS-1.2.4/webOSTV-dev.js' }],
        },
    },
    alias: {
        // Doc: https://nuxt.com/docs/api/configuration/nuxt-config#alias
        '@img': fileURLToPath(new URL('./src/assets/img/', import.meta.url)),
        '@sounds': fileURLToPath(new URL('./src/assets/sounds/', import.meta.url)),
    },
    /*
     ** Auto-import components
     *  Doc: https://github.com/nuxt/components
     */
    components: {
        loader: true,
        dirs: [
            // Components directory
            {
                path: '~/components',
                pathPrefix: false,
                extensions: ['vue'],
            },
        ],
    },
});
