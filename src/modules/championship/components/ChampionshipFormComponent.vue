<script setup lang="ts">
import { ref } from 'vue';
import { getManagementYears } from 'src/platform/tools/utils/ManagementUtil';
import { getParamOptions } from 'src/platform/tools/utils/ParamUtil';
import type { ChampionshipFormInterface } from '../interfaces/ChampionshipFormInterface';

const championship = ref<ChampionshipFormInterface>({
  name: null,
  management: null,
  version: null,
  category: null,
  gender: null,
});
const { data: championshipOptions } = getParamOptions('CHAMPIONSHIP');
const { data: categoryOptions } = getParamOptions('CATEGORY');
</script>
<template>
  <q-form>
    <div class="row">
      <dc-select
        v-model="championship.name"
        class="col-xs-12 col-sm-6"
        :label="'Campeonato'"
        :options="championshipOptions"
      ></dc-select>
      <dc-select
        v-model="championship.management"
        class="col-xs-12 col-sm-6"
        :label="'Gestión'"
        :options="getManagementYears()"
      ></dc-select>
      <dc-select
        v-model="championship.version"
        class="col-xs-12 col-sm-6"
        :label="'Versión'"
        :options="[
          { value: 1, description: 'I' },
          { value: 2, description: 'II' },
        ]"
      ></dc-select>
      <dc-select
        v-model="championship.category"
        class="col-xs-12 col-sm-6"
        :label="'Categoría'"
        :options="categoryOptions"
      ></dc-select>
      <dc-select
        v-model="championship.gender"
        class="col-xs-12 col-sm-6"
        :label="'Género'"
        :options="[{ value: 'M', description: 'Masculino' }]"
      ></dc-select>
    </div>
  </q-form>
</template>
