import { useQuery } from '@tanstack/vue-query';
import { championshipService } from '../services/ChampionshipService';
import type { ChampionshipFilter } from '../interfaces/ChampionshipFilterInterface';

const { getChampionships } = championshipService;

export const useGetChampionships = (championshipFilter?: ChampionshipFilter) => {
  return useQuery({
    queryKey: ['championships', championshipFilter ?? {}],
    queryFn: () => getChampionships(championshipFilter),
  });
};
