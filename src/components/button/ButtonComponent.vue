<script setup lang="ts">
import type { ButtonInterface } from './ButtonInterface';

const props = defineProps<ButtonInterface>();

const handleClick = () => {
  if (!props.disable) {
    props.action?.();
  }
};
</script>

<template>
  <q-btn
    dense
    no-caps
    :outline="props.outline"
    :text-color="props.color === 'secondary' ? 'primary' : 'white'"
    :label="props.label"
    :icon="props.icon"
    :color="props.color ?? 'primary'"
    :disable="props.disable"
    @click="handleClick"
  />
</template>
