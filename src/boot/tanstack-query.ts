import { boot } from 'quasar/wrappers';
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';

export default boot(({ app }) => {
  // Puedes personalizar las opciones del cliente aquí
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutos
      },
    },
  });

  app.use(VueQueryPlugin, { queryClient });
});
