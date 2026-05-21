<script setup lang="ts">
import ChampionshipCard from '../components/ChampionshipCardComponent.vue';

const algo = () => console.log('Algo');
</script>
<template>
  <dc-panel
    :title="'Campeonatos'"
    :caption="'Configuraciones'"
    :actionButton="{ label: 'Crear Campeonato', color: 'primary', action: algo }"
    :actions="[
      { label: 'Editar', color: 'primary', action: algo },
      { label: 'Eliminar', color: 'secondary', action: algo },
    ]"
  >
    <div class="row">
      <ChampionshipCard
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
        :championship="{
          id: 1,
          title: 'Villa Dolores',
          caption: '2026 - I',
          isActive: true,
          progress: 25,
          startDate: '2024-01-01',
          endDate: '2024-12-31',
          totalTeams: 15,
          tags: ['En curso', 'Sub 18'],
        }"
      />
      <ChampionshipCard
        v-for="championship in [1, 2, 3]"
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
        :key="championship"
        :championship="{
          id: championship,
          title: 'Villa Auquisamaña ' + championship,
          caption: 'Descripción del campeonato ' + championship,
          isActive: championship % 2 === 0,
          progress: championship * 25,
          startDate: '2024-01-01',
          endDate: '2024-12-31',
          totalTeams: championship * 4,
          tags: [championship % 2 === 0 ? 'En curso' : 'Próximo', 'Sub 18'],
        }"
      />
    </div>
  </dc-panel>
</template>
