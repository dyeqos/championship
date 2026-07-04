import type { ChampionshipState } from '../enums/ChampionshipStateEnum';

export interface ChampionshipFilter {
  name?: string;

  management?: number[];

  category?: string;

  state?: ChampionshipState;
}
