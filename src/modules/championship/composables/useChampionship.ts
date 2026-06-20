import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { championshipService } from '../services/ChampionshipService';
import type { ChampionshipInterface } from '../interfaces/ChampionshipInterface';

export const useChampionship = () => {
  const queryClient = useQueryClient();
  const createChampionship = useMutation({
    mutationFn: championshipService.createChampionship,

    onSuccess: (newChampionship: ChampionshipInterface) => {
      queryClient.invalidateQueries({
        queryKey: ['championships'],
      });

      queryClient.setQueryData<ChampionshipInterface[]>(['championships'], (oldData) =>
        oldData ? [...oldData, newChampionship] : [newChampionship],
      );
    },
  });

  return {
    createChampionship,
    isPending: createChampionship.isPending,
  };
};
