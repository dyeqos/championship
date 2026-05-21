<script setup lang="ts">
import type { ChampionshipInterface } from '../interfaces/ChampionshipInterface';

const props = defineProps<{ championship: ChampionshipInterface }>();

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

const statusLabel = props.championship.isActive ? 'Activo' : 'Inactivo';
const statusColor = props.championship.isActive ? 'positive' : 'negative';
</script>

<template>
  <div class="q-pa-xs">
    <q-card>
      <q-card-section class="q-pa-md">
        <div class="row justify-between">
          <div class="col" style="min-height: 64px">
            <div class="text-h5 text-weight-bold">{{ props.championship.title }}</div>
          </div>
          <div class="row items-start">
            <dc-badge :label="statusLabel" :color="statusColor" />
          </div>
        </div>

        <div class="col-12">
          <div v-if="props.championship.caption" class="text-caption q-mt-xs">
            {{ props.championship.caption }}
          </div>
          <dc-badge
            v-for="tag in props.championship.tags"
            :key="tag"
            :label="tag"
            color="primary"
            :outline="true"
            class="q-mt-sm"
          />
        </div>
      </q-card-section>

      <q-card-section class="q-px-md q-pt-xs">
        <div class="">
          <div class="text-right text-overline">{{ props.championship.progress }}%</div>
          <q-linear-progress
            :value="props.championship.progress / 100"
            color="primary"
            track-color="grey-3"
            rounded
            :striped="true"
            size="8px"
          />
        </div>

        <div class="row items-center justify-between q-mt-md">
          <div>
            <div class="text-subtitle2 text-weight-bold">Inicio</div>
            <div>{{ formatDate(props.championship.startDate) }}</div>
          </div>
          <div>
            <div class="text-subtitle2 text-weight-bold">Equipos</div>
            <div>{{ props.championship.totalTeams }}</div>
          </div>
        </div>
      </q-card-section>

      <q-card-actions class="justify-center">
        <dc-button
          rounded
          :icon="'mdi-eye'"
          :color="'secondary'"
          :action="() => {}"
          :outline="true"
        />
        <dc-button
          rounded
          :icon="'mdi-pencil'"
          color="secondary"
          :action="() => {}"
          :outline="true"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>
