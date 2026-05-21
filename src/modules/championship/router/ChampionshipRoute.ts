import type { RouteRecordRaw } from 'vue-router';
import { routeName } from '../constants/RouteConstant';

export const championshipRoute: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: routeName.championshipMain,
        component: () => import('../pages/MainPage.vue'),
      },
    ],
  },
];
