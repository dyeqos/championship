import { api } from 'boot/axios';
import type { Param } from '../interfaces/ParamInterface';

export const paramService = {
  async getParamsByDomain(domain: string): Promise<Param[]> {
    const { data } = await api.get<Param[]>(`/parameters?domain=${domain}`);
    return data;
  },
};
