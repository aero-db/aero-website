<template>
  <div class="flex flex-col">
    <div class="relative w-screen h-96 flex justify-center">
      <!-- MAP -->
      <Map.OlMap
        ref="mapRef"
        v-if="airport && airport.coordinates"
        class="w-full h-full absolute top-0 left-0"
        :controls="[]"
      >
        <Map.OlView
          ref="viewRef"
          :center="[airport.coordinates.longitude, airport.coordinates.latitude]"
          :zoom="14"
          :padding="[0, 0, 0, 128]"
        />
        <!-- <Layers.OlTileLayer ref="osmLayer" title="OSM">
          <Sources.OlSourceOsm />
        </Layers.OlTileLayer> -->

        <Layers.OlTileLayer>
          <Sources.OlSourceTileJson
            :url="'https://api.maptiler.com/maps/dataviz-dark/tiles.json?key=56RhtT7yhQhy27Y5n8xl'"
            :tileSize="512"
            crossOrigin="anonymous"
          />
        </Layers.OlTileLayer>
      </Map.OlMap>
      <div class="w-full h-full absolute top-0 left-0" id="map"></div>

      <Map> </Map>

      <!-- side overlay -->
      <div
        class="z-10 size-full absolute bg-gradient-to-r from-surface-900 from-10% via-70% to-90% via-transparent to-surface-900"
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
            <Icon class="text-primary-300 text-xl" icon="mdi:arrow-top-left-thin" />
            <span>260°/40</span>
          </div>
        </div>
      </div>
    </div>

    <div class="m-auto flex w-full max-w-6xl mt-4 p-6">
      <h3 class="mb-8 text-primary-300 text-3xl font-semibold">Data</h3>
      {{ JSON.stringify(airport) }}
      <!-- <div class="flex-1 flex justify-center align-middle m-4">
        <MapboxMap
          v-if="airport && airport.coordinates"
          :style="{
            width: '400px',
            height: '400px',
            borderRadius: '1rem',
            background: 'rgba(0, 0, 0, 0.1)'
          }"
          access-token="pk.eyJ1IjoiY3lyaWFxdWUtaGl2ZSIsImEiOiJjbHEwd2N2eWEwMmhrMnNtdjR2cWN3d2h0In0.zc0FY-k5BxRZDOGzlSt_xQ"
          map-style="mapbox://styles/mapbox/dark-v11"
          :zoom="1"
          :center="[airport.coordinates.longitude, airport.coordinates.latitude]"
          :projection="'globe'"
        />
      </div> -->
    </div>

    <!-- <div class="mt-4">
 
      <MapboxMap
        v-if="airport && airport.coordinates"
        :style="{
          width: '100%',
          height: '400px',
          borderRadius: '1rem',
          background: 'rgba(0, 0, 0, 0.1)'
        }"
        access-token="pk.eyJ1IjoiY3lyaWFxdWUtaGl2ZSIsImEiOiJjbHEwd2N2eWEwMmhrMnNtdjR2cWN3d2h0In0.zc0FY-k5BxRZDOGzlSt_xQ"
        map-style="mapbox://styles/mapbox/dark-v11"
        :zoom="14"
        :center="[airport.coordinates.longitude, airport.coordinates.latitude]"
      />
    </div> -->
  </div>

  <!-- <div class="m-2">
    <h2 v-if="airportInternal" class="text-xl text-neutral-800">Weather</h2>
    {{ airportInternal }}
  </div> -->
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { inject, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { aero } from '@/api'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Layers, Map, Sources } from 'vue3-openlayers'

const route = useRoute()
const map = ref<typeof Map.OlMap>()

const { data: airport, isLoading } = useQuery({
  queryKey: ['airport', route.params.icao],
  queryFn: async () => {
    return await aero.airport.get(String(route.params.icao))
  }
})

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
</script>
