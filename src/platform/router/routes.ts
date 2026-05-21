import type { RouteRecordRaw } from 'vue-router';
import { championshipRoute } from 'src/modules/championship/router/ChampionshipRoute';
import { homeRoute } from 'src/modules/home/router/HomeRoute';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/frame/layouts/FrameLayout.vue'),
    children: [
      {
        path: '',
        children: homeRoute,
      },
      {
        path: 'championship',
        children: championshipRoute,
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('src/modules/auth/layouts/MainLayout.vue'),
    children: [
      { path: 'login', component: () => import('src/modules/auth/pages/LoginPage.vue') },
      { path: 'register', component: () => import('src/modules/auth/pages/RegisterPage.vue') },
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
