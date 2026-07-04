<script lang="ts" setup>
import { teamStore } from '../store/TeamStore';
import { useGetChampionships } from 'src/modules/championship/composables/useGetChampionships';
import { getManagementYears } from 'src/platform/tools/utils/ManagementUtil';
import { ChampionshipState } from 'src/modules/championship/enums/ChampionshipStateEnum';
import type { ChampionshipFilter } from 'src/modules/championship/interfaces/ChampionshipFilterInterface';

const store = teamStore();

const championshipFilter: ChampionshipFilter = {
  management: getManagementYears().map((v) => v.value),
  state: ChampionshipState.DRAFT,
};

const { data: championshipFiltered } = useGetChampionships(championshipFilter);
</script>
<template>
  <dc-select
    v-model="store.team.championship"
    :label="'Campeonato'"
    :options="
      championshipFiltered?.map((c) => ({
        value: c.id,
        description: c.name.name + ' ' + c.management + '-' + c.version,
      })) ?? []
    "
  ></dc-select>
  <dc-input v-model="store.team.name" :label="'Nombre'" :max-length="50" :min-length="3"></dc-input>
  <dc-select
    v-model="store.team.teamUser"
    :label="'Entrenador'"
    :options="[
      {
        value: '69cd8a3c4ce53223b5c80e52',
        description: 'Diego calvi',
      },
    ]"
  ></dc-select>
</template>
