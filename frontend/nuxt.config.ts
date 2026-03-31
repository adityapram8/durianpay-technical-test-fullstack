import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-12-31',
  typescript: {
    strict: true,
    typeCheck: true,
  },
  // Tailwind via @nuxtjs/tailwindcss module
  vite: {
    plugins: [tailwindcss() as any],
  },
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['~/stores/**/*.ts'], // Adjust the path to your stores
  },
  css: ['~/assets/css/globals.css'],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '', // From .env
      apiTimeout: process.env.NUXT_PUBLIC_API_TIMEOUT || '1000', // From .env
      appName: process.env.NUXT_PUBLIC_APP_NAME || 'App', // From .env
    },
  },
  devtools: { enabled: true },
})
