import { api } from 'src/boot/axios';
import type { TeamForm } from '../interfaces/TeamFormInterface';
import type { TeamInterface } from '../interfaces/TeamInterface';
import type { TeamFilter } from '../interfaces/TeamFilterInterface';

export const teamService = {
  async createTeam(payload: TeamForm): Promise<TeamInterface> {
    console.log(payload);
    const { data } = await api.post('/team', payload);
    return data;
  },
  async getTeams(query: TeamFilter): Promise<TeamInterface[]> {
    const { data } = await api.get('/team', {
      params: query,
    });
    return data;
  },
};
