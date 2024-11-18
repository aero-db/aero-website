<template>
  <span>03h30 AM UTC </span>
  <Icon class="text-primary-300 ml-2 text-2xl" icon="wi:wu-rain" />
  <div v-if="weather && weather.current" :style="{ transform: `rotate(${weather.current.wind_direction_10m}deg)` }">
    <Icon class="text-primary-300 text-xl" icon="lets-icons:arrow-top-long" />
  </div>

  <span v-if="weather">{{ weather.current.wind_direction_10m }}°/</span>
  <span v-if="weather">{{ weather.current.wind_speed_10m }}kt</span>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';

const props = defineProps<{
  latitude: number;
  longitude: number;
}>();

const { data: weather, status } = useAsyncData(`weather:${props.latitude}:${props.longitude}`, () => getWeather(props.latitude, props.longitude));

async function getWeather(latitude: number, longitude: number) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m`
  );
  return response.json();
}
</script>
