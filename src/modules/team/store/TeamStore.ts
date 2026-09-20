import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { TeamForm } from '../interfaces/TeamFormInterface';

export const teamStore = defineStore('teamStore', () => {
  const team = ref<TeamForm>({
    id: null,
    name: null,
    numberIdentifier: null,
    championshipId: null,
  });

  const teams = ref<TeamForm[]>([]);

  return {
    team,
    teams,
    setTeams(data: TeamForm[]) {
      teams.value = data;
    },
  };
});
