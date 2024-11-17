<template>
  <div class="fixed top-0 left-0 w-full flex justify-center bg-surface-900 bg-opacity-70 backdrop-blur-sm border-surface-800">
    <!-- Mobile -->
    <div class="flex md:hidden w-full max-w-5xl font-medium text-surface-300 items-center justify-center">
      <div class="flex-1 flex justify-center">
        <NuxtLink to="/" class="p-4 hover:text-primary-300 duration-100 flex items-center">
          <Image class="mr-2" src="/icon.svg" :width="24" />
          <span class="text-primary text-xl font-bold">AeroDB</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Image from 'primevue/image';
import { Icon } from '@iconify/vue/dist/iconify.js';
import { Drawer } from 'primevue';
import { ref } from 'vue';

const showDrawer = ref(false);

const items: {
  label: string;
  icon: string;
  url: string;
  external?: boolean;
}[] = [
  // {
  //   label: 'Airlines',
  //   icon: 'mdi:airplane',
  //   url: '/airlines'
  // },
  // {
  //   label: 'Flights',
  //   icon: 'mdi:airplane-landing',
  //   url: '/flights'
  // },
  {
    label: 'API Doc',
    icon: 'mdi:code-braces',
    external: true,
    url: 'https://api.aerodb.net/doc.html',
  },
];
</script>
