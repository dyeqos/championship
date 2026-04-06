import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/auth',
    component: () => import('../modules/auth/layouts/MainLayout.vue'),
    children: [
      { path: 'login', component: () => import('../modules/auth/pages/LoginPage.vue') },
      { path: 'register', component: () => import('../modules/auth/pages/RegisterPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    redirect: '/auth/login',
  },
];

export default routes;
