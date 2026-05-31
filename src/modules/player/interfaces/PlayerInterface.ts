export interface PlayerStats {
  goals?: number;
  yellowCards?: number;
  redCards?: number;
  assists?: number;
  mvp?: number;
  matches?: number;
}

export interface PlayerInterface {
  id: string | number;
  name: string;
  photoUrl?: string | null;
  number?: number | null;
  position?: string | null;
  heightCm?: number | null;
  weightKg?: number | null;
  teamId?: string | number | null;
  tournament?: string | null;
  stats?: PlayerStats | null;
}
