import type { RouteRecordRaw } from 'vue-router';
import { routeName } from '../constants/RouteConstant';

export const teamRoute: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: routeName.teamMain,
        component: () => import('../pages/MainPage.vue'),
      },
    ],
  },
];
