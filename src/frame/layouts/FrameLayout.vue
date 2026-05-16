<script setup lang="ts">
import { ref } from 'vue';
import DrawerComponent from 'src/frame/components/DrawerComponent.vue';
import HeaderComponent from 'src/frame/components/HeaderComponent.vue';

import menuJson from '../json/Menu.json';
import type { EssentialLinkProps } from '../interfaces/FrameInterface';

const linksList: EssentialLinkProps[] = menuJson as EssentialLinkProps[];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <HeaderComponent :toggle-left-drawer="toggleLeftDrawer" />

    <DrawerComponent v-model="leftDrawerOpen" :links-list="linksList" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
