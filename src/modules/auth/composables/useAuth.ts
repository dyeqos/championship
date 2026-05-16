import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { loginApi, registerApi } from '../services/AuthService';
import { setAuthSession } from 'src/platform/tools/utils/TokenUtil';

export const useAuth = () => {
  const router = useRouter();
  const $q = useQuasar();

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      $q.notify({ type: 'negative', message: 'Email y password son obligatorios' });
      return;
    }
    try {
      const response = await loginApi({ email, password });
      setAuthSession(response);
      $q.notify({ type: 'positive', message: `Bienvenido ${response.fullName}` });
      await router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (email: string, password: string) => {
    if (!email || !password) {
      $q.notify({ type: 'negative', message: 'Email y password son obligatorios' });
      return;
    }
    try {
      const response = await registerApi({ email, password });

      if (response.isCreated) {
        $q.notify({
          type: 'positive',
          message: 'Cuenta creada correctamente. Por favor inicie sesión.',
        });
        await router.push('/auth/login');
        $q.notify({ type: 'negative', message: 'No se pudo crear la cuenta' });
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    login,
    register,
  };
};
