'use server';

import { Champion } from '@/types/Champion';
import { ChampionDetail } from '@/types/ChampionDetail';

export const fetchChampions = async (): Promise<Champion[]> => {
  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${process.env.NEXT_PUBLIC_DATA_DRAGON_VURSION}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 60 * 60 * 24,
        },
      }
    );
    if (!response.ok) throw new Error('');
    const data = await response.json();
    return Object.values(data.data);
  } catch (error) {
    console.log((error as Error).message);
    return [];
  }
};

export const fetchChampionDetail = async (id: Champion['id']): Promise<ChampionDetail> => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${process.env.NEXT_PUBLIC_DATA_DRAGON_VURSION}/data/ko_KR/champion/${id}.json`,
    { cache: 'no-store' }
  );
  if (!response.ok) throw new Error('');
  const data = await response.json();
  return data.data[id];
};

export const slowDetail = async (id: Champion['id']): Promise<ChampionDetail> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${process.env.NEXT_PUBLIC_DATA_DRAGON_VURSION}/data/ko_KR/champion/${id}.json`,
    { cache: 'no-store' }
  );
  if (!response.ok) throw new Error('');
  const data = await response.json();
  return data.data[id];
};
