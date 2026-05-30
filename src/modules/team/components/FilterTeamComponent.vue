<script setup lang="ts">
import { ref } from 'vue';

const selectedChampionship = ref<string | null>(null);
const selectedStatus = ref<string | null>(null);
const selectedYear = ref<string | null>(null);

const championshipOptions = [
  { description: 'Primera división', value: 'primera' },
  { description: 'Segunda división', value: 'segunda' },
  { description: 'Torneo local', value: 'torneo_local' },
];

const statusOptions = [
  { description: 'Activo', value: 'activo' },
  { description: 'Inactivo', value: 'inactivo' },
  { description: 'En pausa', value: 'pausa' },
];

const yearOptions = [
  { description: '2026', value: '2026' },
  { description: '2025', value: '2025' },
  { description: '2024', value: '2024' },
];

const clearFilters = () => {
  selectedChampionship.value = null;
  selectedStatus.value = null;
  selectedYear.value = null;
};
</script>
<template>
  <q-form @submit.prevent>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-4">
        <dc-select
          v-model="selectedChampionship"
          :label="'Campeonato'"
          :options="championshipOptions"
        />
      </div>

      <div class="col-12 col-md-4">
        <dc-select v-model="selectedStatus" :label="'Estado'" :options="statusOptions" />
      </div>

      <div class="col-12 col-md-4">
        <dc-select v-model="selectedYear" :label="'Gestión'" :options="yearOptions" />
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
