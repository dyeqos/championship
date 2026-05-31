<template>
  <q-card class="player-card">
    <q-card-section class="row items-center no-wrap q-py-xs q-px-md">
      <div class="col-auto q-pa-none">
        <q-avatar size="xl q-mr-md" color="primary" text-color="white">
          <img v-if="player.photoUrl" :src="player.photoUrl" :alt="player.name" />
          <div v-else class="player-avatar--initials">{{ initials }}</div>
        </q-avatar>
      </div>

      <div class="col q-ml-sm">
        <div class="text-h6 text-weight-bold">{{ player.name }}</div>
        <div class="text-caption">#{{ player.number ?? '-' }} • {{ player.position ?? '-' }}</div>
      </div>

      <div class="col-auto text-center">
        <div class="text-overline">MVP</div>
        <q-knob
          readonly
          :max="100"
          show-value
          track-color="grey-3"
          class=""
          v-model="algo"
          size="xl"
          color="primary"
        >
          <span class="">{{ algo }}%</span>
        </q-knob>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <DescriptionIconComponent
            :label="'Goles'"
            :value="player.stats?.goals?.toString() ?? '0'"
            :type="'goals'"
          />
        </div>
        <div class="col-6">
          <DescriptionIconComponent
            :label="'Asistencias'"
            :value="player.stats?.assists?.toString() ?? '0'"
            :type="'assists'"
          />
        </div>

        <div class="col-6">
          <DescriptionIconComponent
            :label="'Amarillas'"
            :value="player.stats?.yellowCards?.toString() ?? '0'"
            :type="'yellow-cards'"
          />
        </div>
        <div class="col-6">
          <DescriptionIconComponent
            :label="'Rojas'"
            :value="player.stats?.redCards?.toString() ?? '0'"
            :type="'red-cards'"
          />
        </div>

        <div class="col-6">
          <DescriptionIconComponent
            :label="'Altura'"
            :value="player.heightCm ? `${player.heightCm} cm` : '-'"
            :type="'height'"
          />
        </div>
        <div class="col-6">
          <DescriptionIconComponent
            :label="'Peso'"
            :value="player.weightKg ? `${player.weightKg} kg` : '-'"
            :type="'weight'"
          />
        </div>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Ver" color="primary" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { PlayerInterface } from '../interfaces/PlayerInterface';
import DescriptionIconComponent from './DescriptionIconComponent.vue';

const { player } = defineProps<{ player: PlayerInterface }>();

const initials = computed(() => {
  const name = (player.name ?? '').trim();
  const parts = name.split(' ').filter((p) => p.length > 0);
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0]?.slice(0, 2).toUpperCase();
  const first = parts[0]?.[0] ?? '';
  const second = parts[1]?.[0] ?? '';
  return `${first}${second}`.toUpperCase();
});

const algo = ref(8);
</script>
