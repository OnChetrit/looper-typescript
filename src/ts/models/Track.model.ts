export interface Track {
  id: number;
  title: string;
  path: string[];
  currPlay: number;
  isActive: boolean;
  isMute: boolean;
  volume: number;
  color: string;
}
