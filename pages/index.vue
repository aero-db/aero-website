<template>
  <AeroDataTable :data="tableData" :is-loading="status === 'pending'" :default-filter="defaultFilter" @parameters-update="handleUpdate">
    <template #header>
      {{ aeroParameters }}
      <span class="text-2xl font-semibold">Title</span>
    </template>

    <template #options> Options </template>

    <template #columns>
      <GenericStringColumn v-if="true" header="name" field="name" sortable />
      <!-- <ShipmentLinkColumn v-if="true" header="key" field="key" sortable show-filter-menu />

      <ShipmentStatusColumn v-if="true" sortable field="status" header="status" show-filter-menu /> -->
    </template>
  </AeroDataTable>
</template>

<script setup lang="ts" generic="T extends Airport">
import { aero } from '@/aero';
import type { Airport, APIQueryParameters } from '@aerodb/js';
import type { DataTableFilterMetaData } from 'primevue/datatable';
import { useRoute } from 'vue-router';
import AeroDataTable from '~/components/data-table/AeroDataTable.vue';
import GenericStringColumn from '~/components/data-table/data/GenericStringColumn.vue';
const route = useRoute();

const aeroParameters = ref<APIQueryParameters<Airport>>(getAeroParametersFromRoute<T>(route));

const defaultFilter: Partial<Record<keyof Airport, DataTableFilterMetaData>> = {
  name: {
    value: undefined,
    matchMode: 'equals',
  },
};

const { data: tableData, status } = useAsyncData(
  `shipment:${JSON.stringify(aeroParameters.value)}`,
  () => {
    return aero.airport.list(aeroParameters.value);
  },
  {
    watch: [aeroParameters],
  }
);

/**
 * Handle the update of the data table parameters
 * @param parameters The new parameters
 */
function handleUpdate(parameters: APIQueryParameters<Airport>) {
  aeroParameters.value = parameters;

  // queryClient.invalidateQueries({
  //   queryKey: ['shipment', 'list']
  // });
}
</script>
