<script setup lang="ts">
import { computed } from 'vue';
import { dateRule, requiredRule } from 'src/platform/tools/utils/RulesUtil';
import type { DateInterface } from './DateInterface';

const props = withDefaults(defineProps<DateInterface>(), {
  modelValue: null,
  label: '',
  min: null,
  max: null,
  name: '',
  disable: false,
});

const myLocale = {
  /* starting with Sunday */
  days: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
  daysShort: 'Dom_Lun_Mar_Mié_Jue_Vie_Sáb'.split('_'),
  months:
    'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
      '_',
    ),
  monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
  firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
  format24h: true,
  pluralDay: 'días',
};

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | null): void;
}>();
const pickerValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});

const rules = computed(() => {
  const result = [];
  result.push(dateRule);
  if (props.required) {
    result.push(requiredRule);
  }

  return result;
});
</script>

<template>
  <q-input
    dense
    filled
    clearable
    class="q-pa-xs q-mb-sm"
    v-model="pickerValue"
    :label="props.label"
    :placeholder="props.placeholder"
    :disable="props.disable"
    :name="props.name"
    :rules="rules"
    :mask="'NN/NN/NNNN'"
    @clear="() => emit('update:modelValue', null)"
  >
    <template #append>
      <q-icon name="mdi-calendar" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date
            v-model="pickerValue"
            :min="props.min"
            :max="props.max"
            today-btn
            mask="DD/MM/YYYY"
            :locale="myLocale"
          >
            <div class="row items-center justify-end q-pa-sm">
              <q-btn v-close-popup label="Cerrar" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
