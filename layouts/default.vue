<template>
  <NuxtLoadingIndicator :color="primaryColor" />

  <div class="flex flex-col w-screen h-screen">
    <div class="absolute z-30 top-0 left-0 w-screen h-screen bg-surface-900 flex items-center justify-center" v-if="showSplash">
      <Image src="/icon.svg" width="64" alt="AeroDB icon" />
    </div>

    <Topbar />
    <div class="flex-1 mt-16 overflow-auto" id="body-content">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { palette, usePreset, useTheme } from '@primevue/themes';
import Topbar from './Topbar.vue';

const showSplash = ref(true);
onNuxtReady(async () => {
  showSplash.value = false;
});

useSeoMeta({
  title: `AeroDB - Your complete and elegant source of aeronautical data`,
  description: 'AeroDB - Your complete and elegant source of aeronautical data',
});

import { AeroThemePreset } from '~/theme/theme';

const primaryColor = AeroThemePreset.semantic.primary['500'];
</script>
