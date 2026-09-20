<script setup lang="ts">
import { personStore } from 'src/modules/person/store/PersonStore';
import PersonForm from 'src/modules/person/components/PersonFormComponent.vue';
import type { PersonSearch } from './PersonSearchInterface';
import type { PersonInterface } from 'src/modules/person/interfaces/PersonInterface';

const storePerson = personStore();
const { showModal } = defineProps<PersonSearch>();

const emit = defineEmits<{
  (e: 'person', value: PersonInterface): void;
  (e: 'showModal', value: boolean): void;
}>();
</script>
<template>
  <dc-modal
    :show="showModal"
    :close="() => emit('showModal', false)"
    title="Búsqueda de Usuario"
    size="medium"
    :actions="[
      {
        action: () => {
          emit('showModal', false);
          storePerson.clearPerson();
        },
        color: 'secondary',
        label: 'Cerrar',
      },
      {
        action: () => {
          console.log('Selected person:', storePerson.person);
          emit('showModal', false);
          emit('person', storePerson.person);
          storePerson.clearPerson();
        },
        disabled: storePerson.person.id == null,
        label: 'Seleccionar',
      },
    ]"
  >
    <PersonForm />
  </dc-modal>
</template>
