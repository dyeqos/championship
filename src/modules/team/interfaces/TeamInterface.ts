export interface TopScorer {
  name: string;
  goals: number;
}

export interface TeamInterface {
  id: string | number;
  name: string;
  crestUrl?: string | null;
  topScorer?: TopScorer | null;
  position?: number | null;
  founded?: number | null;
  stadium?: string | null;
  coach?: string | null;
  country?: string | null;
}
