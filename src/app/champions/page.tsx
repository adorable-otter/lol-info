import { fetchChampions } from '@/api/champions';
import ChampionCard from '@/components/ChampionCard';
import React from 'react';

// ISR
const ChampionsPage = async () => {
  const champions = await fetchChampions();

  return (
    <div className='p-5'>
      <h1 className="text-4xl mt-20 mb-20 text-center">챔피언 목록</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {champions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default ChampionsPage;
