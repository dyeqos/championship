<script setup lang="ts">
import { SexEnum } from '../enums/SexEnum';
import { personStore } from '../store/PersonStore';

const store = personStore();
</script>
<template>
  <div class="row">
    <dc-input
      class="col-xs-12 col-sm-6"
      v-model="store.person.numberIdentifier"
      label="Cédula Identidad"
      type="number"
    ></dc-input>
    <dc-input
      class="col-xs-12 col-sm-6"
      v-model="store.person.lastName"
      label="Apellido Paterno"
    ></dc-input>
    <dc-input
      class="col-xs-12 col-sm-6"
      v-model="store.person.secondLastName"
      label="Apellido Materno"
    ></dc-input>
    <dc-input
      class="col-xs-12 col-sm-6"
      v-model="store.person.firstName"
      label="Nombre(s)"
    ></dc-input>
    <dc-date
      class="col-xs-12 col-sm-6"
      v-model="store.person.birthDate"
      label="Fecha de Nacimiento"
    ></dc-date>
    <dc-select
      class="col-xs-12 col-sm-6"
      v-model="store.person.sex"
      label="Género"
      :options="[
        { value: SexEnum.MALE, description: 'Masculino' },
        { value: SexEnum.FEMALE, description: 'Femenino' },
      ]"
    ></dc-select>
  </div>
</template>
