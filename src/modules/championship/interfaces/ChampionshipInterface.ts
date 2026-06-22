import type { Param } from 'src/modules/param/interfaces/ParamInterface';

export interface Championship {
  id: string;
  category: Param;
  dateEnd: string | null;
  dateInit: string;
  gender: number;
  management: number;
  name: Param;
  state: number;
  totalTeams: number;
  version: number;
  tags?: string[];
  progress: number;
}
