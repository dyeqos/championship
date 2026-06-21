import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { ChampionshipInterface } from '../interfaces/ChampionshipInterface';
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
  const championships = ref<ChampionshipInterface[]>([]);

  return {
    championship,
    championships,
  };
});
