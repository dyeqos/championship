<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import { personStore } from 'src/modules/person/store/PersonStore';
import PersonForm from 'src/modules/person/components/PersonFormComponent.vue';
import { requiredRule } from 'src/platform/tools/utils/RulesUtil';
import type { PersonSearch } from './PersonSearchInterface';

const storePerson = personStore();
const props = defineProps<PersonSearch>();
const showModal = ref(false);

const localValue = ref<number | null>(props.modelValue == null ? null : Number(props.modelValue));
const input = ref<HTMLInputElement | null>(null);

const rules = computed(() => {
  const result = [];

  if (props.required) {
    result.push(requiredRule);
  }

  return result;
});
const openPersonModal = () => {
  storePerson.clearPerson();
  storePerson.setDisableFormSearch(false);
  showModal.value = true;
  input.value?.blur();
};
const onShowDialog = async () => {
  await nextTick();
};
</script>
<template>
  <q-input
    v-model.number="localValue"
    ref="input"
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
        action: () => {
          showModal = false;
          storePerson.clearPerson();
        },
        label: 'Cerrar',
      },
    ]"
    @show="onShowDialog"
  >
    <PersonForm />
  </dc-modal>
</template>
