import { defineStore } from 'pinia';
import { ref } from 'vue';
import { SexEnum } from '../enums/SexEnum';
import type { PersonInterface } from '../interfaces/PersonInterface';

export const personStore = defineStore('personStore', () => {
  const person = ref<PersonInterface>({
    id: null,
    numberIdentifier: null,
    lastName: null,
    firstName: null,
    secondLastName: null,
    birthDate: null,
    sex: SexEnum.MALE,
  });

  return {
    person,
  };
});
