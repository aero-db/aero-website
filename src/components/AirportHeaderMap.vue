<template>
  <div
    class="opacity-0 h-full duration-500"
    :class="{
      'opacity-100': ready
    }"
  >
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
        v-for="runway in airport.runways"
        :key="runway.name"
        :source-id="runway.name"
        :data="{
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'LineString',
                coordinates: calculateRunwayEndCoordinates(runway)
              },
              properties: runway
            }
          ]
        }"
      >
        <MglLineLayer
          :layer-id="runway.name"
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
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import type { Map } from 'maplibre-gl'
import { aero } from '@/api'
import { MglGeoJsonSource, MglLineLayer, MglMap } from '@indoorequal/vue-maplibre-gl'
import type { Runway } from '@aerodb/js'

const ready = ref(false)
const map = ref<Map>()

const style = 'https://api.maptiler.com/maps/dataviz-dark/style.json?key=56RhtT7yhQhy27Y5n8xl'

function onMapLoad({ map: loadedMap }: { map: Map }) {
  map.value = loadedMap
  map.value.setPadding({ left: 300, top: 0, right: 0, bottom: 0 })
  ready.value = true
}

const props = defineProps<{
  icao: string
}>()

const { data: airport } = useQuery({
  queryKey: ['airport', props.icao],
  queryFn: async () => {
    return await aero.airport.get(String(props.icao))
  }
})

// ROKJ
// const runway = {
//   RunwayId: 40177,
//   AirportId: 23693,
//   Length: 6552,
//   Width: 140,
//   Surface: 'Asphalt',
//   Heading: 21.0680122375,
//   Number: '03',
//   Designator: 'NONE',
//   Latitude: 26.3634700775,
//   Longitude: 126.7138214111,
//   PrimaryTakeoff: 'YES',
//   PrimaryLanding: 'YES',
//   PrimaryPattern: 'LEFT',
//   SecondaryTakeoff: 'YES',
//   SecondaryLanding: 'YES',
//   SecondaryPattern: 'LEFT',
//   P_VASI_Type: 'PAPI4',
//   P_VASI_Side: 'LEFT',
//   P_VASI_Pitch: '3.0',
//   S_VASI_Type: 'PAPI4',
//   S_VASI_Side: 'LEFT',
//   S_VASI_Pitch: '3.0',
//   P_ApproachLights_System: '',
//   P_ApproachLights_Strobes: '',
//   P_ApproachLights_Reil: '',
//   P_ApproachLights_Touchdown: '',
//   P_ApproachLights_EndLights: '',
//   S_ApproachLights_System: '',
//   S_ApproachLights_Strobes: '',
//   S_ApproachLights_Reil: '',
//   S_ApproachLights_Touchdown: '',
//   S_ApproachLights_EndLights: '',
//   P_ILS_Heading: '21.1',
//   P_ILS_Frequency: '110.95',
//   P_ILS_Ident: 'IKX',
//   P_ILS_Name: 'ILS RW03',
//   P_ILS_MagVar: '-3.8000',
//   P_ILS_Pitch: '',
//   P_ILS_DMErange: '27',
//   S_ILS_Heading: '',
//   S_ILS_Frequency: '',
//   S_ILS_Ident: '',
//   S_ILS_Name: '',
//   S_ILS_MagVar: '',
//   S_ILS_Pitch: '',
//   S_ILS_DMErange: ''
// }

function calculateRunwayEndCoordinates(runway: Runway): Array<[number, number]> {
  if (!runway.lowEnd?.coordinates || !runway.highEnd?.coordinates) {
    return [
      [0, 0],
      [0, 0]
    ]
  }

  return [
    [runway.lowEnd.coordinates.longitude, runway.lowEnd.coordinates.latitude],
    [runway.highEnd.coordinates.longitude, runway.highEnd.coordinates.latitude]
  ]
}
</script>
