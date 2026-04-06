<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useAuth } from '../composables/useAuth';

const router = useRouter();
const $q = useQuasar();
const { login } = useAuth();
const email = ref('');
const password = ref('');
const loading = ref(false);

const onSubmit = async () => {
  loading.value = true;

  try {
    await login(email.value, password.value);
  } finally {
    loading.value = false;
  }
};

const goToRegister = async () => {
  await router.push('/auth/register');
};

const loginWithGoogle = () => {
  $q.notify({ type: 'info', message: 'Login con Google no implementado aún' });
};
</script>
<template>
  <q-page class="auth-page q-ma-none q-pa-none flex flex-center full-height">
    <q-card
      class="q-pa-lg shadow-2"
      style="width: min(400px, 90vw); max-height: calc(100vh - 2rem); overflow: auto"
    >
      <q-card-section class="text-center">
        <div class="text-h5 text-weight-bold text-primary q-mb-md">Login</div>
        <div class="text-grey-6 q-mb-lg">Enter your credentials to access your account</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-y-xs">
          <q-input
            v-model="email"
            label="Email"
            dense
            type="email"
            filled
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Email is required']"
          />

          <q-input
            v-model="password"
            label="Password"
            dense
            type="password"
            filled
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Password is required']"
          />

          <q-btn
            label="Login"
            type="submit"
            color="primary"
            class="full-width"
            :loading="loading"
          />

          <div class="text-center text-grey-6 q-my-lg">or continue with</div>

          <q-btn
            label="Continue with Google"
            color="red-6"
            icon="fab fa-google"
            class="full-width"
            outline
            @click="loginWithGoogle"
          />
        </q-form>
      </q-card-section>

      <q-card-section class="text-center">
        <q-btn flat color="primary" label="No tiene una Cuenta? Registrar" @click="goToRegister" />
      </q-card-section>
    </q-card>
  </q-page>
</template>
