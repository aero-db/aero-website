<template>
  <div class="m-auto flex justify-center w-full max-w-4xl relative mt-12">
    <div class="z-10 absolute p-6 top-0 mt-32 left-0 max-w-96">
      <h1 class="text-primary text-5xl font-semibold flex align-middle">
        <Image class="mr-2" src="./icon.svg" :width="54" />
        <span>AeroDB</span>
      </h1>
      <h2 class="mt-4 text-4xl opacity-80">
        Your complete and elegant source of aeronautical data
      </h2>
    </div>
    <div class="absolute top-0 right-0">
      <HomePageGlobe v-if="airports" :airports="airports" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { aero } from '@/api'
import HomePageGlobe from '@/components/HomePageGlobe.vue'
import { useQuery } from '@tanstack/vue-query'
import Image from 'primevue/image'

const { data: airports } = useQuery({
  queryKey: ['airports'],
  queryFn: async () => {
    return await aero.airport.list({
      limit: 300
    })
  }
})
</script>
