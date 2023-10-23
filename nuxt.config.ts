// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    experimental: {
        appManifest: false,
    },
    supabase : {
        redirect: false,
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        '@nuxtjs/supabase'
    ],
});
