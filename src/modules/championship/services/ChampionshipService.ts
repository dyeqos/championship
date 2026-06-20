import { api } from 'src/boot/axios';
import type { ChampionshipFormInterface } from '../interfaces/ChampionshipFormInterface';
import type { ChampionshipInterface } from '../interfaces/ChampionshipInterface';

export const championshipService = {
  async createChampionship(payload: ChampionshipFormInterface): Promise<ChampionshipInterface> {
    const { data } = await api.post<ChampionshipInterface>('/championship', payload);
    return data;
  },
};
