<template>
  <div class="bg-surface-900 h-screen w-screen overflow-auto">
    <div class="fixed top-0 w-full z-30" v-if="!hideTopbar">
      <TopBar />
    </div>
    <div class="pt-16 m-auto w-full max-w-5xl">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import TopBar from './components/TopBar.vue'
import { ref, watch } from 'vue'

const route = useRoute()

const hideTopbar = ref(route.meta.hideTopBar)

watch(
  () => route.meta.hideTopBar,
  (value) => {
    console.log('hideTopBar', value)
    hideTopbar.value = value
  }
)
</script>
