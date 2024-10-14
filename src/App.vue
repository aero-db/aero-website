<script setup lang="ts">
import TopBar from './components/TopBar.vue'
</script>

<template>
  <div class="bg-surface-900 h-screen w-screen overflow-auto">
    <div class="fixed top-0 w-full">
      <TopBar />
    </div>
    <div class="pt-16 m-auto flex justify-center w-full max-w-6xl">
      <RouterView />
    </div>
  </div>
</template>
