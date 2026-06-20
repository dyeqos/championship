<script setup lang="ts">
import { championshipStore } from '../store/ChampionshipStore';
import { getManagementYears } from 'src/platform/tools/utils/ManagementUtil';
import { getParamOptions } from 'src/platform/tools/utils/ParamUtil';
import { getRomanOptions } from 'src/platform/tools/utils/RomanUtil';

const store = championshipStore();
const { data: championshipOptions } = getParamOptions('CHAMPIONSHIP');
const { data: categoryOptions } = getParamOptions('CATEGORY');
const versionOptions = getRomanOptions(10);
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
    <dc-select
      v-model="store.championship.version"
      class="col-xs-12 col-sm-6"
      :label="'Versión'"
      :options="versionOptions"
      :required="true"
    ></dc-select>
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
</template>
