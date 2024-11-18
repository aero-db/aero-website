// https://nuxt.com/docs/api/configuration/nuxt-config

import type { Airport } from '@aerodb/js';
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
  modules: [
    '@primevue/nuxt-module',
    '@nuxt/eslint',
    'nuxt-gtag',
    '@sentry/nuxt/module',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
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
  sitemap: {
    urls: async () => {
      // fetch your URLs from a database or other source
      const data = await fetch('https://api.aerodb.net/airports?limit=300');
      const res = await data.json();
      return res.map((airport: Airport) => `/airport/${airport.airportId}`);
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});