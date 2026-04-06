<template>
  <q-page class="auth-page q-ma-none q-pa-none flex flex-center full-height">
    <q-card
      class="q-pa-lg shadow-2"
      style="width: min(400px, 90vw); max-height: calc(100vh - 2rem); overflow: auto"
    >
      <q-card-section class="text-center">
        <div class="text-h5 text-weight-bold text-primary q-mb-md">Register</div>
        <div class="text-grey-6 q-mb-lg">Create your account to get started</div>
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
            :rules="[(val) => (val && val.length > 5) || 'Password must be at least 6 characters']"
          />

          <q-input
            v-model="confirmPassword"
            label="Confirm Password"
            dense
            type="password"
            filled
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please confirm password',
              (val) => val === password || 'Passwords do not match',
            ]"
          />

          <q-btn
            label="Register"
            type="submit"
            color="primary"
            class="full-width"
            :loading="loading"
          />

          <div class="text-center text-grey-6 q-my-sm">or continue with</div>

          <q-btn
            label="Continue with Google"
            color="red-6"
            icon="fab fa-google"
            class="full-width"
            outline
            @click="registerWithGoogle"
          />
        </q-form>
      </q-card-section>

      <q-card-section class="text-center">
        <q-btn flat color="primary" label="Already have an account? Login" @click="goToLogin" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useAuth } from '../composables/useAuth';

const router = useRouter();
const $q = useQuasar();
const { register } = useAuth();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);

const onSubmit = async () => {
  if (!email.value || !password.value || !confirmPassword.value) {
    $q.notify({ type: 'negative', message: 'Todos los campos son obligatorios' });
    return;
  }

  if (password.value !== confirmPassword.value) {
    $q.notify({ type: 'negative', message: 'Las contraseñas no coinciden' });
    return;
  }

  loading.value = true;
  try {
    await register(email.value, password.value);
  } finally {
    loading.value = false;
  }
};

const goToLogin = () => {
  void router.push('/auth/login');
};

const registerWithGoogle = () => {
  $q.notify({ type: 'info', message: 'Registro con Google no implementado aún' });
};
</script>
