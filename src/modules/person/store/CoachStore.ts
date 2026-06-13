import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { CoachInterface } from '../interfaces/CoachInterface';

export const useCoachStore = defineStore('coach', () => {
  const coaches = ref<CoachInterface[]>([]);
  const coach = ref<CoachInterface | null>(null);

  function addCoach(c: CoachInterface) {
    coaches.value.push(c);
  }

  function removeCoachById(id: string | number) {
    coaches.value = coaches.value.filter((c) => c.id !== id);
    if (coach.value?.id === id) coach.value = null;
  }

  function getCoachById(id: string | number) {
    return coaches.value.find((c) => c.id === id) ?? null;
  }

  function updateCoach(updated: CoachInterface) {
    const idx = coaches.value.findIndex((c) => c.id === updated.id);
    if (idx !== -1) coaches.value.splice(idx, 1, updated);
    if (coach.value?.id === updated.id) coach.value = updated;
  }

  function setCurrentCoach(c: CoachInterface | null) {
    coach.value = c;
  }

  function seedSample() {
    coaches.value = [
      {
        id: 'c-1',
        fullName: 'Juan Pérez',
        birthDate: '1980-03-15',
        sex: 'M',
        teamIds: ['t-1'],
      },
    ];
  }

  return {
    coaches,
    coach,
    addCoach,
    removeCoachById,
    getCoachById,
    updateCoach,
    setCurrentCoach,
    seedSample,
  };
});
