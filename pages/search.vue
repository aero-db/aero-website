<template>
  <div class="px-4">
    <IconField>
      <InputIcon>
        <Icon icon="mdi:search" />
      </InputIcon>
      <InputText class="w-full" v-model="search" placeholder="Search for an airport, airline, notam..." />
    </IconField>
  </div>

  <span>Recent: </span>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { Button, IconField, InputGroup, InputIcon, InputText } from 'primevue';

const search = ref('');

const searchAirports = () => {
  if (search.value) {
    // $router.push({ path: '/airports', query: { search: search.value } });
  }
};
</script>
