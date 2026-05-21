import type { RouteRecordRaw } from 'vue-router';
import { routeName } from '../constants/RouteConstant';

export const homeRoute: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: routeName.homeMain,
        component: () => import('../pages/MainPage.vue'),
      },
    ],
  },
];
