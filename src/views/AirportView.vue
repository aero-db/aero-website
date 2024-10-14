<template>
  <div class="flex flex-col">
    <div class="m-auto flex justify-center w-full max-w-6xl">
      <div v-if="airport" class="flex-1 flex flex-col justify-center align-middle">
        <h1 class="text-primary text-5xl font-semibold">{{ airport.icao }}</h1>
        <h2 class="text-4xl">{{ airport.name }}</h2>
        <div class="mt-4 opacity-70">
          <div>
            <span class="text-primary-200 mr-2">Elevation:</span>
            <span class="font-semibold">{{ airport.elevation }}ft</span>
          </div>
          <div class="flex">
            <span class="text-primary-200 mr-2">Location:</span>
            <span class="font-semibold">Switzerland </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/1200px-Flag_of_Switzerland_%28Pantone%29.svg.png"
              class="w-4 h-4 m-1"
            />
          </div>
          <div class="flex align-middle">
            <span>03h30 AM UTC </span>
            <Icon class="text-primary-300 ml-2 text-2xl" icon="wi:wu-rain" />
            <Icon class="text-primary-300 text-xl" icon="mdi:arrow-top-left-thin" />
            <span>260°/40</span>
          </div>
        </div>
      </div>
      <div class="flex-1 flex justify-center align-middle">
        <canvas id="cobe" style="width: 500px; height: 500px" width="2000" height="2000"></canvas>
      </div>
    </div>

    <div class="mt-4">
      <h3 class="mb-8 text-primary-300 text-3xl font-semibold">Overview</h3>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>

  <!-- <div class="m-2">
    <h2 v-if="airportInternal" class="text-xl text-neutral-800">Weather</h2>
    {{ airportInternal }}
  </div> -->
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import createGlobe from 'cobe'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'

onMounted(() => {
  let phi = 0
  let canvas = document.getElementById('cobe') as HTMLCanvasElement

  const globe = createGlobe(canvas, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0,
    dark: 0,
    diffuse: 1.2,
    scale: 1,
    mapSamples: 10000,
    mapBrightness: 6,
    baseColor: [0.1, 0.1, 0.1],
    markerColor: [0.5, 0.5, 1],
    glowColor: [0.3, 0.3, 0.3],
    offset: [0, 0],
    markers: [
      { location: [37.7595, -122.4367], size: 0.03 },
      { location: [40.7128, -74.006], size: 0.1 }
    ],
    onRender: (state) => {
      // Called on every animation frame.
      // `state` will be an empty object, return updated params.
      state.phi = phi
      phi += 0.001
    }
  })
})

const route = useRoute()

const { data: airport, isLoading } = useQuery({
  queryKey: ['airport', route.params.icao],
  queryFn: async () => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/airports/' + route.params.icao)
    return response.json()
  }
})
</script>
