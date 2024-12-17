import { fetchChampions } from '@/api/champions';
import ChampionCard from '@/components/ChampionCard';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'LOL Champions',
  description: 'introduces information about all lol champions',
};

// ISR
const ChampionsPage = async () => {
  const champions = await fetchChampions();

  return (
    <div>
      <h1 className="text-4xl mt-14 mb-14 text-center">챔피언 목록</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {champions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default ChampionsPage;
