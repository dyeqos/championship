<script setup lang="ts">
import { championshipStore } from '../store/ChampionshipStore';
import { useChampionship } from '../composables/useChampionship';
import ChampionshipFormComponent from './ChampionshipFormComponent.vue';
import { hideLoading, showLoading } from 'src/platform/tools/utils/LoadingUtil';

const store = championshipStore();

const { updateChampionship } = useChampionship();

const updateChampionshipAction = async () => {
  try {
    showLoading();
    await updateChampionship.mutateAsync(store.championship);
    store.clearChampionship();
    store.showUpdateModal = false;
  } finally {
    hideLoading();
  }
};
</script>

<template>
  <dc-modal
    :actions="[
      {
        label: 'Actualizar',
        type: 'submit',
        action: updateChampionshipAction,
      },
    ]"
    :size="'medium'"
    :show="store.showUpdateModal"
    :title="'Actualizar Campeonato'"
    @close="
      () => {
        store.showUpdateModal = false;
        store.clearChampionship();
      }
    "
    @update:show="store.showUpdateModal = $event"
  >
    <ChampionshipFormComponent />
  </dc-modal>
</template>
