import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { TeamForm } from '../interfaces/TeamFormInterface';

export const teamStore = defineStore('teamStore', () => {
  const team = ref<TeamForm>({
    id: null,
    name: null,
    teamUser: null,
    championship: null,
  });

  return {
    team,
  };
});
