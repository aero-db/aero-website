// https://nuxt.com/docs/api/configuration/nuxt-config

import { AeroThemePreset } from './theme/theme';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    apiUrl: 'https://api.aerodb.net',
  },
  modules: ['@primevue/nuxt-module'],
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
