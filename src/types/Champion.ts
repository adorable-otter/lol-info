export type Champion = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    [key: string]: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
  partype: string;
  stats: {
    [key: string]: number;
  };
};

export type ChampionsResponse = {
  type: string;
  format: string;
  version: string;
  data: {
    [key:string]: Champion;
  };
};
