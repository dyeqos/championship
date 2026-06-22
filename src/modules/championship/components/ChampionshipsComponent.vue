<script setup lang="ts">
import type { Championship } from '../interfaces/ChampionshipInterface';
import ChampionshipCard from './ChampionshipCardComponent.vue';
const props = defineProps<{ championships: Championship[] }>();
</script>

<template>
  <div class="row">
    <template v-for="championship in props.championships" :key="championship.id">
      <ChampionshipCard class="col-xs-12 col-sm-6 col-md-4 col-lg-3" :championship="championship" />
    </template>
  </div>
</template>
