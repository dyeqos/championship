import { defineStore } from 'pinia';
import { ref } from 'vue';
import { GenderEnum } from '../enums/GenderEnum';
import type { PersonInterface } from '../interfaces/PersonInterface';

export const personStore = defineStore('personStore', () => {
  const person = ref<PersonInterface>({
    id: null,
    numberIdentifier: null,
    lastName: null,
    firstName: null,
    secondLastName: null,
    birthdate: null,
    gender: GenderEnum.MALE,
  });

  const disableFormSearch = ref(false);

  return {
    person,
    disableFormSearch,
    setPerson(newPerson: PersonInterface) {
      person.value = newPerson;
    },
    setDisableFormSearch(disable: boolean) {
      disableFormSearch.value = disable;
    },
    clearPerson() {
      person.value = {
        id: null,
        numberIdentifier: null,
        lastName: null,
        firstName: null,
        secondLastName: null,
        birthdate: null,
        gender: GenderEnum.MALE,
      };
    },
  };
});
