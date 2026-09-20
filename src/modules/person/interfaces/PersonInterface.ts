import type { GenderEnum } from '../enums/GenderEnum';

export interface PersonInterface {
  id: string | null;
  numberIdentifier: number | null;
  lastName: string | null;
  firstName: string | null;
  secondLastName: string | null;
  birthdate: string | null; // ISO date string (DD/MM/YYYY)
  gender: GenderEnum;
}
