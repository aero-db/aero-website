<template>
  <div v-if="airport">
    <h1 class="text-primary text-3xl font-semibold">
      <span>{{ airport.icao }}</span>
      <span class="text-primary-200 text-2xl ml-2 opacity-50">{{ airport.iata }}</span>
    </h1>

    <h2 class="text-2xl" v-if="airport">{{ airport.name }}</h2>

    <div class="mt-4 opacity-70">
      <div class="flex items-center">
        <span class="text-primary-200 mr-2">Location:</span>
        <span class="font-semibold">{{ airport.city }} </span>
        <Icon
          class="ml-2"
          v-if="airport.countryCode"
          :icon="`flag:${airport.countryCode?.toLocaleLowerCase()}-4x3`"
        />
      </div>

      <div v-if="airport.elevation">
        <span class="text-primary-200 mr-2">Elevation:</span>
        <span class="font-semibold">{{ airport.elevation }}ft</span>
      </div>

      <div class="mt-4">
        <span class="text-primary-200 font-bold">Current weather</span>
        <div class="flex align-middle">
          <AirportWeather
            v-if="airport && airport.coordinates"
            :latitude="airport.coordinates.latitude"
            :longitude="airport.coordinates.longitude"
          />
        </div>
      </div>

      <div>
        <span
          class="text-primary-200 mr-2 font-bold"
          v-if="airport.runways && airport.runways.length > 0"
          >Runways</span
        >
        <div v-for="runway in airport.runways" :key="runway.name">
          <span class="font-bold">{{ runway.name }}</span> -
          <span>{{ runway.length }}x{{ runway.width }}ft</span> -
          <span>{{ runway.surface }}</span>
        </div>
      </div>
      <div>
        <span
          class="text-primary-200 mr-2 font-bold"
          v-if="airport.frequencies && airport.frequencies.length > 0"
          >Frequencies</span
        >
        <div v-for="freq in airport.frequencies" :key="freq.frequency">
          <span class="font-bold">{{ freq.name }}</span> - <span>{{ freq.frequency }}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Skeleton class="my-1 max-w-32" height="3rem"></Skeleton>
    <Skeleton class="my-1 max-w-36" height="2rem"></Skeleton>
    <Skeleton class="my-1 max-w-36" height="1rem"></Skeleton>
    <Skeleton class="my-1 max-w-36" height="1rem"></Skeleton>
    <Skeleton class="my-1 max-w-56" height="1rem"></Skeleton>
    <Skeleton class="my-1 max-w-56" height="1rem"></Skeleton>
    <Skeleton class="my-1 max-w-56" height="1rem"></Skeleton>
    <Skeleton class="my-1 max-w-56" height="1rem"></Skeleton>
    <Skeleton class="my-1 max-w-56" height="1rem"></Skeleton>
  </div>
</template>

<script setup lang="ts">
import { aero } from '@/api'
import { useQuery } from '@tanstack/vue-query'
import Skeleton from 'primevue/skeleton'
import AirportWeather from './AirportWeather.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { computed } from 'vue'

const props = defineProps<{
  icao: string
}>()

const { data: airport } = useQuery({
  queryKey: computed(() => ['airport', props.icao]),
  queryFn: async () => {
    return await aero.airport.get(props.icao)
  }
})
</script>
