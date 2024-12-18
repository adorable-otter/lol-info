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

export type ItemResponse = {
  type: string;
  version: string;
  basic: {
    name: string;
    rune: {
      isrune: boolean;
      tier: number;
      type: string;
    };
    gold: {
      base: number;
      total: number;
      sell: number;
      purchasable: boolean;
    };
    group: string;
    description: string;
    colloq: string;
    plaintext: string;
    consumed: boolean;
    stacks: number;
    depth: number;
    consumeOnFull: boolean;
    from: unknown[];
    into: unknown[];
    specialRecipe: number;
    inStore: boolean;
    hideFromAll: boolean;
    requiredChampion: string;
    requiredAlly: string;
    stats: {
      [key: string]: number;
    };
    tags: unknown[];
    maps: {
      [key: string]: boolean;
    };
  };
  data: {
    [key: string]: Omit<Item, 'id'>;
  };
};
