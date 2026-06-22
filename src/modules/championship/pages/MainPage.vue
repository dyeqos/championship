<script setup lang="ts">
import { ref } from 'vue';
import { championshipStore } from '../store/ChampionshipStore';
import { useChampionship } from '../composables/useChampionship';
import { useGetChampionships } from '../composables/useGetChampionships';
import Championships from '../components/ChampionshipsComponent.vue';
import ChampionshipForm from '../components/ChampionshipFormComponent.vue';
import { hideLoading, showLoading } from 'src/platform/tools/utils/LoadingUtil';

const showModal = ref(false);
const store = championshipStore();
const { createChampionship } = useChampionship();
const { data: championships } = useGetChampionships();

const createChampionshipAction = async () => {
  try {
    showLoading();
    await createChampionship.mutateAsync(store.championship);
  } finally {
    hideLoading();
  }
};
</script>
<template>
  <dc-panel
    :title="'Campeonatos'"
    :caption="'Configuraciones'"
    :actionButton="{
      label: 'Crear Campeonato',
      color: 'primary',
      action: () => {
        showModal = true;
      },
    }"
  >
    <Championships :championships="championships ?? []" />
  </dc-panel>

  <dc-modal
    :actions="[
      {
        label: 'Guardar',
        type: 'submit',
        action: createChampionshipAction,
      },
    ]"
    :size="'medium'"
    :show="showModal"
    :title="'Crear Campeonato'"
    @close="() => (showModal = false)"
    @update:show="showModal = $event"
  >
    <ChampionshipForm />
  </dc-modal>
</template>
