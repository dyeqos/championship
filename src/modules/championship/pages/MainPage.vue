<script setup lang="ts">
import { championshipStore } from '../store/ChampionshipStore';
import { useGetChampionships } from '../composables/useGetChampionships';
import UpdateModalComponent from '../components/UpdateModalComponent.vue';
import CreateModalComponent from '../components/CreateModalComponent.vue';
import Championships from '../components/ChampionshipsComponent.vue';

const store = championshipStore();
const { data: championships } = useGetChampionships();
</script>
<template>
  <dc-panel
    :title="'Campeonatos'"
    :caption="'Configuraciones'"
    :actionButton="{
      label: 'Crear Campeonato',
      icon: 'mdi-soccer-field',
      color: 'primary',
      action: () => {
        store.showModal = true;
      },
    }"
  >
    <Championships :championships="championships ?? []" />
  </dc-panel>

  <CreateModalComponent />
  <UpdateModalComponent />
</template>
