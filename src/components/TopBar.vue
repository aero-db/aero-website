<template>
  <div
    class="flex justify-center bg-surface-900 bg-opacity-70 backdrop-blur-sm border-b-2 border-surface-800"
  >
    <!-- desktop-->

    <div class="w-full max-w-5xl font-medium text-surface-300 hidden md:flex">
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
    <!-- Mobile -->
    <div
      class="flex md:hidden w-full max-w-5xl font-medium text-surface-300 items-center justify-center"
    >
      <div class="absolute left-0">
        <Icon @click="showDrawer = true" class="text-2xl m-3" :icon="'mdi:menu'" />
      </div>
      <div class="flex-1 flex justify-center">
        <RouterLink to="/" class="p-4 hover:text-primary-300 duration-100 flex items-center">
          <Image class="mr-2" src="/icon.svg" :width="24" />
          <span class="text-primary text-xl font-bold">AeroDB</span>
        </RouterLink>
      </div>
    </div>

    <Drawer v-model:visible="showDrawer">
      <template #header>
        <div class="flex align-middle">
          <Image class="mr-2" src="/icon.svg" :width="24" />
          <span class="text-primary text-xl font-bold">AeroDB</span>
        </div>
      </template>

      <div class="flex flex-col">
        <div class="pb-2 flex">
          <SearchBar @on-item-click="showDrawer = false" />
        </div>

        <div v-for="item in items" :key="item.label" class="p-2">
          <RouterLink
            @click="showDrawer = false"
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
    </Drawer>
  </div>
</template>
<script lang="ts" setup>
import Image from 'primevue/image'
import SearchBar from './SearchBar.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { Drawer } from 'primevue'
import { ref } from 'vue'

const showDrawer = ref(false)

const items: {
  label: string
  icon: string
  url: string
  external?: boolean
}[] = [
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
