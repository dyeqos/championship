import type { RouteRecordRaw } from 'vue-router';
import { routeName } from '../constants/RouteConstant';

export const personRoute: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: 'player',
        name: routeName.playerMain,
        component: () => import('../pages/player/PlayerPage.vue'),
      },
      {
        path: 'coach',
        name: routeName.coachMain,
        component: () => import('../pages/coach/CoachPage.vue'),
      },
    ],
  },
];
