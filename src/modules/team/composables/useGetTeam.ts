import { useQuery } from '@tanstack/vue-query';
import { teamService } from '../services/TeamService';

const { getTeams } = teamService;

export const useGetChampionships = (championshipFilter?: any) => {
  return useQuery({
    queryKey: ['championships', championshipFilter],
    queryFn: () => getTeams(championshipFilter),
  });
};
