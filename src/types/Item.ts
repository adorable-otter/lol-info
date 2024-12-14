import { ContentImage } from './ChampionDetail';

export type Item = {
  id: string;
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: ContentImage;
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: {
    [key: string]: boolean;
  };
  stats: {
    FlatMovementSpeedMod: number;
  };
};
