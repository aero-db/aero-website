<template>
  <div class="m-auto flex flex-col w-full max-w-6xl mt-4 p-6" v-if="airport">
    <h3 class="mb-8 text-primary-300 text-3xl font-semibold">FREQUENCIES</h3>

    <div
      class="mt-4 flex justify-between"
      v-for="(freq, freqIndex) in airport.frequencies"
      :key="freqIndex"
    >
      <div class="flex items-end">
        <h4 class="text-xl font-semibold">{{ freq.type }}</h4>
        <p class="text-primary font-bold ml-2">{{ freq.frequency }}</p>
      </div>
      <div>
        <Icon class="text-primary-300" icon="carbon:warning-filled" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { aero } from '@/api'
import { useQuery } from '@tanstack/vue-query'

const props = defineProps<{
  icao: string
}>()

const { data: airport } = useQuery({
  queryKey: ['airport', props.icao],
  queryFn: async () => {
    return await aero.airport.get(props.icao)
  }
})
</script>
