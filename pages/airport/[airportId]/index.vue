<template>
  <NuxtLayout name="airport">
    <div class="relative h-full">
      <div v-if="airport" class="absolute z-10 p-4 sm:m-4 w-full sm:max-w-96 rounded-md">
        <div class="flex p-2 items-center">
          <div class="text-4xl m-2">
            <AirportIcon :airport-type="airport.type" />
          </div>
          <div class="flex flex-col">
            <h1 class="text-2xl text-nowrap">{{ airport.name }}</h1>
            <div class="flex items-center">
              <h4>{{ airport.iataCode || airport.icaoCode || airport.airportId }}</h4>
              <!-- <Tag rounded severity="warn" class="ml-2 text-xs">
                <span>Recently updated</span>
              </Tag> -->
            </div>
          </div>
        </div>

        <!-- <div>
          <AirportOptions :airportId="airport.airportId" />
        </div> -->

        <Panel>
          <div class="flex items-center">
            <span class="text-primary-200 mr-2">Location:</span>
            <span class="font-semibold">{{ airport.city }} </span>

            <NuxtLink :to="`/airports/${airport.continent}/${airport.countryCode}`">
              <Icon v-if="airport.countryCode" class="ml-2" :icon="`flag:${airport.countryCode?.toLocaleLowerCase()}-4x3`" />
            </NuxtLink>
          </div>

          <div v-if="airport.elevation">
            <span class="text-primary-200 mr-2">Elevation:</span>
            <span class="font-semibold">{{ airport.elevation }}ft</span>
          </div>

          <div v-if="airport.iataCode">
            <span class="text-primary-200 mr-2">IATA:</span>
            <span class="font-semibold">{{ airport.iataCode }}</span>
          </div>

          <div v-if="airport.icaoCode">
            <span class="text-primary-200 mr-2">ICAO:</span>
            <span class="font-semibold">{{ airport.icaoCode }}</span>
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
        <Panel v-if="airport.runways && airport.runways.length > 0" class="mt-2" toggleable>
          <template #header>
            <div class="flex items-center">
              <Icon class="text-xl mr-1" icon="mingcute:road-line" />
              <span>Runways</span>
            </div>
          </template>
          <div v-for="runway in airport.runways" :key="runway.name" class="flex items-center">
            <span class="text-primary-200 mr-2 font-semibold">{{ runway.name }}</span>
            <span
              >{{ runway.length }} ft. of <span>{{ runway.surface }}</span></span
            >
          </div>
        </Panel>

        <Panel v-if="airport.icaoCode" class="mt-2" toggleable>
          <template #header>
            <div class="flex items-center">
              <Icon class="text-xl mr-1" icon="ri:radar-fill" />
              <span>METAR</span>
            </div>
          </template>
          <div>
            <AirportMetar :icao="airport.icaoCode" />
          </div>
        </Panel>

        <Panel v-if="airport.frequencies && airport.frequencies.length > 0" class="mt-2" toggleable collapsed>
          <template #header>
            <div class="flex items-center">
              <Icon class="text-xl mr-1" icon="lucide:radio-tower" />
              <span>Frequencies</span>
            </div>
          </template>
          <div v-for="freq in airport.frequencies" :key="freq.name" class="flex items-center">
            <span class="text-primary-200 mr-2 font-semibold">{{ freq.name }}</span>
            <span>{{ freq.frequency }} </span>
          </div>
        </Panel>
      </div>
      <div class="fixed left-0 top-0 w-full h-full hidden md:block">
        <ClientOnly>
          <AirportMap :airport-id="String($route.params.airportId)" />
        </ClientOnly>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { Divider, Panel } from 'primevue';
import AirportWeather from '~/components/AirportWeather.vue';
import { aero } from '~/aero';
import { defineAsyncComponent } from 'vue';
import AirportMetar from '~/components/AirportMetar.vue';
import AirportIcon from '~/components/AirportIcon.vue';

const AirportMap = defineAsyncComponent(() => import('~/components/AirportMap.client.vue'));
const { airportId } = useRoute().params;

const { data: airport } = await useAsyncData(`airport:${airportId}`, () => aero.airport.get(String(airportId)));

useSeoMeta({
  title: `${airport.value?.iataCode || airport.value?.icaoCode || airport.value?.airportId} - ${airport.value?.name} - AeroDB`,
  description: airport?.value?.name,
});
</script>
