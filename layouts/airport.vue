<template>
  <div class="flex flex-col h-full">
    <div class="flex-1 overflow-auto">
      <slot />
    </div>
    <!-- <AirportFooterBar /> -->
  </div>
</template>

<script setup lang="ts">
import AirportFooterBar from '~/components/AirportFooterBar.vue';
</script>
