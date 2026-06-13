import type { PersonInterface } from './PersonInterface';

export interface CoachInterface extends PersonInterface {
  teamIds: Array<string>;
}
