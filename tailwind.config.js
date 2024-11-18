/** @type {import('tailwindcss').Config} */

import * as PrimeUI from 'tailwindcss-primeui';
export default {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
  theme: {
    extend: {},
  },
  plugins: [PrimeUI],
};
