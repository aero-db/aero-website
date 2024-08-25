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
import Badge from 'primevue/badge'
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'
import type { MenuItem } from 'primevue/menuitem'
import { ref } from 'vue'

const items: MenuItem[] = [
  {
    label: 'File',
    icon: 'pi pi-fw pi-file',
    items: [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-folder-open' },
      { label: 'Quit', icon: 'pi pi-fw pi-times' }
    ]
  },
  {
    label: 'Edit',
    icon: 'pi pi-fw pi-pencil',
    items: [
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' },
      { label: 'Redo', icon: 'pi pi-fw pi-replay' }
    ]
  },
  {
    label: 'Help',
    icon: 'pi pi-fw pi-question',
    items: [
      { label: 'Contents', icon: 'pi pi-fw pi-book' },
      { label: 'Search', icon: 'pi pi-fw pi-search' }
    ]
  },
  {
    label: 'Actions',
    icon: 'pi pi-fw pi-cog',
    items: [
      { label: 'Save', icon: 'pi pi-fw pi-save' },
      { label: 'Update', icon: 'pi pi-fw pi-save' }
    ]
  }
]
</script>
