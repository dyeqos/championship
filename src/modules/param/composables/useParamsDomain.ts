import { useQuery } from '@tanstack/vue-query';
import { paramService } from '../services/ParamService';

const { getParamsByDomain } = paramService;

export const useParamsDomain = (domain: string) => {
  return useQuery({
    queryKey: ['params', domain],
    queryFn: () => getParamsByDomain(domain),
  });
};
