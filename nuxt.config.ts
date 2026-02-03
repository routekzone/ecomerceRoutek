// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  colorMode: {
    preference: 'dark', // Tema inicial
    fallback: 'dark',
    classSuffix: '' // Importante para que Tailwind detecte .light o .dark
  },
  // 2. ESTO ES LO MÁS IMPORTANTE: Autoriza el host de Cloudflare
  vite: {
    server: {
      allowedHosts: [
        'aruba-reduce-strength-tribal.trycloudflare.com'
      ]
    }
  },
  future: {
    compatibilityVersion: 4,
  },
  css: ['~/assets/global.css'],
})