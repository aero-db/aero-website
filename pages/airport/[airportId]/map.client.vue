<template>
  <NuxtLayout name="airport">
    <div class="h-screen oveflow-hidden">
      <div class="h-screen w-screen">
        <AirportMapClient :airportId="String($route.params.airportId)" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();

const { data: airport, error } = await useAsyncData(`airport:${String(route.params.airportId)}`, () =>
  aero.airport.get(String(route.params.airportId))
);

import { aero } from '~/aero';
import AirportMapClient from '~/components/AirportMap.client.vue';

useSeoMeta({
  title: `Map - ${airport.value?.name} (${airport.value?.iataCode || airport.value?.icaoCode || airport.value?.airportId}) - AeroDB`,
  description: airport?.value?.name,
});
</script>
