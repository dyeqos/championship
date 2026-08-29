import type { SexEnum } from '../enums/SexEnum';

export interface PersonInterface {
  id: string | null;
  numberIdentifier: number | null;
  lastName: string | null;
  firstName: string | null;
  secondLastName: string | null;
  birthDate: string | null; // ISO date string (DD/MM/YYYY)
  sex: SexEnum;
}
