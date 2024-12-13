export type ChampionDetail = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: ChampionImage;
  skins: ChampionSkin[];
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: {
    [key: string]: number;
  };
  stats: {
    [key: string]: number;
  };
  spells: ChampionSpell[];
  passive: {
    name: string;
    description: string;
    image: ChampionImage;
  };
  recommended: [];
};

type ChampionSkin = {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
};

type ChampionSpell = {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string[];
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: object;
  effect: Array<null | number[]>;
  effectBurn: Array<null | string>;
  vars: [];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: ChampionImage;
  resource: string;
};

type ChampionImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};
