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

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueMaplibreGl)
app.use(PrimeVue, AeroTheme)
app.use(VueQueryPlugin, {
  enableDevtoolsV6Plugin: true
})

app.mount('#app')
