export interface ChampionshipInterface {
  id: string | number;
  title: string;
  caption?: string;
  isActive: boolean;
  progress: number;
  startDate: string;
  endDate?: string;
  totalTeams: number;
  tags?: string[];
}
