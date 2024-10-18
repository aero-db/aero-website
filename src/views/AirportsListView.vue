<template>
  <div class="flex flex-wrap">
    <ul v-for="airport in airports" :key="airport.icao" class="p-2">
      <li>
        <RouterLink :to="`/airport/${airport.icao}`" class="hover:text-primary-300 duration-100">
          <span class="mr-1 font-semibold">{{ airport.icao }}</span>
          <span>{{ airport.name }}</span> -
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable'

import Column from 'primevue/column'

import { useQuery } from '@tanstack/vue-query'
import { RouterLink } from 'vue-router'
import { aero } from '@/api'

const { data: airports, isLoading } = useQuery({
  queryKey: ['airports'],
  queryFn: async () => {
    return aero.airport.list()
  }
})
</script>
