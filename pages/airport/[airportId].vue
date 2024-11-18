<template>
  <div v-if="airport" class="m-2">
    <h1 class="text-2xl">{{ airport.name }}</h1>
    <h4>{{ airport.iataCode || airport.icaoCode || airport.airportId }}</h4>
    <Panel>
      <div class="flex items-center">
        <span class="text-primary-200 mr-2">Location:</span>
        <span class="font-semibold">{{ airport.city }} </span>
        <Icon class="ml-2" v-if="airport.countryCode" :icon="`flag:${airport.countryCode?.toLocaleLowerCase()}-4x3`" />
      </div>

      <div v-if="airport.elevation">
        <span class="text-primary-200 mr-2">Elevation:</span>
        <span class="font-semibold">{{ airport.elevation }}ft</span>
      </div>

      <Divider />

      <div>
        <span class="text-primary-200 font-bold">Current weather</span>
        <div class="flex align-middle">
          <AirportWeather v-if="airport && airport.coordinates" :latitude="airport.coordinates.latitude" :longitude="airport.coordinates.longitude" />
        </div>
      </div>

      <Divider />

      <AirportMap :airport-id="airport.airportId" />
    </Panel>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { Divider, Panel, TabList, TabPanels, Tabs } from 'primevue';
import AirportWeather from '~/components/AirportWeather.vue';
import { aero } from '~/aero';
import AirportMap from '~/components/AirportMap.vue';

const { airportId } = useRoute().params;

const route = useRoute();
const { data: airport, error } = await useAsyncData(`airport:${airportId}`, () => aero.airport.get(String(airportId)));
</script>
