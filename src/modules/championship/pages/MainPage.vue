<script setup lang="ts">
import { ref } from 'vue';
import ChampionshipCard from '../components/ChampionshipCardComponent.vue';
import ChampionshipForm from '../components/ChampionshipFormComponent.vue';

const algo = () => console.log('Algo');
const showModal = ref(false);
</script>
<template>
  <dc-panel
    :title="'Campeonatos'"
    :caption="'Configuraciones'"
    :actionButton="{
      label: 'Crear Campeonato',
      color: 'primary',
      action: () => {
        showModal = true;
      },
    }"
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

  <dc-modal
    :actions="[
      {
        label: 'Guardar',
        action: () => {
          showModal = false;
        },
      },
    ]"
    :size="'medium'"
    :show="showModal"
    :title="'Crear Campeonato'"
    @close="() => (showModal = false)"
    @update:show="showModal = $event"
  >
    <ChampionshipForm />
  </dc-modal>
</template>
