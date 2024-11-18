<template>
  <NuxtLayout name="airport">
    <div v-if="airport" class="m-auto max-w-96 mb-20">
      <div class="flex p-2 mb-4 items-center">
        <div class="text-4xl m-2">
          <Icon icon="mdi:airplane" />
        </div>
        <div class="flex flex-col overflow-hidden">
          <h1 class="text-2xl text-nowrap">{{ airport.name }}</h1>
          <h4>{{ airport.iataCode || airport.icaoCode || airport.airportId }}</h4>
        </div>
      </div>

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
            <AirportWeather
              v-if="airport && airport.coordinates"
              :latitude="airport.coordinates.latitude"
              :longitude="airport.coordinates.longitude"
            />
          </div>
        </div>
      </Panel>
      <Panel class="mt-4" v-if="airport.runways && airport.runways.length > 0">
        <template #header>
          <div class="flex items-center">
            <Icon class="text-xl mr-1" icon="mingcute:road-line" />
            <span>Runways</span>
          </div>
        </template>
        <div class="flex items-center" v-for="runway in airport.runways">
          <span class="text-primary-200 mr-2 font-semibold">{{ runway.name }}</span>
          <span
            >{{ runway.length }} ft. of <span>{{ runway.surface }}</span></span
          >
        </div>
      </Panel>
      <Panel class="mt-4" v-if="airport.frequencies && airport.frequencies.length > 0">
        <template #header>
          <div class="flex items-center">
            <Icon class="text-xl mr-1" icon="lucide:radio-tower" />
            <span>Frequencies</span>
          </div>
        </template>
        <div class="flex items-center" v-for="freq in airport.frequencies">
          <span class="text-primary-200 mr-2 font-semibold">{{ freq.name }}</span>
          <span>{{ freq.frequency }} </span>
        </div>
      </Panel>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { Divider, Panel, TabList, TabPanels, Tabs } from 'primevue';
import AirportWeather from '~/components/AirportWeather.vue';
import { aero } from '~/aero';

const { airportId } = useRoute().params;

const { data: airport, error } = await useAsyncData(`airport:${airportId}`, () => aero.airport.get(String(airportId)));

useSeoMeta({
  title: `${airport.value?.name} (${airport.value?.iataCode || airport.value?.icaoCode || airport.value?.airportId}) - AeroDB`,
  description: airport?.value?.name,
});
</script>
