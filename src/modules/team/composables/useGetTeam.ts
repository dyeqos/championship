import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
import { teamStore } from '../store/TeamStore';
import { teamService } from '../services/TeamService';
import { hideLoading, showLoading } from 'src/platform/tools/utils/LoadingUtil';
import type { TeamFilter } from '../interfaces/TeamFilterInterface';

export const useGetTeams = () => {
  const route = useRoute();
  const store = teamStore();
  const { getTeams } = teamService;

  const teamFilter = computed<TeamFilter>(() => ({
    championshipId: route.query.championshipId as string | null,
    state: route.query.state ? Number(route.query.state) : null,
    management: route.query.management ? Number(route.query.management) : null,
  }));
  const getTeamsFn = async (filter: TeamFilter) => {
    try {
      showLoading();
      const response = await getTeams(filter);
      store.setTeams(response);
      return response;
    } finally {
      hideLoading();
    }
  };

  return useQuery({
    queryKey: computed(() => ['teams', teamFilter.value]),
    queryFn: () => getTeamsFn(teamFilter.value),
    enabled: false,
    retry: false,
  });
};
