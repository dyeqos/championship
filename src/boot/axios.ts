import { defineBoot } from '#q-app/wrappers';
import axios, { type AxiosInstance } from 'axios';
import { getAuthToken } from 'src/platform/tools/utils/TokenUtil';
import { notifyError } from 'src/platform/tools/utils/NotifyUtil';
import type { GlobalError } from 'src/platform/interfaces/GlobalInterface';

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de request: añade token de auth si existe
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Interceptor de response: manejo global de errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const errData = error.response?.data as GlobalError | undefined;

      // Manejar errores globales, como 401 para logout
      if (error.response?.status === 401) {
        console.warn('Token expirado o inválido');
        notifyError('Sesión expirada. Por favor inicie sesión nuevamente.');
        // Aquí podrías hacer logout automático si tienes acceso al store
      }

      // Mostrar notificaciones basadas en el error
      if (errData?.message) {
        const messages = Array.isArray(errData.message) ? errData.message : [errData.message];
        for (let i = 0; i < Math.min(messages.length, 3); i++) {
          notifyError(messages[i]!);
        }
      } else if (errData?.error) {
        notifyError(errData.error);
      } else {
        const fallbackMessage = error.response?.statusText || error.message || 'Error desconocido';
        notifyError(fallbackMessage);
      }
    } else if (error instanceof Error) {
      notifyError(error.message);
    } else {
      notifyError('Error desconocido');
    }
    return Promise.reject(error);
  },
);

export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
