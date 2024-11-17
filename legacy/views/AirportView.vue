<template>
  <div class="flex flex-col lg:flex-row">
    <AirportInfos
      class="p-4 h-full flex-1 flex flex-col min-w-96"
      :icao="String(route.params.icao)"
    />

    <div class="w-full h-96 p-0 m-0 mt-2">
      <AirportMap :icao="String(route.params.icao)" />
    </div>

    <!-- <div class="m-auto flex flex-col w-full max-w-6xl mt-4 p-6">
      <h3 class="mb-8 text-primary-300 text-3xl font-semibold">TAF</h3>

      <div class="mt-4 flex justify-between">
        <div>
          <h4 class="text-xl font-semibold">RWY 03/21 CLSD</h4>
          <p class="text-sm">From 2021-10-01 00:00 UTC to 2021-10-01 23:59 UTC</p>
        </div>
        <div>
          <Icon class="text-primary-300" icon="carbon:warning-filled" />
        </div>
      </div>

      <div class="mt-4 flex justify-between blur-md">
        <div>
          <h4 class="text-xl font-semibold">RWY 03/21 CLSD</h4>
          <p class="text-sm">From 2021-10-01 00:00 UTC to 2021-10-01 23:59 UTC</p>
        </div>
        <div>
          <Icon class="text-primary-300" icon="carbon:warning-filled" />
        </div>
      </div>

      <div class="mt-4 flex justify-between blur-md">
        <div>
          <h4 class="text-xl font-semibold">RWY 03/21 CLSD</h4>
          <p class="text-sm">From 2021-10-01 00:00 UTC to 2021-10-01 23:59 UTC</p>
        </div>
        <div>
          <Icon class="text-primary-300" icon="carbon:warning-filled" />
        </div>
      </div>
    </div> -->
  </div>

  <!-- <div class="m-2">
    <h2 v-if="airportInternal" class="text-xl text-neutral-800">Weather</h2>
    {{ airportInternal }}
  </div> -->
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
import { aero } from '@/api'
import AirportInfos from '@/components/AirportInfos.vue'
import { watch } from 'vue'
import AirportMap from '@/components/AirportMap.vue'
import { useTitle } from '@vueuse/core'
const route = useRoute()
const pageTitle = useTitle()

watch(
  () => route.params.icao,
  () => {
    refetch()
  }
)

const { data: airport, refetch } = useQuery({
  queryKey: ['airport', route.params.icao],
  queryFn: async () => {
    return await aero.airport.get(String(route.params.icao))
  }
})

watch(
  () => airport.value,
  () => {
    if (!airport.value) {
      return
    }

    pageTitle.value = `${airport.value.name} · ${airport.value.iata || airport.value.icao} · AeroDB`
  }
)
</script>
