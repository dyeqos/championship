import { api } from 'src/boot/axios';
import type { ChampionshipFormInterface } from '../interfaces/ChampionshipFormInterface';
import type { Championship } from '../interfaces/ChampionshipInterface';
import type { ChampionshipFilter } from '../interfaces/ChampionshipFilterInterface';

export const championshipService = {
  async createChampionship(payload: ChampionshipFormInterface): Promise<Championship> {
    const { data } = await api.post('/championship', payload);
    return data;
  },
  async getChampionships(params?: ChampionshipFilter): Promise<Championship[]> {
    const { data } = await api.get('/championship', {
      params,
    });
    return data;
  },
  async updateChampionship(payload: ChampionshipFormInterface): Promise<Championship> {
    const { id, ...rest } = payload;
    if (!id) {
      throw new Error('Championship ID is required for update.');
    }
    const { data } = await api.patch(`/championship/${id}`, rest);
    return data;
  },
};
