<template>
  <div class="m-auto flex justify-center mt-24 w-full max-w-6xl">
    <div class="flex-1 flex flex-col justify-center align-middle max-w-96">
      <h1 class="text-primary text-5xl font-semibold">AeroDB</h1>
      <h2 class="text-4xl">Your complete and elegant source of aeronautical data</h2>
    </div>
    <div class="flex-1 flex justify-center align-middle">
      <HomePageGlobe v-if="airports" :airports="airports" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { aero } from '@/api'
import HomePageGlobe from '@/components/HomePageGlobe.vue'
import { useQuery } from '@tanstack/vue-query'

const { data: airports } = useQuery({
  queryKey: ['airports'],
  queryFn: async () => {
    return await aero.airport.list()
  }
})
</script>
