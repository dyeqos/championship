import { api } from 'src/boot/axios';
import type { TeamForm } from '../interfaces/TeamFormInterface';
import type { TeamInterface, TeamResponse } from '../interfaces/TeamInterface';
import type { TeamFilter } from '../interfaces/TeamFilterInterface';

export const teamService = {
  async createTeam(payload: TeamForm): Promise<TeamInterface> {
    const { data } = await api.post('/team', payload);
    return data;
  },
  async getTeams(query: TeamFilter): Promise<TeamResponse[]> {
    const { data } = await api.get('/team', {
      params: query,
    });
    return data;
  },
};
