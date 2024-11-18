<template>
  <div class="flex justify-center bg-surface-900 bg-opacity-70 backdrop-blur-sm border-surface-800 fixed bottom-0 left-0 w-full">
    <div class="flex w-full max-w-5xl font-medium text-surface-300 items-center justify-center">
      <NuxtLink
        :to="`/airport/${$route.params.airportId}`"
        class="flex flex-col p-4 duration-100 items-center opacity-50"
        active-class="!opacity-100"
      >
        <Icon class="text-xl" icon="mdi:airplane" />
        <span class="text-xs">Overview</span>
      </NuxtLink>
      <NuxtLink
        :to="`/airport/${$route.params.airportId}/map`"
        class="flex flex-col p-4 duration-100 items-center opacity-50"
        active-class="!opacity-100"
      >
        <Icon class="text-xl" icon="icon-park-outline:road" />
        <span class="text-xs">Map</span>
      </NuxtLink>
      <!-- <NuxtLink to="/frequencies" class="flex flex-col p-4 hover:text-primary-300 duration-100 items-center opacity-50" active-class="opacity-100">
        <Icon class="text-xl" icon="mynaui:radio" />
        <span class="text-xs">NOTAMs</span>
      </NuxtLink>
      <NuxtLink to="/settings" class="flex flex-col p-4 hover:text-primary-300 duration-100 items-center opacity-50" active-class="opacity-100">
        <Icon class="text-xl" icon="mage:dots" />
        <span class="text-xs">More</span>
      </NuxtLink> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import Image from 'primevue/image';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { Drawer } from 'primevue';
import { ref } from 'vue';

const showDrawer = ref(false);

const items: {
  label: string;
  icon: string;
  url: string;
  external?: boolean;
}[] = [
  // {
  //   label: 'Airlines',
  //   icon: 'mdi:airplane',
  //   url: '/airlines'
  // },
  // {
  //   label: 'Flights',
  //   icon: 'mdi:airplane-landing',
  //   url: '/flights'
  // },
  {
    label: 'API Doc',
    icon: 'mdi:code-braces',
    external: true,
    url: 'https://api.aerodb.net/doc.html',
  },
];
</script>
