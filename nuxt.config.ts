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
      title: `Freelance MVP Developer | Front-End & Back-End Web Expert for Startups`,
      meta: [
        {
          name: 'viewport',
          content: `width=device-width, initial-scale=1`,
        },
        {
          name: 'description',
          content: `I help startups and founders turn ideas into fast, scalable MVPs. Full-stack development with clean UI, solid backend, and modern tools like Laravel, React, and Tailwind.`,
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@600;700;800&display=swap`,
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
    config: {
      stylistic: true,
    },
  },
})
