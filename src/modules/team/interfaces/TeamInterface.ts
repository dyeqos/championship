import type { TeamState } from '../enums/TeamStateEnum';

export interface TopScorer {
  name: string;
  goals: number;
}

export interface TeamInterface {
  id: string | null;
  name: string | null;
  teamUser: string | null;
  championship: string | null;
  state: TeamState | null;
  color: string | null;
}
