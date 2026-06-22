import { date } from 'quasar';
export const isValidDate = (value: string): boolean => {
  return date.isValid(value);
};
