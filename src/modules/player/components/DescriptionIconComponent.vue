<script setup lang="ts">
import { computed } from 'vue';

const GOALS = 'mdi-soccer';
const ASSISTS = 'mdi-handshake-outline';
const RED_CARDS = '/public/svg/red-cards.svg';
const YELLOW_CARDS = '/public/svg/yellow-cards.svg';
const HEIGHT = 'mdi-human-male-height';
const WEIGHT = 'mdi-weight-kilogram';

const props = defineProps<{
  label: string;
  value: string;
  type: 'goals' | 'assists' | 'red-cards' | 'yellow-cards' | 'height' | 'weight';
}>();
const isImage = computed(() => props.type === 'red-cards' || props.type === 'yellow-cards');
const svgPath = computed(() => {
  switch (props.type) {
    case 'goals':
      return GOALS;
    case 'assists':
      return ASSISTS;
    case 'red-cards':
      return RED_CARDS;
    case 'yellow-cards':
      return YELLOW_CARDS;
    case 'height':
      return HEIGHT;
    case 'weight':
      return WEIGHT;
    default:
      return '';
  }
});
</script>
<template>
  <div class="row">
    <div class="col-3 q-mt-sm flex flex-center">
      <q-img v-if="isImage" :src="svgPath" :alt="props.label" width="28px" class="" />
      <q-icon v-else :name="svgPath" size="28px" class="text-grey" />
    </div>
    <div class="col-9 q-pl-sm">
      <div class="text-caption">{{ props.label }}</div>
      <div style="margin-top: -7px" class="text-h6">{{ props.value }}</div>
    </div>
  </div>
</template>
