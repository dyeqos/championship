<script setup lang="ts">
import FilterPlayerComponent from '../components/FilterPlayerComponent.vue';
import PlayersComponent from '../components/PlayersComponent.vue';
import players from '../json/players';
</script>

<template>
  <dc-panel :title="'Jugadores'" :caption="'Administración de jugadores'">
    <FilterPlayerComponent />
    <PlayersComponent :players="players" />
  </dc-panel>
</template>
