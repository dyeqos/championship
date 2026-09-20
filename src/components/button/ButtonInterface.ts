export interface ButtonInterface {
  label?: string;
  icon?: string;
  color?: 'primary' | 'secondary';
  action?: () => void;
  disabled?: boolean;
  type?: 'submit';
  outline?: boolean;
  tooltip?: string;
}
