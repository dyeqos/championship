import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { championshipService } from '../services/ChampionshipService';
import type { Championship } from '../interfaces/ChampionshipInterface';

export const useChampionship = () => {
  const queryClient = useQueryClient();
  const createChampionship = useMutation({
    mutationFn: championshipService.createChampionship,

    onSuccess: (newChampionship: Championship) => {
      queryClient.invalidateQueries({
        queryKey: ['championships'],
      });

      queryClient.setQueryData<Championship[]>(['championships'], (oldData) =>
        oldData ? [...oldData, newChampionship] : [newChampionship],
      );
    },
  });

  const updateChampionship = useMutation({
    mutationFn: championshipService.updateChampionship,

    onSuccess: (updatedChampionship: Championship) => {
      queryClient.invalidateQueries({
        queryKey: ['championships'],
      });

      queryClient.setQueryData<Championship[]>(['championships'], (oldData) =>
        oldData
          ? oldData.map((championship) =>
              championship.id === updatedChampionship.id ? updatedChampionship : championship,
            )
          : [updatedChampionship],
      );
    },
  });

  return {
    createChampionship,
    isPending: createChampionship.isPending,
    updateChampionship,
    isUpdating: updateChampionship.isPending,
  };
};
