<template>
  <div class="container mx-auto p-4">
    <Breadcrumb :model="breadCrumb">
      <template #item="{ item, props }">
        <NuxtLink :to="item.url">
          <div class="flex items-center">
            <span>{{ item.label }}</span>
            <Icon class="ml-2" v-if="item.icon" :icon="item.icon" />
          </div>
        </NuxtLink>
      </template>
    </Breadcrumb>

    <h1 class="mt-4 text-3xl font-bold mb-6" v-if="country">Airports in {{ country.name }}</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <NuxtLink
        v-for="airport in airports"
        :key="airport.airportId"
        :to="`/airport/${airport.airportId}`"
        class="block p-4 bg-surface-800 text-white rounded-lg shadow hover:bg-primary transition"
      >
        <div class="flex items-center">
          <span class="flex-1">
            {{ airport.name }}
          </span>
          <Tag>{{ airport.iataCode || airport.icaoCode || airport.airportId }}</Tag>
          <!-- <Icon :icon="`flag:${country.alpha2?.toLocaleLowerCase()}-4x3`" /> -->
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { Breadcrumb, Tag } from 'primevue';
import type { MenuItem } from 'primevue/menuitem';
import { aero } from '~/aero';
import { continents } from '~/data/continents.data';

const route = useRoute();

const { data: airports } = useAsyncData(`airports:country:${route.params.countryCode}`, () => {
  return aero.airport.list({
    filter: {
      countryCode: route.params.countryCode,
    },
  });
});

const { data: country } = useAsyncData(`country:${route.params.countryCode}`, () => {
  return aero.countries.get(String(route.params.countryCode));
});

const breadCrumb: MenuItem[] = [
  {
    label: 'Airports',
    url: '/airports',
  },
  {
    label: continents[String(route.params.continentCode)],
    url: `/airports/${route.params.continentCode}`,
  },
  {
    label: country.value?.name,
    url: `/airports/${route.params.continentCode}/${route.params.countryCode}`,
    icon: `flag:${country.value?.alpha2.toLocaleLowerCase()}-4x3`,
  },
];

const continent = continents[String(route.params.continentCode)];
</script>
