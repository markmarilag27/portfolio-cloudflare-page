import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['nitro-cloudflare-dev', '@nuxt/eslint'],
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: `Mark Marilag | Full Stack Developer (Laravel & Vue.js)`,
      meta: [
        {
          name: 'viewport',
          content: `width=device-width, initial-scale=1`,
        },
        {
          name: 'description',
          content: `Full Stack Developer in the Philippines with 7+ years in Laravel, Vue.js, Docker & AWS Lambda. I build modular, high-performance apps and mentor teams to deliver quality.`,
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',

  nitro: {
    preset: 'cloudflare-pages',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },

  typescript: {
    typeCheck: true,
  },

  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
})
