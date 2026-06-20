import type { SelectOptionInterface } from './SelectOptionInterface';

export type SelectModelValue = string | number | Array<string | number>;

export interface SelectBaseInterface {
  options?: SelectOptionInterface[];
  label?: string;
  placeholder?: string;
  filterable?: boolean;
  showValue?: boolean;
  clearable?: boolean;
  outlined?: boolean;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

export interface SingleSelectInterface extends SelectBaseInterface {
  multiple?: false;
  modelValue?: string | number | null;
}

export interface MultipleSelectInterface extends SelectBaseInterface {
  multiple: true;
  modelValue?: Array<string | number> | null;
}

export type SelectInterface = SingleSelectInterface | MultipleSelectInterface;
