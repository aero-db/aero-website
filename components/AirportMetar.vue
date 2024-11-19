<template>
  <span class="text-primary-200 font-semibold">METAR {{ props.icao }}</span>
  <span>{{ metar }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  icao: string;
}>();

const { data: metar, status } = useAsyncData(`metar:${props.icao}`, () => getMetar(props.icao));

async function getMetar(icao: string) {
  const response = await fetch(`https://aviationweather.gov/api/data/metar?ids=${icao}&format=json&taf=false&hours=12&limit=1`);
  debugger;
  return response.text();
}
</script>
