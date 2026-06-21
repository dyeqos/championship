<script setup lang="ts">
import { championshipStore } from '../store/ChampionshipStore';
import { getManagementYears } from 'src/platform/tools/utils/ManagementUtil';
import { getParamOptions } from 'src/platform/tools/utils/ParamUtil';

const store = championshipStore();
const { data: championshipOptions } = getParamOptions('CHAMPIONSHIP');
const { data: categoryOptions } = getParamOptions('CATEGORY');
</script>
<template>
  <div class="row">
    <dc-select
      v-model="store.championship.name"
      class="col-xs-12 col-sm-6"
      :label="'Campeonato'"
      :options="championshipOptions"
      :required="true"
    ></dc-select>
    <dc-select
      v-model="store.championship.management"
      class="col-xs-12 col-sm-6"
      :label="'Gestión'"
      :options="getManagementYears()"
      :required="true"
    ></dc-select>
    <dc-date
      v-model="store.championship.dateInit"
      class="col-xs-12 col-sm-6"
      :label="'Fecha de Inicio'"
    ></dc-date>
    <dc-select
      v-model="store.championship.category"
      class="col-xs-12 col-sm-6"
      :label="'Categoría'"
      :options="categoryOptions"
      :required="true"
    ></dc-select>
    <dc-select
      v-model="store.championship.gender"
      class="col-xs-12 col-sm-6"
      :label="'Género'"
      :options="[
        { value: 1, description: 'Masculino' },
        { value: 2, description: 'Femenino' },
      ]"
      :required="true"
    ></dc-select>
  </div>
  {{ store.championship }}
</template>
