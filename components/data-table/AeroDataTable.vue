<!-- https://github.com/primefaces/primevue/issues/4646#issuecomment-2186641940 -->

<template>
  <DataTable
    ref="dt"
    v-model:filters="filters"
    v-model:multi-sort-meta="sorters"
    sort-mode="multiple"
    striped-rows
    removable-sort
    scrollable
    scroll-height="flex"
    filter-display="menu"
    :value="props.data"
    data-key="shipmentId"
    :virtual-scroller-options="{ itemSize: 48, numToleratedItems: 12 }"
    lazy
    :class="[isLoading ? 'opacity-40' : '']"
    class="delay-300 duration-150"
    @update:filters="handleFiltersUpdate"
    @update:multi-sort-meta="handleSortersUpdate"
  >
    <slot name="columns" />

    <!-- <StatusColumn v-if="true" class="hidden" /> -->

    <GenericStringColumn v-if="true" class="hidden" />

    <template #empty>
      {{ isLoading ? 'loading' : 'noData' }}
    </template>

    <template #loading>
      <div class="flex h-full items-center justify-center">
        <Icon icon="gg:spinner" class="animate-spin text-4xl font-semibold text-surface-50" />
      </div>
    </template>

    <!-- HEADER CONTAINER -->

    <div class="flex w-full select-none overflow-hidden p-4">
      <slot name="header" />

      <DataTablePresets
        :active-parameters="aeroParameters"
        :presets="props.presets || []"
        :active-preset-index="activePresetIndex"
        @update="handlePresetUpdate"
      />
      <slot name="options" />
    </div>
  </DataTable>
</template>

<script setup lang="ts" generic="T extends APIResource">
import DataTablePresets from './DataTablePresets.vue';
import type { TablePreset } from '@/types/TablePreset.types';

import { Icon } from '@iconify/vue/dist/iconify.js';
import DataTable, { type DataTableFilterMeta, type DataTableFilterMetaData, type DataTableSlots, type DataTableSortMeta } from 'primevue/datatable';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GenericStringColumn from './data/GenericStringColumn.vue';
import type { APIQueryParameters, APIResource } from '@aerodb/js';
import { convertPrimeFilterToAeroFilter } from '~/utils/dataTable.utils';
const router = useRouter();
const route = useRoute();

const emit = defineEmits<{
  /**
   * Emitted when the parameters are updated
   *
   * This can include the sort, filters, page or limit
   */
  (e: 'parametersUpdate', parameters: APIQueryParameters<T>): void;
}>();

const props = defineProps<{
  /**
   * The data to display
   */
  //   data: Array<AeroResourceData<T>> | undefined;
  data: Array<T> | null;

  /**
   * If the data is loading
   */
  isLoading: boolean;

  /**
   * If the data is fetching (see vue-query for more information)
   */
  isFetching: boolean;

  /**
   * Default primevue filters to use as fallback, this is **mandatory** for now
   *
   * **WARNING**: If a prop is not provided, the filter will crash
   */
  defaultFilters: {
    [key: string]: DataTableFilterMetaData;
  };

  /**
   * Collection of presets available for the table
   */
  presets?: Array<TablePreset<T>>;
}>();

defineSlots<
  {
    /**
     * Use for things like the page title
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    header: any;

    /**
     * Will be displayed at the end of the header, used for buttons likes "Create Shipment"
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options: any;

    /**
     * Columns to use
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: any;
  } & DataTableSlots
>();

/*
 *
 * Computed properties ------------------------------------------------------------------------
 *
 */

const sorters = computed({
  // getter
  get() {
    if (!route.query.sort) {
      return undefined;
    }

    const primeSorter = convertAeroSorterToPrimeSorter(JSON.parse(String(route.query.sort)));
    return primeSorter;
  },
  // setter
  set(newSorter) {
    router.push({
      name: route.name,
      query: { ...route.query, sort: JSON.stringify(convertPrimeSorterToAeroSorter(newSorter)) },
    });
  },
});

/**
 * The Data Table filters in primeVue format
 */
const filters = computed({
  // getter
  get() {
    if (!route.query.filters) {
      return props.defaultFilters;
    }

    const parameters = getAeroParametersFromRoute<T>(route);

    if (!parameters.filter) {
      return props.defaultFilters;
    }

    return convertAeroFilterToPrimeFilter(parameters.filter, props.defaultFilters);
  },
  // setter
  async set(newFilters) {
    const convertedFilters = convertPrimeFilterToAeroFilter(newFilters || props.defaultFilters);

    router.push({
      name: route.name,
      query: { ...route.query, filters: JSON.stringify(convertedFilters) },
    });
  },
});

/**
 * Currently applied parameters in aero format
 */
const aeroParameters = computed({
  // getter
  get() {
    return getAeroParametersFromRoute<T>(route) as APIQueryParameters<T>;
  },
  // setter
  async set(newParameters: APIQueryParameters<T>) {
    const newFilters = newParameters.filter || convertPrimeFilterToAeroFilter(props.defaultFilters);
    const newSorters = newParameters.sort || {};

    router.push({
      name: route.name,
      query: { ...route.query, filters: JSON.stringify(newFilters), sort: JSON.stringify(newSorters) },
    });
  },
});

/*
 *
 * END Computed properties  ------------------------------------------------------------------------
 *
 */

watch(aeroParameters, (newValue) => {
  emit('parametersUpdate', newValue);
});

const activePresetIndex = ref<number | null>(null);

/**
 * Called when the parameters are updated
 * @param newParameters - The new parameters
 */
function handleUpdateParameters(newParameters: APIQueryParameters<T>) {
  aeroParameters.value = newParameters;
}

/**
 *  Handle the update of the data table filters (dispatched by the data table)
 * @param newFilters The new filters in Prime format
 */
function handleFiltersUpdate(newFilters?: DataTableFilterMeta) {
  activePresetIndex.value = null;
  handleUpdateParameters({ ...aeroParameters, filter: convertPrimeFilterToAeroFilter(newFilters || props.defaultFilters) });
}

/**
 * Handle the update of the data table sorters (dispatched by the data table)
 * @param newSorters  The new sorters in Prime format
 */
function handleSortersUpdate(newSorters?: DataTableSortMeta[] | null) {
  activePresetIndex.value = null;
  handleUpdateParameters({
    ...aeroParameters.value,
    sort: convertPrimeSorterToAeroSorter(newSorters) as { [key in keyof T]?: 1 | -1 | undefined },
  });
}

/**
 *  Handle the update of the data table parameters
 * @param presetIndex  Index of the preset to toggle
 */
function handlePresetUpdate(presetIndex: number | null) {
  activePresetIndex.value = presetIndex;

  if (presetIndex === null || !props.presets?.[presetIndex]) {
    resetParameters();
    return;
  }

  const preset = props.presets[presetIndex];

  if (!preset.parameters.filter) {
    return;
  }

  if (preset.parameters.filter) {
    handleUpdateParameters(preset.parameters);
  }
}

/**
 * Reset the parameters to the default
 */
function resetParameters() {
  handleUpdateParameters({
    filter: convertPrimeFilterToAeroFilter(props.defaultFilters),
    sort: undefined,
  });
}
</script>
