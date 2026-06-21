import { isValidDate } from '../validations/DateValidation';

export const requiredRule = (value: unknown) => !!value || 'Campo obligatorio';

export const minLengthRule = (min: number) => (value: string) =>
  !value || value.length >= min || `Mínimo ${min} caracteres`;

export const maxLengthRule = (max: number) => (value: string) =>
  !value || value.length <= max || `Máximo ${max} caracteres`;

export const dateRule = (value: string) =>
  !value || isValidDate(value) || 'Fecha inválida, use DD/MM/YYYY';
