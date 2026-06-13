<template>
  <q-form @submit.prevent>
    <div class="row q-col-gutter-md q-gutter-y-md">
      <div class="col-12 col-md-6">
        <dc-select label="Torneo" :options="tournamentOptions" dense outlined clearable />
      </div>

      <div class="col-12 col-md-6">
        <dc-select label="Equipo" :options="teamOptions" dense outlined clearable />
      </div>
    </div>

    <div class="row items-center justify-end q-mt-md q-gutter-sm">
      <div class="col-auto">
        <dc-button label="Limpiar filtros" color="primary" flat unelevated />
      </div>
      <div class="col-auto">
        <dc-button label="Buscar" color="primary" unelevated type="submit" />
      </div>
    </div>
  </q-form>
</template>

<script setup lang="ts">
const tournamentOptions = [
  { description: 'Primera división', value: 'Primera división' },
  { description: 'Copa local', value: 'Copa local' },
];

const teamOptions = [
  { description: 'Club Atlético Bolivar', value: 1 },
  { description: 'Real Oruro FC', value: 2 },
];
</script>
