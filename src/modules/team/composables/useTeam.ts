import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { teamService } from '../services/TeamService';
import { notifySuccess } from 'src/platform/tools/utils/NotifyUtil';
import type { TeamInterface } from '../interfaces/TeamInterface';

export const useTeam = () => {
  const queryClient = useQueryClient();

  const createTeam = useMutation({
    mutationFn: teamService.createTeam,
    onSuccess: (newTeam: TeamInterface) => {
      notifySuccess('Equipo Creado');
      queryClient.invalidateQueries({
        queryKey: ['championships'],
      });

      queryClient.setQueryData<TeamInterface[]>(['championships'], (oldData) =>
        oldData ? [...oldData, newTeam] : [newTeam],
      );
    },
  });

  return {
    createTeam,
    isPending: createTeam.isPending,
    isSuccess: createTeam.isSuccess,
  };
};
