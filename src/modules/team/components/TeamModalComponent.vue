<script setup lang="ts">
import { computed } from 'vue';
import { teamStore } from '../store/TeamStore.js';
import { useTeam } from '../composables/useTeam.js';
import TeamFormComponent from './TeamFormComponent.vue';
import { hideLoading, showLoading } from 'src/platform/tools/utils/LoadingUtil.js';

const props = defineProps<{ show: boolean }>();
const showModal = computed({
  get: () => props.show,
  set: (value: boolean) => {
    emit('update:show', value);
  },
});
const store = teamStore();
const { createTeam } = useTeam();
const emit = defineEmits<{
  'update:show': [value: boolean];
}>();

const create = async () => {
  try {
    showLoading();
    console.log(store.team);
    await createTeam.mutateAsync(store.team);
    store.clearTeam();
    emit('update:show', false);
  } finally {
    hideLoading();
  }
};
</script>
<template>
  <dc-modal
    :show="showModal"
    :title="'Crear Equipo'"
    :size="'small'"
    :actions="[
      {
        label: 'Cancelar',
        color: 'secondary',
        action: () => {
          emit('update:show', false);
          store.clearTeam();
        },
      },
      {
        label: 'Guardar',
        type: 'submit',
        action: create,
      },
    ]"
    @update:show="emit('update:show', $event)"
  >
    <TeamFormComponent />
  </dc-modal>
</template>
