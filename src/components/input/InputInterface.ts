export type InputModelValue = string | number | null;

export interface InputInterface {
  label?: string;
  modelValue?: InputModelValue;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}
