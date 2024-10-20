import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'
import { AeroTheme } from './theme/theme'
import { VueQueryPlugin } from '@tanstack/vue-query'
import 'maplibre-gl/dist/maplibre-gl.css'
import VueMaplibreGl from '@indoorequal/vue-maplibre-gl'
import * as Sentry from '@sentry/vue'

const app = createApp(App)

Sentry.init({
  app,
  dsn: 'https://b1821c2378a32c7174dfab4bb3d599f2@o4508156280832000.ingest.de.sentry.io/4508156282077264',
  integrations: [Sentry.browserTracingIntegration({ router }), Sentry.replayIntegration()],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/aerodb\.net\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

app.use(createPinia())
app.use(router)
app.use(VueMaplibreGl)
app.use(PrimeVue, AeroTheme)
app.use(VueQueryPlugin, {
  enableDevtoolsV6Plugin: true
})

app.mount('#app')
