/**
 * This file define the main theme of the application
 */

import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
import type { PrimeVueConfiguration } from 'primevue/config'

const AeroThemePreset = definePreset(Aura, {
  semantic: {
    primary: {
      '50': '#ecf2ff',
      '100': '#dde6ff',
      '200': '#c2d1ff',
      '300': '#9cb1ff',
      '400': '#7586ff',
      '500': '#646cff',
      '600': '#3b36f5',
      '700': '#322ad8',
      '800': '#2925ae',
      '900': '#262689',
      '950': '#181650'
    },

    secondary: {
      '50': '#edf0ff',
      '100': '#dee5ff',
      '200': '#c4ceff',
      '300': '#a0adff',
      '400': '#747bff',
      '500': '#5f5bf9',
      '600': '#4e3dee',
      '700': '#432fd3',
      '800': '#3629aa',
      '900': '#302986',
      '950': '#1e184e'
    },

    formField: {
      paddingX: '0.75rem',
      paddingY: '0.5rem'
    }
  }
})

export const AeroTheme: PrimeVueConfiguration = {
  theme: {
    preset: AeroThemePreset,
    options: {
      // darkModeSelector: '.dark-mode',
      cssLayer: {
        name: 'aero',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  }
}
