<template>
  <div class="m-auto flex justify-center mt-24 w-full max-w-6xl">
    <div class="flex-1 flex flex-col justify-center align-middle max-w-96">
      <h1 class="text-primary text-5xl font-semibold">AeroDB</h1>
      <h2 class="text-4xl">Your trusted source or aeronautical data</h2>
    </div>
    <div class="flex-1 flex justify-center align-middle">
      <canvas id="cobe" style="width: 500px; height: 500px" width="2000" height="2000"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import createGlobe from 'cobe'
import { onMounted } from 'vue'

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
</script>

<style scoped>
/* Your component styles go here */
</style>
