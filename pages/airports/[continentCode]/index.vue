<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Airports in {{ continents.name }}</h1>
    <h2 class="text-2xl font-bold mb-6">By country</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <NuxtLink
        v-for="(continent, continentKey) in continents"
        :key="continentKey"
        :to="`airports/${continentKey}`"
        class="block p-4 bg-surface-800 text-white rounded-lg shadow hover:bg-primary transition"
      >
        {{ continent }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const continents: { [key: string]: string } = {
  AF: 'Africa',
  AS: 'Asia',
  EU: 'Europe',
  NA: 'North America',
  OC: 'Oceania',
  SA: 'South America',
};
</script>
