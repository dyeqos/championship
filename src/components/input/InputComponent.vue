<script setup lang="ts">
import { computed, ref, watch, toRefs } from 'vue';
import type { InputInterface, InputModelValue } from './InputInterface';

const props = defineProps<InputInterface>();

const { label, placeholder, disabled, isCurrency } = toRefs(
  props as InputInterface & Record<string, unknown>,
);

const isNumericValue = computed(() => typeof props.modelValue === 'number');

const emit = defineEmits<{
  (e: 'update:modelValue', value: InputModelValue): void;
}>();

const isEditing = ref(false);
const localValue = ref<string>(props.modelValue == null ? '' : String(props.modelValue));

const formatCurrency = (v?: InputModelValue) => {
  if (!isCurrency?.value) return v == null ? '' : String(v);
  const n = Number(v);
  if (Number.isNaN(n)) return '';
  return new Intl.NumberFormat(undefined, { style: 'currency' }).format(n);
};

watch(
  () => props.modelValue,
  (v) => {
    if (isEditing.value) {
      localValue.value = v == null ? '' : String(v);
    } else {
      localValue.value = formatCurrency(v);
    }
  },
);

function toNumberFromString(str: string) {
  const cleaned = str.replace(/[^0-9.,-]/g, '');
  const lastComma = cleaned.lastIndexOf(',');
  const lastDot = cleaned.lastIndexOf('.');
  let normalized = cleaned;

  if (lastComma !== -1 && lastDot !== -1) {
    if (lastComma > lastDot) {
      const before = cleaned.slice(0, lastDot).replace(/[.,]/g, '');
      normalized = `${before}.${cleaned.slice(lastComma + 1)}`;
    } else {
      const before = cleaned.slice(0, lastComma).replace(/[.,]/g, '');
      normalized = `${before}.${cleaned.slice(lastDot + 1)}`;
    }
  } else if (lastComma !== -1) {
    const before = cleaned.slice(0, lastComma).replaceAll(',', '');
    normalized = `${before}.${cleaned.slice(lastComma + 1)}`;
  } else if (lastDot !== -1) {
    const before = cleaned.slice(0, lastDot).replaceAll('.', '');
    normalized = `${before}.${cleaned.slice(lastDot + 1)}`;
  }

  const n = Number(normalized);
  return Number.isNaN(n) ? null : n;
}

function onInput(val: InputModelValue) {
  const str = val == null ? '' : String(val);
  localValue.value = str;

  if (isCurrency?.value) {
    const n = toNumberFromString(str);
    emit('update:modelValue', n);
    return;
  }

  if (isNumericValue.value) {
    const n = Number(str.replace(',', '.'));
    emit('update:modelValue', Number.isNaN(n) ? null : n);
  } else {
    emit('update:modelValue', val);
  }
}

function onFocus() {
  isEditing.value = true;
  localValue.value = props.modelValue == null ? '' : String(props.modelValue);
}

function onBlur() {
  isEditing.value = false;
  if (isCurrency?.value) {
    const n = toNumberFromString(localValue.value);
    emit('update:modelValue', n);
    localValue.value = formatCurrency(n);
  } else {
    localValue.value = props.modelValue == null ? '' : String(props.modelValue);
  }
}
</script>

<template>
  <q-input
    :model-value="localValue"
    class="q-pa-xs"
    :input-class="isCurrency ? 'text-right' : ''"
    dense
    filled
    :label="label"
    :placeholder="placeholder"
    :disable="disabled"
    @update:model-value="onInput($event)"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>
