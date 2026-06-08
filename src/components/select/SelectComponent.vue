<script setup lang="ts">
import { computed } from 'vue';
import type { SelectInterface } from './SelectInterface';

const props = defineProps<SelectInterface>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number | Array<string | number> | null): void;
}>();

const mappedOptions = computed(
  () =>
    props.options?.map((option) => ({
      value: option.value,
      label: props.showValue ? `${option.description} (${option.value})` : option.description,
    })) ?? [],
);

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value as string | number | Array<string | number> | null);
  },
});
</script>

<template>
  <q-select
    v-model="internalValue"
    class="q-pa-xs"
    dense
    emit-value
    filled
    map-options
    option-label="label"
    option-value="value"
    options-dense
    :clearable="clearable"
    :label="label"
    :multiple="multiple"
    :options="mappedOptions"
    :outlined="outlined"
    :placeholder="placeholder"
    :use-chips="multiple"
    :use-input="filterable"
  />
</template>
