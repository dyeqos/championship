<script setup lang="ts">
import FilterTeamComponent from '../components/FilterTeamComponent.vue';
import TeamsComponent from '../components/TeamsComponent.vue';
import teams from '../json/teams';
</script>

<template>
  <dc-panel :title="'Equipos'" :caption="'Administración de equipos'">
    <FilterTeamComponent />
    <TeamsComponent :teams="teams" />
  </dc-panel>
</template>
