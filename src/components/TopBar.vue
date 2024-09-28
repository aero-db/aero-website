<template>
  <Menubar :model="items">
    <template #start> icon </template>

    <template #end>
      <div class="flex items-center gap-2">
        <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
        <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
      </div>
    </template>
  </Menubar>
</template>
<script lang="ts" setup>
import Avatar from 'primevue/avatar'
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'
import type { MenuItem } from 'primevue/menuitem'

const items: MenuItem[] = [
  {
    label: 'Airports',
    icon: 'mdi:airplane-takeoff'
  }
]
</script>
