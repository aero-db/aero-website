// https://nuxt.com/docs/api/configuration/nuxt-config

import { AeroThemePreset } from './theme/theme';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
    },
  },
  runtimeConfig: {
    apiUrl: 'https://api.aerodb.net',
  },
  modules: ['@primevue/nuxt-module', '@nuxt/eslint', 'nuxt-gtag', '@sentry/nuxt/module'],
  gtag: {
    id: 'G-9H8S0LMT88',
  },
  primevue: {
    options: {
      theme: {
        preset: AeroThemePreset,
        options: {
          // darkModeSelector: '.dark-mode',
          cssLayer: {
            name: 'aero',
            order: 'tailwind-base, primevue, tailwind-utilities',
          },
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
