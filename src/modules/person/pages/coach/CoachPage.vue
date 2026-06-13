<script setup lang="ts">
import FilterPlayerComponent from '../../components/FilterPlayerComponent.vue';
import PlayersComponent from '../../components/PlayersComponent.vue';
import players from '../../json/players';
</script>

<template>
  <dc-panel
    :title="'Entrenadores'"
    :caption="'Administración de entrenadores'"
    :action-button="{ label: 'Registrar Entrenador' }"
  >
    <FilterPlayerComponent />
    <PlayersComponent :players="players" />
  </dc-panel>
</template>
