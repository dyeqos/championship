import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { TeamForm } from '../interfaces/TeamFormInterface';

export const teamStore = defineStore('teamStore', () => {
  const team = ref<TeamForm>({
    id: null,
    name: null,
    personId: null,
    championshipId: null,
    personName: null,
  });

  const teams = ref<TeamForm[]>([]);

  return {
    team,
    teams,
    setTeams(data: TeamForm[]) {
      teams.value = data;
    },
    clearTeam() {
      team.value = {
        id: null,
        name: null,
        personId: null,
        championshipId: null,
        personName: null,
      };
    },
  };
});
