<script setup lang="ts">
import type { PanelInterface } from './PanelInterface';
import type { ButtonInterface } from '../button/ButtonInterface';

const props = defineProps<PanelInterface>();

const handleActionButtonClick = () => {
  props.actionButton?.action?.();
};

const getButtonProps = (button: ButtonInterface): ButtonInterface => {
  return {
    ...(button.label !== undefined && { label: button.label }),
    ...(button.icon !== undefined && { icon: button.icon }),
    ...(button.color !== undefined && { color: button.color }),
    ...(button.disable !== undefined && { disable: button.disable }),
    ...(button.outline !== undefined && { outline: button.outline }),
    action: () => {
      button.action?.();
    },
  };
};
</script>

<template>
  <q-card flat>
    <q-card-section class="row items-center justify-between q-px-md q-py-sm">
      <div class="column">
        <div class="text-h6 text-weight-bold">{{ props.title }}</div>
        <div v-if="props.caption" class="text-caption q-mt-xs">
          {{ props.caption }}
        </div>
      </div>
      <dc-button
        v-if="props.actionButton"
        color="primary"
        :label="props.actionButton.label ?? 'Acción'"
        :action="handleActionButtonClick"
        :outline="false"
        class="q-ml-md"
      />
    </q-card-section>

    <q-card-section class="q-pa-md">
      <slot />
    </q-card-section>

    <q-card-actions v-if="props.actions?.length" class="row justify-end q-px-md">
      <dc-button
        v-for="(button, index) in props.actions"
        class="q-mb-xs"
        :key="index"
        v-bind="getButtonProps(button)"
      />
    </q-card-actions>
  </q-card>
</template>
