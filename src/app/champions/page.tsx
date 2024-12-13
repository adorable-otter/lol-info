import ChampionCard from '@/components/ChampionCard';
import { fetchChampions } from '@/utils/fetchChampions';
import React from 'react';

// ISR
const ChampionsPage = async () => {
  const champions = await fetchChampions();

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {champions.map((champion) => (
        <ChampionCard key={champion.id} champion={champion} />
      ))}
    </div>
  );
};

export default ChampionsPage;
