<template>
  <div class="px-4" v-focustrap>
    <IconField>
      <InputIcon>
        <Icon icon="mdi:search" />
      </InputIcon>
      <InputText autofocus type="search" class="w-full" size="large" v-model="search" placeholder="Search for an airport, airline, notam..." />
    </IconField>
  </div>
  <div class="pt-4" v-if="results">
    <NuxtLink class="flex items-center px-4" :to="`/airport/${airport.airportId}`" v-for="airport in results.airports" :key="airport.airportId">
      <Icon class="text-primary text-4xl m-2" icon="mdi:airplane" />
      <div class="flex flex-col">
        <span class="text-xl flex-1">{{ airport.name }}</span>
        <span class="text-muted font-bold text-sm opacity-50">{{ airport.iataCode || airport.icaoCode || airport.airportId }}</span>
      </div>
    </NuxtLink>
  </div>

  <div v-if="!results && !search" class="text-center flex flex-col opacity-10 items-center justify-center p-24">
    <Icon class="text-primary text-4xl m-2" icon="mdi:airplane" />
    <span class="text-2xl">Search for something to begin</span>
  </div>
</template>

<script setup lang="ts">
import type { api } from '@aerodb/js';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { watchDebounced } from '@vueuse/core';
import { IconField, InputGroup, InputIcon, InputText } from 'primevue';
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
