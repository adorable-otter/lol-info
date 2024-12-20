import { fetchChampions } from '@/actions/champions';
import { NextResponse } from 'next/server';

export async function GET() {
  const [rotationIds, champions] = await Promise.all([fetchRotations(), fetchChampions()]);
  const rotationChampions = rotationIds.map((id) =>
    champions.find((champion) => Number(champion.key) === id)
  );
  return NextResponse.json({ rotationChampions });
}

const fetchRotations = async (): Promise<number[]> => {
  try {
    const response = await fetch(
      'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
      {
        headers: { 'X-Riot-Token': process.env.RIOT_API_KEY! },
      }
    );
    const data = await response.json();
    return data.freeChampionIds;
  } catch (err) {
    console.log(err);
    return [];
  }
};
