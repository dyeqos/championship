import { api } from 'src/boot/axios';
import type { TeamForm } from '../interfaces/TeamFormInterface';
import type { TeamInterface } from '../interfaces/TeamInterface';

export const teamService = {
  async createTeam(payload: TeamForm): Promise<TeamInterface> {
    const { data } = await api.post('/team', payload);
    return data;
  },
  async getTeams(params?: unknown): Promise<TeamInterface[]> {
    const { data } = await api.get('/team', {
      params,
    });
    return data;
  },
};
