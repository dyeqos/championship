<script setup lang="ts">
import { ref } from 'vue';
import TeamFilterComponent from '../components/TeamFilterComponent.vue';
import TeamModalComponent from '../components/TeamModalComponent.vue';
import TeamsComponent from '../components/TeamsComponent.vue';
// import teams from '../json/teams';

const show = ref(false);
</script>

<template>
  <dc-panel
    :title="'Equipos'"
    :caption="'Administración de equipos'"
    :actionButton="{
      label: 'Registrar Equipo',
      action: () => (show = true),
      icon: 'mdi-shield-plus',
    }"
  >
    <TeamFilterComponent />
    <TeamsComponent :teams="[]" />
  </dc-panel>
  <TeamModalComponent :show="show" @update:show="show = $event" />
</template>
