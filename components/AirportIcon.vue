<template>
  <Icon :icon="icon" />
</template>

<script setup lang="ts">
import type { Airport } from '@aerodb/js';
import { Icon } from '@iconify/vue/dist/iconify.js';

const props = defineProps<{
  airportType: Airport['type'];
}>();

const icon = computed(() => {
  switch (props.airportType) {
    case 'largeAirport':
      return 'mdi:airplane';
    case 'mediumAirport':
      return 'mdi:airplane';
    case 'smallAirport':
      return 'mdi:airplane';
    case 'heliport':
      return 'carbon:navaid-helipad';
    case 'seaplaneBase':
      return 'carbon:navaid-seaplane';
    case 'closed':
      return 'si:close-circle-line';
    case 'baloonPort':
      return 'iconoir:hot-air-balloon';
    default:
      return 'mdi:airplane';
  }
});
</script>
