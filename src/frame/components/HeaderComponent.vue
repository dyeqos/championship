<script setup lang="ts">
import { useQuasar } from 'quasar';

interface Props {
  toggleLeftDrawer: () => void;
}

const props = defineProps<Props>();

const $q = useQuasar();
</script>

<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" @click="props.toggleLeftDrawer" />

      <q-toolbar-title> Quasar App </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>
