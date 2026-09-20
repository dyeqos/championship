<script lang="ts" setup>
import { ref } from 'vue';
import { teamStore } from '../store/TeamStore';
import { useGetChampionships } from 'src/modules/championship/composables/useGetChampionships';
import type { PersonInterface } from 'src/modules/person/interfaces/PersonInterface';

const store = teamStore();
const showModal = ref<boolean>(false);
const personSearch = ref(null);
const inputRef = ref();

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
  <dc-input
    ref="inputRef"
    v-model="store.team.personName"
    :label="'Persona Coach'"
    @focus="
      () => {
        showModal = true;
        inputRef.blur();
      }
    "
  ></dc-input>

  <dc-person-search
    :show-modal="showModal"
    :person="personSearch"
    @showModal="showModal = $event"
    @person="
      (person: PersonInterface) => {
        store.team.personName = person.firstName + ' ' + person.lastName;
        store.team.personId = person.id;
      }
    "
  ></dc-person-search>
</template>
