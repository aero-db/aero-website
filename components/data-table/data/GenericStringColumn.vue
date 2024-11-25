<template>
  <Column v-bind="props">
    <template #body="{ data }: { data: any }">
      <span>
        {{ data[props.field as string] ?? '' }}
      </span>
    </template>
    <!-- <template #filter="{ filterModel, filterCallback }">
      <Form @submit.prevent="filterCallback">
        <IconField>
          <InputIcon>
            <Icon icon="raphael:search" />
          </InputIcon>
          <InputText
            v-model="filterModel.value"
            type="search"
            :placeholder="props.placeholder || 'Search...'"
            @input="handleChange($event, filterCallback)"
          />
        </IconField>
        <div class="mt-2 flex justify-end">
          <Button type="submit" size="small"> 'apply' </Button>
        </div>
      </Form>
    </template> -->
  </Column>
</template>

<script setup lang="ts">
import type { ColumnProps } from 'primevue/column';
import Column from 'primevue/column';

const props = defineProps<
  ColumnProps & {
    placeholder?: string;
  }
>();

// const handleChange = (event: Event, filterCallback: () => void) => {
//   const target = event.target as HTMLInputElement;
//   if (target.value === '') {
//     // Trigger filter callback when input is empty
//     filterCallback();
//   }
// };
</script>
