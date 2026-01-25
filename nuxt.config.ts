// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  colorMode: {
    preference: 'dark', // Tema inicial
    fallback: 'dark',
    classSuffix: '' // Importante para que Tailwind detecte .light o .dark
  },
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/global.css'],
})