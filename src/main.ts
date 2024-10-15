import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'
import { AeroTheme } from './theme/theme'
import { VueQueryPlugin } from '@tanstack/vue-query'
import OpenLayersMap from 'vue3-openlayers'
import { useGeographic } from 'ol/proj'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, AeroTheme)
app.use(VueQueryPlugin)
app.use(OpenLayersMap, {
  debug: true
})
useGeographic()

app.mount('#app')
