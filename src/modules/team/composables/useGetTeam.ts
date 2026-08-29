import { useQuery } from '@tanstack/vue-query';
import { teamService } from '../services/TeamService';

const { getTeams } = teamService;

export const useGetChampionships = (championshipFilter?: unknown) => {
  return useQuery({
    queryKey: ['championships', championshipFilter],
    queryFn: () => getTeams(championshipFilter),
  });
};
