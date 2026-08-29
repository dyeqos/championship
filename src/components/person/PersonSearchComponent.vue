<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import PersonForm from 'src/modules/person/components/PersonFormComponent.vue';
import { requiredRule } from 'src/platform/tools/utils/RulesUtil';
import type { PersonSearch } from './PersonSearchInterface';

const props = defineProps<PersonSearch>();
const showModal = ref(false);

const localValue = ref<number | null>(props.modelValue == null ? null : Number(props.modelValue));

const rules = computed(() => {
  const result = [];

  if (props.required) {
    result.push(requiredRule);
  }

  return result;
});
const ciInput = ref();
const openPersonModal = () => {
  showModal.value = true;
  ciInput.value?.focus();
};
const onShowDialog = async () => {
  await nextTick();
  console.log(ciInput.value);
  ciInput.value?.focus();
};
</script>
<template>
  <q-input
    v-model.number="localValue"
    class="q-pa-xs q-mb-sm"
    clearable
    dense
    filled
    :disabled="props.disabled"
    :label="props.label"
    :rules="rules"
    @focus="openPersonModal"
  />
  <dc-modal
    :show="showModal"
    title="Usuario"
    size="medium"
    :actions="[
      {
        action: () => (showModal = false),
        label: 'Cerrar',
      },
    ]"
    @show="onShowDialog"
  >
    <PersonForm />
  </dc-modal>
</template>
