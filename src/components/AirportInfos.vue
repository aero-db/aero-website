<template>
  <div v-if="airport">
    <h1 class="text-primary text-5xl font-semibold">
      <span>{{ airport.icao }}</span>
      <span class="text-primary-200 text-2xl ml-2 opacity-50">{{ airport.iata }}</span>
    </h1>

    <h2 class="text-4xl" v-if="airport">{{ airport.name }}</h2>

    <div class="mt-4 opacity-70">
      <div>
        <span class="text-primary-200 mr-2">Elevation:</span>
        <span class="font-semibold" v-if="airport">{{ airport.elevation }}ft</span>
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
        <AirportWeather
          v-if="airport && airport.coordinates"
          :latitude="airport.coordinates.latitude"
          :longitude="airport.coordinates.longitude"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <Skeleton class="my-1 max-w-32" height="3rem"></Skeleton>
    <Skeleton class="my-1 max-w-36" height="2rem"></Skeleton>
    <Skeleton class="my-1 max-w-36" height="1rem"></Skeleton>
    <Skeleton class="my-1 max-w-36" height="1rem"></Skeleton>
    <Skeleton class="my-1 max-w-56" height="1rem"></Skeleton>
  </div>
</template>

<script setup lang="ts">
import { aero } from '@/api'
import { useQuery } from '@tanstack/vue-query'
import Skeleton from 'primevue/skeleton'
import AirportWeather from './AirportWeather.vue'

const props = defineProps<{
  icao: string
}>()

const { data: airport } = useQuery({
  queryKey: ['airport', props.icao],
  queryFn: async () => {
    return await aero.airport.get(props.icao)
  }
})
</script>
