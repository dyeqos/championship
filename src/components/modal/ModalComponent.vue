<script setup lang="ts">
import { computed, ref } from 'vue';
import { getButtonProps } from 'src/platform/tools/utils/ButtonUtil';
import type { ModalInterface } from './ModalInterface';

const props = defineProps<ModalInterface>();
const form = ref();
const emit = defineEmits<{
  'update:show': [value: boolean];
}>();

const showModal = computed({
  get: () => props.show,
  set: (value: boolean) => {
    emit('update:show', value);
  },
});

const getSizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'width: 300px';
    case 'medium':
      return 'width: 700px; max-width: 80vw';
    case 'full':
      return undefined;
    default:
      return 'width: 700px; max-width: 80vw';
  }
});
const actionButtons = async (e: Event, action?: () => void, type?: 'submit' | 'button') => {
  e.preventDefault();
  if (type === 'submit' && !(await form.value.validate())) {
    return;
  }
  action?.();
};
</script>
<template>
  <q-dialog
    v-model="showModal"
    @hide="showModal = false"
    :full-width="props.size === 'full'"
    persistent
  >
    <q-card flat :style="getSizeClass">
      <q-form ref="form" @submit.prevent>
        <q-card-section class="row items-center justify-between q-px-md q-py-sm">
          <div class="column">
            <div class="text-h6 text-weight-bold">{{ props.title }}</div>
            <div v-if="props.caption" class="text-caption q-mt-xs">
              {{ props.caption }}
            </div>
          </div>
          <q-btn icon="mdi-close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pa-md">
          <slot />
        </q-card-section>

        <q-card-actions v-if="props.actions?.length" class="row justify-end q-px-md">
          <dc-button
            v-for="(button, index) in props.actions"
            class="q-mb-xs"
            :key="index"
            v-bind="
              getButtonProps({
                ...button,
                action: () => {
                  /*No action */
                },
              })
            "
            @click="(e: Event) => actionButtons(e, button.action, button.type)"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>
