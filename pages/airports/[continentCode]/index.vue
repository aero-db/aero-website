<template>
  <div class="container mx-auto p-4">
    <Breadcrumb :model="breadCrumb">
      <template #item="{ item }">
        <NuxtLink :to="item.url">
          <span>{{ item.label }}</span>
        </NuxtLink>
      </template>
    </Breadcrumb>

    <h1 class="mt-4 text-3xl font-bold mb-6">Airports in {{ continent }}</h1>

    <h2 class="text-2xl font-bold mb-6">By country</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <NuxtLink
        v-for="country in countries"
        :key="country.alpha2"
        :to="`/airports/${route.params.continentCode}/${country.alpha2}`"
        class="block p-4 bg-surface-800 text-white rounded-lg shadow hover:bg-primary transition"
      >
        <div class="flex items-center">
          <span class="flex-1">
            {{ country.name }}
          </span>
          <Icon :icon="`flag:${country.alpha2?.toLocaleLowerCase()}-4x3`" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { Breadcrumb } from 'primevue';
import type { MenuItem } from 'primevue/menuitem';
import { aero } from '~/aero';
import { continents } from '~/data/continents.data';

const route = useRoute();

const { data: countries } = useAsyncData(`countries:${route.params.continentCode}`, () => {
  return aero.countries.list({
    filter: {
      continent: route.params.continentCode,
    },
    limit: 300,
  });
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
];

const continent = continents[String(route.params.continentCode)];
</script>
