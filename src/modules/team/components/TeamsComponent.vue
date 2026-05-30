<script setup lang="ts">
import type { TeamInterface } from '../interfaces/TeamInterface';
import TeamComponent from './TeamComponent.vue';

const { teams } = defineProps<{ teams: TeamInterface[] }>();
</script>
<template>
  <div>
    <div class="row q-col-gutter-md q-gutter-y-md">
      <div v-for="team in teams" :key="team.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <TeamComponent :team="team" />
      </div>
    </div>
  </div>
</template>
