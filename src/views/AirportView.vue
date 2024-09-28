<template>
  <div class="relative">
    <div
      class="absolute left-0 top-0 h-full z-10 w-full bg-gradient-to-r from-neutral-800 via-transparent"
    >
      <div class="m-2">
        <h1 class="text-2xl text-neutral-100">Aeroport Lausanne Blecherette</h1>
        <div class="flex">
          <Icon icon="la:flag-usa" class="text-neutral-100" />
          <span class="text-lg font-semibold text-neutral-300">LSGL</span>
          <span class="ml-2 text-lg text-neutral-300">Elev. 1981m</span>
        </div>
        <div>
          <h3 class="text-md text-neutral-300">Runways</h3>

          <ul>
            <li>
              <span class="text-neutral-300 font-semibold ml-2">02/20</span>
              <span class="text-neutral-300 ml-2">800m</span>
              <span class="text-neutral-300 ml-2">Grass</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="map" ref="mapContainer" class="w-full h-80 bg-gray-400"></div>
  </div>

  <div class="m-2">
    <h2 class="text-xl text-neutral-800">Weather</h2>
  </div>

  <div class="m-2">
    <h2 class="text-xl text-neutral-800">NOTAMs</h2>
  </div>

  <div class="m-2">
    <h2 class="text-xl text-neutral-800">METAR</h2>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card'

const map = shallowRef<maplibregl.Map>()

const mapContainer = shallowRef()

import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { Icon } from '@iconify/vue'
import { markRaw, onMounted, onUnmounted, shallowRef } from 'vue'

const MAPTILER_KEY = 'get_your_own_OpIi9ZULNHzrESv6T2vL'

onMounted(() => {
  const initialState = { lng: 6.617804, lat: 46.543945, zoom: 12 }

  map.value = new maplibregl.Map({
    container: 'map',
    style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${MAPTILER_KEY}`,
    center: [initialState.lng, initialState.lat],
    pitch: 20,
    zoom: initialState.zoom
  })

  map.value?.on('load', () => {
    // Insert the layer beneath any symbol layer.
    const layers = map.value?.getStyle().layers

    if (!layers) return

    let labelLayerId
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
        labelLayerId = layers[i].id
        break
      }
    }

    map.value?.addSource('openmaptiles', {
      url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${MAPTILER_KEY}`,
      type: 'vector'
    })

    if (map.value) {
      new maplibregl.Marker().setLngLat([initialState.lng, initialState.lat]).addTo(map.value)
    }

    map.value?.setPadding({
      left: 400,
      top: 0,
      right: 0,
      bottom: 0
    })

    map.value?.easeTo({
      zoom: 14,
      duration: 3000,
      pitch: 60
    })

    map.value?.addLayer(
      {
        id: '3d-buildings',
        source: 'openmaptiles',
        'source-layer': 'building',
        type: 'fill-extrusion',
        minzoom: 15,
        filter: ['!=', ['get', 'hide_3d'], true],
        paint: {
          'fill-extrusion-color': [
            'interpolate',
            ['linear'],
            ['get', 'render_height'],
            0,
            'lightgray',
            200,
            'royalblue',
            400,
            'lightblue'
          ],
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            16,
            ['get', 'render_height']
          ],
          'fill-extrusion-base': [
            'case',
            ['>=', ['get', 'zoom'], 16],
            ['get', 'render_min_height'],
            0
          ]
        }
      },
      labelLayerId
    )
  })
})

onUnmounted(() => {
  map.value?.remove()
})
</script>
