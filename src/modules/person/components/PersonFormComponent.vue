<script setup lang="ts">
import { personStore } from '../store/PersonStore';
import usePerson from '../composables/usePerson';
import { hideLoading, showLoading } from 'src/platform/tools/utils/LoadingUtil';
import { GenderEnum } from '../enums/GenderEnum';

const { searchPerson } = usePerson();

const onBlur = async () => {
  showLoading();
  await searchPerson();
  hideLoading();
};

const store = personStore();
</script>
<template>
  <div class="row">
    <dc-input
      class="col-xs-12 col-sm-6"
      v-model="store.person.numberIdentifier"
      label="Cédula Identidad"
      type="number"
      :disabled="store.disableFormSearch"
      @blur="onBlur"
    ></dc-input>
    <dc-input
      class="col-xs-12 col-sm-6"
      v-model="store.person.lastName"
      :disabled="store.disableFormSearch"
      label="Apellido Paterno"
    ></dc-input>
    <dc-input
      class="col-xs-12 col-sm-6"
      v-model="store.person.secondLastName"
      :disabled="store.disableFormSearch"
      label="Apellido Materno"
    ></dc-input>
    <dc-input
      class="col-xs-12 col-sm-6"
      v-model="store.person.firstName"
      :disabled="store.disableFormSearch"
      label="Nombre(s)"
    ></dc-input>
    <dc-date
      class="col-xs-12 col-sm-6"
      v-model="store.person.birthdate"
      label="Fecha de Nacimiento"
      :disabled="store.disableFormSearch"
    ></dc-date>
    <dc-select
      class="col-xs-12 col-sm-6"
      v-model="store.person.gender"
      label="Género"
      :disabled="store.disableFormSearch"
      :options="[
        { value: GenderEnum.MALE, description: 'Masculino' },
        { value: GenderEnum.FEMALE, description: 'Femenino' },
      ]"
    ></dc-select>
  </div>
</template>
