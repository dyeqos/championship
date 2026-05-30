export interface ButtonInterface {
  label?: string;
  icon?: string;
  color?: 'primary' | 'secondary';
  action?: () => void;
  disable?: boolean;
  type?: 'submit';
  outline?: boolean;
}
