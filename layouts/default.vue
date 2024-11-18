<template>
  <div class="flex flex-col w-screen h-screen overflow-auto">
    <Topbar />
    <div class="flex-1 mt-16">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import Topbar from './Topbar.vue';

useSeoMeta({
  title: `AeroDB`,
  description: 'AeroDB - Your complete and elegant source of aeronautical data',
});
</script>
