<template>
  <div class="flex justify-center bg-surface-900 bg-opacity-70 backdrop-blur-sm">
    <div class="w-full max-w-5xl flex font-medium text-surface-300">
      <div class="p-4 flex-1">
        <RouterLink to="/" class="hover:text-primary-300 duration-100">
          <span>Home</span>
        </RouterLink>
      </div>
      <div class="flex">
        <div v-for="item in items" :key="item.label" class="p-4">
          <RouterLink :to="item.url" class="hover:text-primary-300 duration-100">
            <!-- <Avatar :icon="item.icon" /> -->
            <span> {{ item.label }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const items: {
  label: string
  icon: string
  url: string
}[] = [
  {
    label: 'Airports',
    icon: 'mdi:airplane-takeoff',
    url: '/airports'
  },
  {
    label: 'Airlines',
    icon: 'mdi:airplane',
    url: '/airlines'
  },
  {
    label: 'Flights',
    icon: 'mdi:airplane-landing',
    url: '/flights'
  },
  {
    label: 'API',
    icon: 'mdi:code-braces',
    url: '/api'
  }
]
</script>
