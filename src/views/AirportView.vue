<template>
  <div class="flex flex-col">
    <div class="relative w-screen h-96 flex justify-center">
      <!-- MAP -->

      <div class="w-full h-full absolute top-0 left-0" id="map">
        <MglMap
          @map:load="onMapLoad"
          class="h-full"
          :map-style="style"
          ref="map"
          v-if="airport && airport.coordinates"
          :center="[airport.coordinates.longitude, airport.coordinates.latitude]"
          :zoom="14"
          :pitch="60"
        >
          <MglGeoJsonSource
            source-id="runway-03"
            :data="{
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  geometry: {
                    type: 'LineString',
                    coordinates: [
                      [126.7102229206, 26.3550997303], // Secondary End
                      [126.7174204227, 26.3718403348] // Primary End
                    ]
                  },
                  properties: {
                    RunwayId: 40177,
                    AirportId: 23693,
                    Length: 6552,
                    Width: 140,
                    Surface: 'Asphalt',
                    Heading: 21.0680122375,
                    Number: '03',
                    Designator: 'NONE'
                  }
                }
              ]
            }"
          >
            <MglLineLayer
              layer-id="runway-03"
              :layout="{}"
              :paint="{
                'line-color': '#7586FF',
                'line-width': 8,
                'line-opacity': 0.5
              }"
            >
            </MglLineLayer>
          </MglGeoJsonSource>
        </MglMap>
      </div>

      <Map> </Map>

      <!-- side overlay -->
      <div
        class="z-10 size-full absolute bg-gradient-to-r from-surface-900 from-10% via-70% to-90% to-transparent"
      ></div>

      <div
        v-if="airport"
        class="absolute p-6 h-full flex-1 flex flex-col z-20 justify-center align-middle w-full max-w-6xl"
      >
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
            <div
              v-if="weather && weather.current"
              :style="{ transform: `rotate(${weather.current.wind_direction_10m}deg)` }"
            >
              <Icon class="text-primary-300 text-xl" icon="lets-icons:arrow-top-long" />
            </div>

            <span v-if="weather">{{ weather.current.wind_direction_10m }}°/</span>
            <span v-if="weather">{{ weather.current.wind_speed_10m }}knt</span>
          </div>
        </div>
      </div>
    </div>

    <div class="m-auto flex w-full max-w-6xl mt-4 p-6">
      <h3 class="mb-8 text-primary-300 text-3xl font-semibold">Data</h3>
      {{ JSON.stringify(airport) }}
      {{ weather }}
    </div>
  </div>

  <!-- <div class="m-2">
    <h2 v-if="airportInternal" class="text-xl text-neutral-800">Weather</h2>
    {{ airportInternal }}
  </div> -->
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { aero } from '@/api'
import { MglGeoJsonSource, MglLineLayer, MglMap } from '@indoorequal/vue-maplibre-gl'
import type { Map } from 'maplibre-gl'
const route = useRoute()
const map = ref<Map>()

const style = 'https://api.maptiler.com/maps/dataviz-dark/style.json?key=56RhtT7yhQhy27Y5n8xl'

const { data: airport, isLoading } = useQuery({
  queryKey: ['airport', route.params.icao],
  queryFn: async () => {
    return await aero.airport.get(String(route.params.icao))
  }
})

function onMapLoad({ map: loadedMap }: { map: Map }) {
  map.value = loadedMap
  map.value.setPadding({ left: 300, top: 0, right: 0, bottom: 0 })
}

// ROKJ
const runway = {
  RunwayId: 40177,
  AirportId: 23693,
  Length: 6552,
  Width: 140,
  Surface: 'Asphalt',
  Heading: 21.0680122375,
  Number: '03',
  Designator: 'NONE',
  Latitude: 26.3634700775,
  Longitude: 126.7138214111,
  PrimaryTakeoff: 'YES',
  PrimaryLanding: 'YES',
  PrimaryPattern: 'LEFT',
  SecondaryTakeoff: 'YES',
  SecondaryLanding: 'YES',
  SecondaryPattern: 'LEFT',
  P_VASI_Type: 'PAPI4',
  P_VASI_Side: 'LEFT',
  P_VASI_Pitch: '3.0',
  S_VASI_Type: 'PAPI4',
  S_VASI_Side: 'LEFT',
  S_VASI_Pitch: '3.0',
  P_ApproachLights_System: '',
  P_ApproachLights_Strobes: '',
  P_ApproachLights_Reil: '',
  P_ApproachLights_Touchdown: '',
  P_ApproachLights_EndLights: '',
  S_ApproachLights_System: '',
  S_ApproachLights_Strobes: '',
  S_ApproachLights_Reil: '',
  S_ApproachLights_Touchdown: '',
  S_ApproachLights_EndLights: '',
  P_ILS_Heading: '21.1',
  P_ILS_Frequency: '110.95',
  P_ILS_Ident: 'IKX',
  P_ILS_Name: 'ILS RW03',
  P_ILS_MagVar: '-3.8000',
  P_ILS_Pitch: '',
  P_ILS_DMErange: '27',
  S_ILS_Heading: '',
  S_ILS_Frequency: '',
  S_ILS_Ident: '',
  S_ILS_Name: '',
  S_ILS_MagVar: '',
  S_ILS_Pitch: '',
  S_ILS_DMErange: ''
}

const { data: weather } = useQuery({
  queryKey: ['weather', airport.value?.coordinates],
  enabled: !!airport.value,
  queryFn: async () => {
    if (!airport.value?.coordinates) return
    return await getWeather(airport.value?.coordinates)
  }
})

async function getWeather(coordinates: { latitude: number; longitude: number }) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=temperature_2m,is_day,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m`
  )
  return response.json()
}
</script>
