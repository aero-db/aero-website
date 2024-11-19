<template>
  <NuxtLayout name="airport">
    <div class="h-screen w-full">
      <AirportMap :airportId="String($route.params.airportId)" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: airport, error } = await useAsyncData(`airport:${String(route.params.airportId)}`, () =>
  aero.airport.get(String(route.params.airportId))
);

import { aero } from '~/aero';
import AirportMap from '~/components/AirportMap.client.vue';

useSeoMeta({
  title: `Map - ${airport.value?.name} (${airport.value?.iataCode || airport.value?.icaoCode || airport.value?.airportId}) - AeroDB`,
  description: airport?.value?.name,
});
</script>
