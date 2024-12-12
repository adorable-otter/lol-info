"use server"

import { Champion } from '@/types/Champion';

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
