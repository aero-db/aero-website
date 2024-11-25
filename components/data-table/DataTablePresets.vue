<template>
  <div class="no-scrollbar ml-4 flex flex-1 select-none gap-2 overflow-x-scroll">
    <Chip
      v-for="(preset, presetIndex) in props.presets"
      :key="presetIndex"
      :class="{
        '!hidden': props.activePresetIndex !== null && props.activePresetIndex !== presetIndex,
        '!bg-primary-400 font-semibold !text-surface-0': props.activePresetIndex === presetIndex,
      }"
      :label="preset.label"
      :removable="props.activePresetIndex === presetIndex"
      @click="togglePreset(presetIndex)"
    >
      <template #removeicon>
        <Icon class="size-4" icon="mdi:close-circle-outline" />
      </template>
    </Chip>
  </div>
</template>

<script setup lang="ts" generic="T extends APIResource">
import type { APIResource } from '@aerodb/js';
import { Icon } from '@iconify/vue/dist/iconify.js';
import Chip from 'primevue/chip';
import type { TablePreset } from '~/types/TablePreset.types';

const props = defineProps<{
  /**
   * Available presets
   */
  presets: TablePreset<T>[];

  /**
   * Currently used parameters
   */
  activePresetIndex: number | null;
}>();

const emit = defineEmits<{
  /**
   * Emit when the active preset is updated
   */
  (e: 'update', activePresetIndex: number | null): void;
}>();

/**
 * Toggle the preset and emit the update event
 * @param presetIndex Index of the preset to toggle
 */
function togglePreset(presetIndex: number) {
  if (props.activePresetIndex === presetIndex) {
    emit('update', null);
    return;
  }

  emit('update', presetIndex);
}
</script>
