<template>
  <div class="w-full h-full absolute top-0 left-0" id="map">
    <MglMap :map-style="style" class="h-full" ref="map" :center="[0, 0]" :zoom="2"> </MglMap>
  </div>
</template>

<script setup lang="ts">
import { MglMap } from '@indoorequal/vue-maplibre-gl'

import { useQuery } from '@tanstack/vue-query'
import { aero } from '@/api'
const style = 'https://api.maptiler.com/maps/dataviz-dark/style.json?key=56RhtT7yhQhy27Y5n8xl'

const { data: airports, isLoading } = useQuery({
  queryKey: ['airports'],
  queryFn: async () => {
    return aero.airport.list()
  }
})
</script>
