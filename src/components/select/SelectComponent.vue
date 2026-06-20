<script setup lang="ts">
import { computed } from 'vue';
import type { SelectInterface } from './SelectInterface';
import { requiredRule } from 'src/platform/tools/utils/RulesUtil';

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

const rules = computed(() => {
  const result = [];

  if (props.required) {
    result.push(requiredRule);
  }

  return result;
});
</script>

<template>
  <q-select
    v-model="internalValue"
    class="q-pa-xs q-mb-sm"
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
    :rules="rules"
    :use-chips="multiple"
    :use-input="filterable"
  />
</template>
