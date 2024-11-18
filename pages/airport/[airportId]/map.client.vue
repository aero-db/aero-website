<template>
  <NuxtLayout name="airport">
    <div class="h-screen oveflow-hidden">
      <div class="h-screen w-screen">
        <AirportMapClient :airportId="String($route.params.airportId)" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import AirportMapClient from '~/components/AirportMap.client.vue';
</script>
