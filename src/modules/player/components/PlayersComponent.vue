<template>
  <div>
    <div class="row q-col-gutter-md q-gutter-y-md">
      <div v-for="player in players" :key="player.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <PlayerComponent :player="player" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PlayerInterface } from '../interfaces/PlayerInterface';
import PlayerComponent from './PlayerComponent.vue';

const { players } = defineProps<{ players: PlayerInterface[] }>();
</script>
