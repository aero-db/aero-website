<template>
  <DataTable
    :value="airports"
    :loading="isLoading"
    :paginator="true"
    :rows="10"
    :rowsPerPageOptions="[5, 10, 20]"
  >
    <Column field="icao" header="ICAO">
      <template #body="{ data }">
        <RouterLink
          :to="{
            name: 'airport',
            params: { icao: data.icao }
          }"
        >
          <span>{{ data.icao }}</span>
        </RouterLink>
      </template>
    </Column>
    <Column field="iata" header="IATA"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="city" header="City"></Column>
    <Column field="country" header="Country"></Column>
  </DataTable>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable'

import Column from 'primevue/column'

import { useQuery } from '@tanstack/vue-query'
import { RouterLink } from 'vue-router'

const { data: airports, isLoading } = useQuery({
  queryKey: ['airports'],
  queryFn: async () => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/airports')
    return response.json()
  }
})
</script>
