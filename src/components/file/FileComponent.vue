<script lang="ts" setup>
import { computed } from 'vue';
import type { FileInterface, FileModelValue } from './FileInterface';

const props = defineProps<FileInterface>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: FileModelValue): void;
}>();

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value as FileModelValue);
  },
});
</script>
<template>
  <q-file
    v-model="internalValue"
    class="q-pa-xs q-mb-sm"
    dense
    filled
    use-chips
    :multiple="multiple"
    :label="label"
  >
    <template v-slot:append>
      <q-icon :name="icon ?? 'mdi-attachment'" />
    </template>
  </q-file>
</template>
