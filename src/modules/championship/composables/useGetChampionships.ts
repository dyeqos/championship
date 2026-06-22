import { useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
import { championshipService } from '../services/ChampionshipService';

const { getChampionships } = championshipService;

export const useGetChampionships = () => {
  const { params } = useRoute();
  return useQuery({
    queryKey: ['championships', params],
    queryFn: () => getChampionships(params),
  });
};
