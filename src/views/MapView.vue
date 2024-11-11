<template>
  <div class="w-full h-full absolute top-0 left-0 overflow-hidden">
    <div
      class="absolute left-0 top-12 m-4 mt-6 bg-surface-900/90 rounded backdrop-blur-sm z-10 w-1/6 p-4 min-w-72"
      v-if="airportId"
    >
      <div class="relative">
        <div class="absolute top-0 right-0">
          <Icon class="text-2xl" :icon="'mdi:close'" />
        </div>
        <AirportInfos :icao="airportId" />
      </div>
    </div>
    <MglMap
      @map:click="handleMapClick"
      :map-style="style"
      @map:load="onMapLoad"
      :zoom="2"
      class="h-full"
      @map:moveend="handleBoundsUpdate"
      :center="[0, 0]"
    >
      <MglMarker
        v-for="airport in airports"
        :key="airport.icao"
        :coordinates="[airport.coordinates.longitude, airport.coordinates.latitude]"
      >
        <template #marker>
          <RouterLink :to="`/airport/${airport.icao}`">
            <div
              v-tooltip.top="airport.name"
              @click="handleSelectAirport(airport)"
              class="size-2 rounded-full cursor-pointer animate-fadein"
              :class="{
                'bg-primary': airportId !== airport.icao,
                'bg-primary-200': airportId == airport.icao
              }"
            ></div>
          </RouterLink>
        </template>
      </MglMarker>
    </MglMap>
  </div>
</template>

<script setup lang="ts">
import { MglMap, MglMarker } from '@indoorequal/vue-maplibre-gl'

import { aero } from '@/api'
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AirportInfos from '@/components/AirportInfos.vue'
import router from '@/router'
import type { Airport } from '@aerodb/js'
import type { Map } from 'maplibre-gl'
import { Icon } from '@iconify/vue/dist/iconify.js'
const style = 'https://api.maptiler.com/maps/dataviz-dark/style.json?key=56RhtT7yhQhy27Y5n8xl'
const map = ref<Map>()
const route = useRoute()
const bounds = ref()

const airportId = computed<string | null>({
  get() {
    if (route.params.icao) {
      return String(route.params.icao)
    }
    return null
  },
  set(value) {
    if (!value) {
      router.push({ name: 'airports' })
      return null
    }
    router.push({ name: 'airport', params: { icao: value } })
    return value
  }
})

const boundsVal = computed(() => {
  return bounds.value
})
const placehodlerData = ref<Airport[]>([])

onMounted(() => {
  if (route.params.icao) {
    airportId.value = String(route.params.icao)
    handleSelectAirport(airportId.value)
  }
})

// const { data: airports, isLoading } = useQuery({
//   queryKey: ['airports', boundsVal],
//   queryFn: async () => {

//   },
//   initialData: placehodlerData.value
// })

// watch(airports, (newValue: any) => {
//   if (!newValue || newValue.length === 0) return
//   console.log('new value', newValue)
//   placehodlerData.value = newValue
// })

function onMapLoad({ map: loadedMap }: { map: Map }) {
  map.value = loadedMap
  bounds.value = map.value?.getBounds()
  if (route.params.icao) {
    airportId.value = String(route.params.icao)
    handleSelectAirport(String(route.params.icao))
  }

  handleBoundsUpdate()
}

const airports = ref<Airport[]>([])

function handleMapClick(e: any) {}

async function handleBoundsUpdate() {
  bounds.value = map.value?.getBounds()

  const data = await aero.airport.list({
    filter: {
      coordinates: {
        $geoWithin: {
          $box: [
            [bounds.value?._sw.lat, bounds.value?._ne.lng],
            [bounds.value?._ne.lat, bounds.value?._sw.lng]
          ]
        }
      }
    },
    limit: 200
  })

  airports.value = data
}

function handleSelectAirport(icao: string) {
  const airport = airports.value.find((airport) => airport.icao === icao)

  if (!airport) return
  if (!airport.coordinates) return

  map.value?.flyTo({
    center: [airport.coordinates.longitude, airport.coordinates.latitude],
    duration: 1000
  })
}
</script>
