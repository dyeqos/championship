import type { RouteRecordRaw } from 'vue-router';
import { routeName } from '../constants/RouteConstant';

export const playerRoute: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: routeName.playerMain,
        component: () => import('../pages/MainPage.vue'),
      },
    ],
  },
];
