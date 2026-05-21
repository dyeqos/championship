<script setup lang="ts">
import type { BadgeInterface } from './BadgeInterface';

const props = defineProps<BadgeInterface>();
</script>
<template>
  <q-badge
    :class="props.outline ? 'q-px-xs q-mr-xs' : 'q-px-md q-py-xs text-weight-bold'"
    rounded
    :label="props.label"
    :color="props.color ?? 'orange'"
    :align="props.align ?? 'top'"
    :outline="props.outline ?? false"
  />
</template>
