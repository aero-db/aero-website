<template>
  <div class="flex flex-col">
    <div class="relative w-screen h-96 flex justify-center">
      <!-- MAP -->

      <div class="w-full h-full absolute top-0 left-0" id="map">
        <AirportHeaderMap v-if="airport" :icao="airport.icao" />
      </div>

      <Map> </Map>

      <!-- side overlay -->
      <div
        class="z-10 size-full absolute bg-gradient-to-r from-surface-900 from-10% via-70% to-90% to-transparent"
      ></div>

      <AirportInfos
        class="absolute p-6 h-full flex-1 flex flex-col z-20 justify-center align-middle w-full max-w-6xl"
        :icao="String(route.params.icao)"
      />
    </div>

    <div class="m-auto flex flex-col w-full max-w-6xl mt-4 p-6">
      <h3 class="mb-8 text-primary-300 text-3xl font-semibold">NOTAM</h3>

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
    </div>

    <div class="m-auto flex flex-col w-full max-w-6xl mt-4 p-6">
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
    </div>
  </div>

  <!-- <div class="m-2">
    <h2 v-if="airportInternal" class="text-xl text-neutral-800">Weather</h2>
    {{ airportInternal }}
  </div> -->
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { aero } from '@/api'
import type { Map } from 'maplibre-gl'
import AirportInfos from '@/components/AirportInfos.vue'
import AirportHeaderMap from '@/components/AirportHeaderMap.vue'
const route = useRoute()

const { data: airport } = useQuery({
  queryKey: ['airport', route.params.icao],
  queryFn: async () => {
    return await aero.airport.get(String(route.params.icao))
  }
})
</script>
