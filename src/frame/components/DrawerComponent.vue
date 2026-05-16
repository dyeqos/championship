<script setup lang="ts">
import { type EssentialLinkProps } from '../interfaces/FrameInterface';
import EssentialLink from './EssentialLink.vue';

const leftDrawerOpen = defineModel<boolean>({ default: false });

interface Props {
  linksList: EssentialLinkProps[];
}

const props = defineProps<Props>();
</script>
<template>
  <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
    <q-list>
      <q-item-label header> Essential Links </q-item-label>

      <EssentialLink v-for="link in props.linksList" :key="link.title" v-bind="link" />
    </q-list>
  </q-drawer>
</template>
