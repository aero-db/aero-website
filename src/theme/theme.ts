/**
 * This file define the main theme of the application
 */

import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
import type { PrimeVueConfiguration } from 'primevue/config'

const AeroThemePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e2f0ff',
      100: '#b6d4fe',
      200: '#8ab9fd',
      300: '#5e9dfd',
      400: '#328efc',
      500: '#0c7dfb',
      600: '#0a6ff6',
      700: '#0860f1',
      800: '#0652ec',
      900: '#0446e7',
      950: '#033ee4'
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
      darkModeSelector: '.dark-mode',
      cssLayer: {
        name: 'aero',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  }
}
