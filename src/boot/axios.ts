import { defineBoot } from '#q-app/wrappers';
import axios, { type AxiosInstance } from 'axios';
import { Notify } from 'quasar';
import { getAuthToken } from '../tools/utils/TokenUtil';

interface ErrorType {
  message?: string[] | string;
  error?: string;
  statusCode?: number;
}
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
  (error) => Promise.reject(error), // eslint-disable-line @typescript-eslint/prefer-promise-reject-errors
);

// Interceptor de response: manejo global de errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      const errData = error.response?.data as ErrorType | undefined;

      // Manejar errores globales, como 401 para logout
      if (error.response?.status === 401) {
        console.warn('Token expirado o inválido');
        Notify.create({
          type: 'negative',
          message: 'Sesión expirada. Por favor inicie sesión nuevamente.',
        });
        // Aquí podrías hacer logout automático si tienes acceso al store
      }

      // Mostrar notificaciones basadas en el error
      if (errData?.message) {
        const messages = Array.isArray(errData.message) ? errData.message : [errData.message];
        for (let i = 0; i < Math.min(messages.length, 3); i++) {
          Notify.create({
            type: 'negative',
            message: messages[i]!,
          });
        }
      } else if (errData?.error) {
        Notify.create({
          type: 'negative',
          message: errData.error,
        });
      } else {
        const fallbackMessage = error.response?.statusText || error.message || 'Error desconocido';
        Notify.create({
          type: 'negative',
          message: fallbackMessage,
        });
      }
    } else if (error instanceof Error) {
      Notify.create({
        type: 'negative',
        message: error.message,
      });
    } else {
      Notify.create({
        type: 'negative',
        message: 'Error desconocido',
      });
    }

    return Promise.reject(error); // eslint-disable-line @typescript-eslint/prefer-promise-reject-errors
  },
);

export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
