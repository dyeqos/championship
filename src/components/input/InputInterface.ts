export type InputModelValue = string | number | null;

export interface InputInterface {
  label?: string;
  modelValue?: InputModelValue;
  disabled?: boolean;
  isCurrency?: boolean;
  placeholder?: string;
}
