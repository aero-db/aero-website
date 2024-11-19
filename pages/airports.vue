<template>
  <DataTable :value="airports" scrollable :scroll-height="`${tableHeight || 300}px`" id="dataTable" filter-display="menu">
    <Column field="name" header="Name">
      <template #body="{ data }: { data: Airport }">
        <NuxtLink :to="`/airport/${data.airportId}`">
          <span>{{ data.name }}</span>
          <span class="text-muted-color font-bold text-sm ml-2 opacity-60">{{ data.iataCode || data.icaoCode || data.airportId }}</span>
        </NuxtLink>
      </template>
    </Column>
    <Column field="city" header="Location">
      <template #body="{ data }: { data: Airport }">
        <div class="flex items-center">
          <span class="flex-1">{{ data.city }}</span>
          <Icon class="ml-2" v-if="data.countryCode" :icon="`flag:${data.countryCode?.toLocaleLowerCase()}-4x3`" />
        </div>
      </template>
    </Column>
    <Column field="type" header="Type"></Column>
  </DataTable>
</template>

<script setup lang="ts">
import type { Airport } from '@aerodb/js';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { useElementSize } from '@vueuse/core';
import { Column, DataTable } from 'primevue';
import { aero } from '~/aero';
import { ref } from 'vue';

const dataTableRef = ref(null);
const tableHeight = ref<number>(0);

// Watch body size to set data table size
onMounted(() => {
  const el = document.getElementById('body-content');
  const size = useElementSize(el);

  watch(
    () => size.height.value,
    (newValue) => {
      tableHeight.value = newValue;
    }
  );
});

const { data: airports, error } = await useAsyncData(`airports`, () => aero.airport.list());
</script>
