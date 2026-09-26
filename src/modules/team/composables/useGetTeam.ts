import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useQueryClient } from '@tanstack/vue-query';
import { teamStore } from '../store/TeamStore';
import { teamService } from '../services/TeamService';
import { hideLoading, showLoading } from 'src/platform/tools/utils/LoadingUtil';
import type { TeamFilter } from '../interfaces/TeamFilterInterface';

const getTeamsQueryKey = (filter: TeamFilter) => ['teams', filter] as const;

export const useGetTeams = () => {
  const route = useRoute();
  const store = teamStore();
  const queryClient = useQueryClient();
  const { getTeams } = teamService;

  const teamFilter = computed<TeamFilter>(() => ({
    championshipId: route.query.championshipId as string | null,
    state: route.query.state ? Number(route.query.state) : null,
    management: route.query.management ? Number(route.query.management) : null,
  }));
  const getTeamsFn = async (filter: TeamFilter) => {
    try {
      showLoading();
      return await getTeams(filter);
    } finally {
      hideLoading();
    }
  };

  const fetchTeams = async () => {
    const filter = teamFilter.value;
    const response = await queryClient.fetchQuery({
      queryKey: getTeamsQueryKey(filter),
      queryFn: () => getTeamsFn(filter),
      retry: false,
    });
    store.setTeams(response);
    return response;
  };

  return { fetchTeams };
};
