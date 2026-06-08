import type { PanelInterface } from '../panel/PanelInterface';

export interface ModalInterface extends Omit<PanelInterface, 'actionButton'> {
  show: boolean;
  size?: 'small' | 'medium' | 'full';
}
