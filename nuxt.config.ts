import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  nitro: {
    preset: "cloudflare-pages",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  modules: ["nitro-cloudflare-dev", "@nuxt/eslint"],

  typescript: {
    typeCheck: true,
    strict: true,
  },

  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: `Mark Marilag | Full Stack Developer (Laravel & Vue.js)`,
      meta: [
        {
          name: "viewport",
          content: `width=device-width, initial-scale=1`,
        },
        {
          name: "description",
          content: `Full Stack Developer in the Philippines with 7+ years in Laravel, Vue.js, Docker & AWS Lambda. I build modular, high-performance apps and mentor teams to deliver quality.`
        },
      ],
    },
  },
});
