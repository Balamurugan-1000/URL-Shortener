// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  build: {
    transpile: ["@nuxtjs/tailwindcss"],
  },
  proxy: {
    '/api': {
      target: 'http://localhost:4000/',
    },
  }
})