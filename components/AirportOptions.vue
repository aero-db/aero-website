<template>
  <div class="flex justify-center">
    <Button
      @click="option.onClick"
      v-for="option in options"
      class="m-2 !bg-surface-900 !hover:bg-surface-900"
      icon="pi pi-check"
      rounded
      aria-label="Filter"
      outlined
      v-tooltip="`${option.label}`"
      severity="contrast"
    >
      <Icon :icon="option.icon" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';

const props = defineProps<{
  airportId: string;
}>();

type AirportOption = {
  label: string;
  icon: string;
  external?: boolean;
  onClick?: () => void;
};

const options = ref<AirportOption[]>([
  {
    label: 'Airport map',
    icon: 'mdi:map',
    onClick: () => {
      // Handle Airport map click
    },
  },
  {
    label: 'NOTAMs',
    icon: 'mdi:announcement-outline',
    onClick: () => {
      // Handle NOTAMs click
    },
  },
  {
    label: 'Nearby airports',
    icon: 'material-symbols:multiple-airports-outline',
    onClick: () => {
      // Handle Nearby airports click
    },
  },
  {
    label: 'See raw data',
    icon: 'si:json-line',
    onClick: () => {
      // Handle See raw data click
      window.open(`https://api.aerodb.net/airports/${props.airportId}`, '_blank');
    },
  },
  {
    label: 'Report an issue',
    icon: 'material-symbols:flag-outline',
    onClick: () => {
      // Handle Report an issue click
    },
  },
  {
    label: 'Add to favourites',
    icon: 'material-symbols:star-outline',
    onClick: () => {
      // Handle Add to favourites click
    },
  },
]);
</script>
