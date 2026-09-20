<script setup lang="ts">
import type { ButtonInterface } from './ButtonInterface';

const props = defineProps<ButtonInterface>();

const handleClick = () => {
  if (!props.disabled) {
    props.action?.();
  }
};
</script>

<template>
  <q-btn
    dense
    no-caps
    :type="props.type ?? 'button'"
    :outline="props.outline"
    :text-color="props.color === 'secondary' ? 'primary' : 'white'"
    :label="props.label"
    :icon="props.icon"
    :color="props.color ?? 'primary'"
    :disable="props.disabled"
    @click="handleClick"
  >
    <q-tooltip v-if="props.tooltip" :delay="400">
      {{ props.tooltip }}
    </q-tooltip>
  </q-btn>
</template>
