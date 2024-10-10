<template>
  <div class="relative">
    <div
      class="absolute left-0 top-0 h-full z-10 w-full bg-gradient-to-r from-neutral-800 via-transparent"
    >
      <div class="m-2" v-if="airport">
        <h1 class="text-2xl text-neutral-100">{{ airport.name }}</h1>
        <div class="flex">
          <Icon icon="la:flag-usa" class="text-neutral-100" />
          <span class="text-lg font-semibold text-neutral-300">{{ airport.icao }}</span>
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
    <h2 v-if="airportInternal" class="text-xl text-neutral-800">Weather</h2>
    {{ airportInternal }}
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
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'

const MAPTILER_KEY = 'get_your_own_OpIi9ZULNHzrESv6T2vL'

const route = useRoute()

const airport = ref()

onMounted(async () => {
  airport.value = await fetchAirport(String(route.params.icao))

  if (!airport.value) {
    return
  }

  map.value = new maplibregl.Map({
    container: 'map',
    style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${MAPTILER_KEY}`,
    center: [airport.value.coordinates.longitude, airport.value.coordinates.latitude],
    pitch: 20,
    zoom: 12
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
      new maplibregl.Marker()
        .setLngLat([airport.value.coordinates.longitude, airport.value.coordinates.latitude])
        .addTo(map.value)
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

async function fetchAirport(icao: string) {
  const response = await fetch(import.meta.env.VITE_API_URL + '/airports/' + icao, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'debug'
    }
  })
  return response.json()
}

const { data: airportInternal } = useQuery({
  queryKey: ['airport', [route.params.icao], 'internal'],
  queryFn: async () => {}
})
</script>
