<template>
  <div class="flex justify-center bg-surface-900 bg-opacity-70 backdrop-blur-sm">
    <div class="w-full max-w-5xl flex font-medium text-surface-300">
      <div class="flex-1 flex align-middle">
        <RouterLink to="/" class="p-4 hover:text-primary-300 duration-100 flex">
          <Image class="mr-2" src="/icon.svg" :width="24" />
          <span class="text-primary font-bold">AeroDB</span>
        </RouterLink>

        <div class="p-3">
          <SearchBar />
        </div>
      </div>
      <div class="flex">
        <div v-for="item in items" :key="item.label" class="p-4">
          <RouterLink
            :to="item.url"
            class="hover:text-primary-300 duration-100"
            v-if="!item.external"
          >
            <!-- <Avatar :icon="item.icon" /> -->
            <span> {{ item.label }}</span>
          </RouterLink>
          <a
            :href="item.url"
            target="_blank"
            class="hover:text-primary-300 duration-100 flex items-center"
            v-else
          >
            <!-- <Avatar :icon="item.icon" /> -->
            <span> {{ item.label }}</span>
            <Icon class="ml-1" :icon="'mingcute:external-link-line'" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Image from 'primevue/image'
import SearchBar from './SearchBar.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'

const items: {
  label: string
  icon: string
  url: string
  external?: boolean
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
    external: true,
    url: 'https://api.aerodb.net/doc.html'
  }
]
</script>
