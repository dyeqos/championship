<script setup lang="ts">
import { championshipStore } from '../store/ChampionshipStore';
import { useChampionship } from '../composables/useChampionship';
import ChampionshipFormComponent from './ChampionshipFormComponent.vue';
import { hideLoading, showLoading } from 'src/platform/tools/utils/LoadingUtil';

const store = championshipStore();

const { createChampionship } = useChampionship();

const createChampionshipAction = async () => {
  try {
    showLoading();
    await createChampionship.mutateAsync(store.championship);
    store.clearChampionship();
    store.showModal = false;
  } finally {
    hideLoading();
  }
};
</script>

<template>
  <dc-modal
    :actions="[
      {
        label: 'Crear',
        type: 'submit',
        action: createChampionshipAction,
      },
    ]"
    :size="'medium'"
    :show="store.showModal"
    :title="'Crear Campeonato'"
    @close="
      () => {
        store.showModal = false;
        store.clearChampionship();
      }
    "
    @update:show="store.showModal = $event"
  >
    <ChampionshipFormComponent />
  </dc-modal>
</template>
