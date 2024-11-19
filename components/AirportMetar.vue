<template>
  <span v-if="metars && metars[0]">{{ metars[0] }}</span>
  <span v-else>METAR not available</span>
</template>

<script setup lang="ts">
import { aero } from '~/aero';

const props = defineProps<{
  icao: string;
}>();

const { data: metars, status } = useAsyncData(`metar:${props.icao}`, () => fetchMetars(props.icao));

async function fetchMetars(icao: string): Promise<string[]> {
  return await aero.airport.metar(icao);
}
</script>
