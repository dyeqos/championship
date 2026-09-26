<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useGetChampionships } from 'src/modules/championship/composables/useGetChampionships';
import { useGetTeams } from '../composables/useGetTeam';
import { getManagementYears } from 'src/platform/tools/utils/ManagementUtil';
import { routeName } from '../constants/RouteConstant';
import { getTeamStates } from 'src/platform/tools/utils/TeamUtil';

const route = useRoute();
const router = useRouter();

onBeforeMount(() => {
  championshipId.value = route.query.championshipId ? String(route.query.championshipId) : null;
  state.value = route.query.state ? Number(route.query.state) : null;
  management.value = route.query.management ? Number(route.query.management) : null;
  if (championshipId.value || state.value || management.value) {
    fetchTeams();
  }
});

const championshipId = ref<string | null>(
  route.query.championshipId ? String(route.query.championshipId) : null,
);
const state = ref<number | null>(route.query.state ? Number(route.query.state) : null);
const management = ref<number | null>(
  route.query.management ? Number(route.query.management) : null,
);

const { data: championshipOptions } = useGetChampionships({});
const { fetchTeams } = useGetTeams();

const clearFilters = () => {
  championshipId.value = null;
  state.value = null;
  management.value = null;
  router.replace({
    name: routeName.teamMain,
    query: {},
  });
};

const searchTeams = async () => {
  await router.replace({
    name: routeName.teamMain,
    query: {
      ...route.query,
      championshipId: championshipId.value,
      state: state.value,
      management: management.value,
    },
  });
  await fetchTeams();
};
</script>
<template>
  <q-form @submit.prevent="searchTeams">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-4">
        <dc-select
          v-model="championshipId"
          :label="'Campeonato'"
          :options="
            championshipOptions?.map((c) => ({
              description: c.name.name,
              value: c.id,
            })) ?? []
          "
        />
      </div>

      <div class="col-12 col-md-4">
        <dc-select v-model="state" :label="'Estado'" :options="getTeamStates()" />
      </div>

      <div class="col-12 col-md-4">
        <dc-select v-model="management" :label="'Gestión'" :options="getManagementYears()" />
      </div>
    </div>

    <div class="row items-center justify-end q-mt-md q-gutter-sm">
      <div class="col-auto">
        <dc-button :action="clearFilters" :label="'Limpiar filtros'" :color="'secondary'" />
      </div>

      <div class="col-auto">
        <dc-button :label="'Buscar'" :color="'primary'" :type="'submit'" />
      </div>
    </div>
  </q-form>
</template>
