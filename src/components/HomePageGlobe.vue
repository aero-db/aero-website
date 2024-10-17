<template>
  <canvas id="cobe" style="width: 500px; height: 500px" width="2000" height="2000"></canvas>
</template>

<script setup lang="ts">
import type { Airport } from '@aerodb/js'
import createGlobe, { type Marker } from 'cobe'
import { onMounted, onUnmounted, ref } from 'vue'

const globe = ref<ReturnType<typeof createGlobe> | null>(null)

const props = defineProps<{
  airports: Airport[]
}>()

onMounted(() => {
  const markers: Marker[] = []
  props.airports.forEach((airport) => {
    if (!airport.coordinates) {
      return
    }

    markers.push({
      location: [airport.coordinates.latitude, airport.coordinates.longitude],
      size: 0.02
    })
  })

  let phi = 0
  let canvas = document.getElementById('cobe') as HTMLCanvasElement

  globe.value = createGlobe(canvas, {
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
    markers,
    onRender: (state) => {
      // Called on every animation frame.
      // `state` will be an empty object, return updated params.
      state.phi = phi
      phi += 0.001
    }
  })
})

onUnmounted(() => {
  globe.value?.destroy()
})
</script>
