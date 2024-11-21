<template>
  <div>
    <div v-focustrap class="px-4">
      <IconField>
        <InputIcon>
          <Icon icon="mdi:search" />
        </InputIcon>
        <InputText v-model="search" autofocus type="search" class="w-full" size="large" placeholder="Search for an airport, airline, notam..." />
      </IconField>
    </div>
    <div v-if="results" class="pt-4">
      <NuxtLink v-for="airport in results.airports" :key="airport.airportId" class="flex items-center px-4" :to="`/airport/${airport.airportId}`">
        <AirportIcon class="text-primary text-4xl m-2" :airport-type="airport.type" />
        <div class="flex flex-col">
          <span class="text-xl flex-1">{{ airport.name }}</span>
          <div class="flex">
            <span class="text-muted font-bold text-sm opacity-50">{{ airport.iataCode || airport.icaoCode || airport.airportId }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div v-if="!results && !search" class="text-center flex flex-col opacity-10 items-center justify-center p-24">
      <Icon class="text-primary text-4xl m-2" icon="mdi:airplane" />
      <span class="text-2xl">Search for something to begin</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { api } from '@aerodb/js';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { watchDebounced } from '@vueuse/core';
import { IconField, InputIcon, InputText } from 'primevue';
import { aero } from '~/aero';

const search = ref('');
const results = ref<api.paths['/search']['get']['responses']['200']['content']['application/json']>();

watchDebounced(
  search,
  () => {
    searchAirports(search.value);
  },
  { debounce: 300, maxWait: 300 }
);

const searchAirports = async (searchValue: string) => {
  if (searchValue) {
    results.value = await aero.search(searchValue);
  }
};
</script>
