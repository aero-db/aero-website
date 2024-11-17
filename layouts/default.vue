<script setup lang="ts">
import Topbar from './Topbar.vue';
import FooterBar from './FooterBar.vue';
</script>

<template>
  <div class="flex flex-col w-screen h-screen overflow-auto">
    <Topbar />
    <div class="flex-1 mt-16">
      <slot />
    </div>
    <FooterBar />
  </div>
</template>
