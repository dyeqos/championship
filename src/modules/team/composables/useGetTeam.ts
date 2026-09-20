import { useQuery } from '@tanstack/vue-query';
import { teamStore } from '../store/TeamStore';
import { teamService } from '../services/TeamService';
import { hideLoading, showLoading } from 'src/platform/tools/utils/LoadingUtil';
import type { TeamFilter } from '../interfaces/TeamFilterInterface';

export const useGetTeams = (teamFilter: TeamFilter) => {
  const store = teamStore();
  const { getTeams } = teamService;

  const getTeamsFn = async (filter: TeamFilter) => {
    console.log(filter);
    try {
      showLoading();
      const response = await getTeams(filter);
      console.log(response);
      store.setTeams(response);
      hideLoading();
      return response;
    } finally {
      hideLoading();
    }
  };

  return useQuery({
    queryKey: ['teams', teamFilter],
    queryFn: () => getTeamsFn(teamFilter),
    enabled: false,
  });
};
