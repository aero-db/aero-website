<template>
  {{ JSON.stringify(airports) }}
</template>

<script setup lang="ts">
import { aero } from '~/aero';

const { data: airports, error } = await useAsyncData(`airports`, () => aero.airport.list());
</script>
