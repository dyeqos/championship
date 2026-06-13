import { computed } from 'vue';
import { useParamsDomain } from 'src/modules/param/composables/useParamsDomain';

export const getParamOptions = (domain: string) => {
  const query = useParamsDomain(domain);
  return {
    ...query,
    data: computed(
      () => query.data.value?.map((param) => ({ description: param.name, value: param.id })) || [],
    ),
  };
};
