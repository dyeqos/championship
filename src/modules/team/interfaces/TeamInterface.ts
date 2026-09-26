import type { Championship } from 'src/modules/championship/interfaces/ChampionshipInterface';
import type { TeamState } from '../enums/TeamStateEnum';
import type { PersonInterface } from 'src/modules/person/interfaces/PersonInterface';
import type { Param } from 'src/modules/param/interfaces/ParamInterface';

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

export interface TeamResponse {
  id: string;
  name: string;
  teamUser: PersonInterface;
  championship: Championship;
  color: Param | null;
  state: number;
}
