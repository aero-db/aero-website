<template>
  <MglMap
    v-if="airport && airport.coordinates"
    :center="[airport.coordinates.longitude, airport.coordinates.latitude]"
    :zoom="14"
    :pitch="60"
    :map-style="style"
  >
    <MglMarker :coordinates="[airport.coordinates.longitude, airport.coordinates.latitude]" />
  </MglMap>
</template>

<script lang="ts" setup>
import { MglMap, MglMarker } from '@indoorequal/vue-maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { aero } from '~/aero';

const props = defineProps<{
  airportId: string;
}>();

const style = 'https://api.maptiler.com/maps/dataviz-dark/style.json?key=56RhtT7yhQhy27Y5n8xl';
const { data: airport } = useAsyncData(`airport:${props.airportId}`, async () => {
  return aero.airport.get(props.airportId);
});
</script>
