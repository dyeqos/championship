import type { ButtonInterface } from '../button/ButtonInterface';

export interface PanelInterface {
  title: string;
  caption?: string;
  actionButton?: ButtonInterface;
  actions?: ButtonInterface[];
}
