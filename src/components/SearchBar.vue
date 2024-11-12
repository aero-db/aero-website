<template>
  <IconField>
    <InputIcon><Icon icon="mdi:magnify" /></InputIcon>
    <InputText ref="searchInput" v-model="inputValue" size="small" placeholder="Search" loading />
    <InputIcon>
      <Icon
        v-show="isFetching"
        icon="line-md:loading-twotone-loop"
        class="text-primary animate-spin"
    /></InputIcon>
  </IconField>

  <div
    ref="resultsPanel"
    v-show="showPanel"
    class="absolute mt-4 bg-surface-900/95 p-2 border-2 border-surface-800 rounded"
  >
    <RouterLink
      @click="handleItemClick"
      class="flex p-2 hover:bg-surface-800 rounded duration-100"
      v-for="airport in searchResults?.airports"
      :key="airport.icao"
      :to="{
        name: 'airport',
        params: { icao: airport.icao }
      }"
    >
      <Icon icon="mdi-airplane" class="text-primary text-2xl" />
      <span class="ml-2 font-bold">{{ airport.icao }}</span>
      <span class="text-gray-300 ml-2">{{ airport.name }}</span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { aero } from '@/api'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { useQuery } from '@tanstack/vue-query'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import { watchDebounced, useFocus, useElementHover } from '@vueuse/core'
import { computed, ref } from 'vue'

const inputValue = ref('')
const query = ref('')

const searchInput = ref<HTMLInputElement | null>(null)
const resultsPanel = ref<HTMLDivElement | null>(null)

const { focused: inputFocused } = useFocus(searchInput)
const panelHover = useElementHover(resultsPanel)

const showPanel = computed(() => {
  if (panelHover.value) return true
  if (inputValue.value.length === 0) return false
  if (!searchResults.value) return false
  if (searchResults.value.airports.length === 0) return false
  if (!inputFocused.value) return false

  return true
})

watchDebounced(
  inputValue,
  (newVal) => {
    if (newVal.length < 2) {
      query.value = ''
      return
    }
    query.value = newVal
  },
  { debounce: 100 }
)

const emit = defineEmits<{
  (e: 'onItemClick'): void
}>()

const {
  data: searchResults,
  isLoading,
  isFetching
} = useQuery({
  queryKey: ['search', query],
  enabled: () => {
    return query.value.length > 2
  },
  queryFn: () => aero.search(query.value)
})

function handleItemClick() {
  inputFocused.value = false
  emit('onItemClick')
}
</script>
