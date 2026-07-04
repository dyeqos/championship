import type { Param } from 'src/modules/param/interfaces/ParamInterface';
import type { ChampionshipState } from '../enums/ChampionshipStateEnum';

export interface Championship {
  id: string;
  category: Param;
  dateEnd: string | null;
  dateInit: string;
  gender: number;
  management: number;
  name: Param;
  state: ChampionshipState;
  totalTeams: number;
  version: number;
  tags?: string[];
  progress: number;
}
