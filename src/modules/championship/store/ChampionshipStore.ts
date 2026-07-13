import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Championship } from '../interfaces/ChampionshipInterface';
import type { ChampionshipFormInterface } from '../interfaces/ChampionshipFormInterface';

export const championshipStore = defineStore('championshipStore', () => {
  const championship = ref<ChampionshipFormInterface>({
    id: null,
    name: null,
    management: null,
    version: null,
    category: null,
    gender: null,
    dateInit: null,
  });
  const championships = ref<Championship[]>([]);
  const showModal = ref(false);
  const showUpdateModal = ref(false);
  return {
    championship,
    championships,
    showModal,
    showUpdateModal,
    setChampionship(championshipData: Championship) {
      championship.value = {
        ...championshipData,
        name: championshipData.name.id,
        management: championshipData.management,
        category: championshipData.category.id,
      };
    },
    clearChampionship() {
      championship.value = {
        id: null,
        name: null,
        management: null,
        version: null,
        category: null,
        gender: null,
        dateInit: null,
      };
    },
  };
});
