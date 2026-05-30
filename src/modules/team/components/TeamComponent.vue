<script setup lang="ts">
import { computed } from 'vue';
import type { TeamInterface } from '../interfaces/TeamInterface';

const { team } = defineProps<{ team: TeamInterface }>();

const initials = computed(() => {
  const name = (team.name ?? '').trim();
  const parts = name.split(' ').filter((part) => part.length > 0);

  if (parts.length === 0) return '';

  const firstPart = parts[0] ?? '';
  if (parts.length === 1) return firstPart.slice(0, 2).toUpperCase();

  const secondPart = parts[1] ?? '';
  const first = firstPart[0] ?? '';
  const second = secondPart[0] ?? '';
  return `${first}${second}`.toUpperCase();
});
</script>
<template>
  <q-card class="">
    <q-card-section class="row items-center q-py-sm q-px-md">
      <div class="col-auto">
        <q-avatar class="q-mr-md" size="xl" color="primary" text-color="white">
          <img v-if="team.crestUrl" :src="team.crestUrl" :alt="team.name" />
          <div v-else class="text-h6">{{ initials }}</div>
        </q-avatar>
      </div>

      <div class="col">
        <div class="text-h6 text-weight-medium">{{ team.name }}</div>
        <div class="text-caption text-weight-light">
          Posición:
          <span class="text-green-6 text-weight-bold">#{{ team.stadium ?? '3' }}</span>
        </div>
      </div>
    </q-card-section>

    <q-separator class="" />

    <q-card-section class="team-card__content">
      <div class="row">
        <div class="col-12 col-sm-6">
          <div class="team-card__field">
            <div class="text-caption">Entrenador</div>
            <div class="text-subtitle2">{{ team.coach ?? '-' }}</div>
          </div>
        </div>

        <div class="col-12 col-sm-6">
          <div class="team-card__field">
            <div class="text-caption">Máximo goleador</div>
            <div class="row items-center q-col-gutter-xs">
              <div class="col-auto">
                <q-avatar size="36px" color="grey-6" text-color="white">
                  <img
                    v-if="team.crestUrl"
                    :src="team.crestUrl ?? undefined"
                    :alt="team.topScorer?.name"
                  />
                  <div v-else class="text-subtitle2">{{ initials }}</div>
                </q-avatar>
              </div>
              <div class="col">
                <div class="text-subtitle2">{{ team.topScorer?.name ?? '-' }}</div>
                <div class="text-caption">{{ team.topScorer?.goals ?? '-' }} goles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card-section>

    <q-separator class="" />

    <q-card-actions class="row justify-center">
      <dc-button :label="'Estadísticas'" :icon="'mdi-chart-line'" :color="'secondary'" />
    </q-card-actions>
  </q-card>
</template>
