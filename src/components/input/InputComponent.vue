<script setup lang="ts">
import { computed, ref, watch, toRefs } from 'vue';
import { QInput } from 'quasar';
import { maxLengthRule, minLengthRule, requiredRule } from 'src/platform/tools/utils/RulesUtil';
import type { InputInterface, InputModelValue } from './InputInterface';

const props = defineProps<InputInterface>();

const { label, placeholder, disabled } = toRefs(props as InputInterface & Record<string, unknown>);

const isNumericValue = computed(() => typeof props.modelValue === 'number');

const emit = defineEmits<{
  (e: 'update:modelValue', value: InputModelValue): void;
}>();

const isEditing = ref(false);
const inputRef = ref<QInput>();
const localValue = ref<string>(props.modelValue == null ? '' : String(props.modelValue));

watch(
  () => props.modelValue,
  (v) => {
    localValue.value = v == null ? '' : String(v);
  },
);

function onInput(val: InputModelValue) {
  const str = val == null ? '' : String(val);
  localValue.value = str;

  if (isNumericValue.value) {
    const n = Number(str.replace(',', '.'));
    emit('update:modelValue', Number.isNaN(n) ? null : n);
    return;
  }

  emit('update:modelValue', str);
}

function onFocus() {
  isEditing.value = true;
  localValue.value = props.modelValue == null ? '' : String(props.modelValue);
}

function onBlur() {
  isEditing.value = false;
  localValue.value = props.modelValue == null ? '' : String(props.modelValue);
}

const rules = computed(() => {
  const result = [];

  if (props.required) {
    result.push(requiredRule);
  }
  if (props.maxLength) {
    result.push(maxLengthRule(props.maxLength));
  }
  if (props.minLength) {
    result.push(minLengthRule(props.minLength));
  }

  return result;
});

const focus = () => inputRef.value?.focus();
const blur = () => inputRef.value?.blur();

defineExpose({
  focus,
  blur,
});
</script>

<template>
  <q-input
    class="q-pa-xs q-mb-sm"
    dense
    filled
    ref="inputRef"
    :model-value="localValue"
    :label="label"
    :placeholder="placeholder"
    :disable="disabled"
    :rules="rules"
    @update:model-value="onInput($event)"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>
