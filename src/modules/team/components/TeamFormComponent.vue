<script lang="ts" setup>
import { teamStore } from '../store/TeamStore';
import { useGetChampionships } from 'src/modules/championship/composables/useGetChampionships';

const store = teamStore();

const { data: championshipFiltered } = useGetChampionships({});
</script>
<template>
  <dc-select
    v-model="store.team.championshipId"
    :label="'Campeonato'"
    :options="
      championshipFiltered?.map((c) => ({
        description: c.name.description,
        value: c.id,
      })) ?? []
    "
  ></dc-select>
  <dc-input
    v-model="store.team.name"
    :label="'Nombre Equipo'"
    :max-length="50"
    :min-length="3"
  ></dc-input>

  <dc-person-search
    v-model="store.team.numberIdentifier"
    label="Carnet Entrenador"
  ></dc-person-search>
</template>
