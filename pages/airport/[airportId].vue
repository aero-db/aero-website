<template>
  <h1 class="text-3xl font-bold underline">Airport</h1>
  <p>Here is the airport with id: {{ $route.params.airportId }}</p>
  {{ JSON.stringify(data) }}
  <NuxtLink to="/">Home</NuxtLink>
  <hr />
</template>

<script setup lang="ts">
import { aero } from '~/aero';
const { airportId } = useRoute().params;

const route = useRoute();
const { data, error } = await useAsyncData(`airport:${airportId}`, () => aero.airport.get(String(airportId)));
</script>
