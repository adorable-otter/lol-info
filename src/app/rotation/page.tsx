'use client';

import { fetchRotationChampions } from '@/api/rotation';
import ChampionCard from '@/components/ChampionCard';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const RotationPage = () => {
  const {
    data: rotationChampions,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['rotationChampions'],
    queryFn: fetchRotationChampions,
  });

  if (isPending) return <div>loading...</div>;
  if (isError) return <div>error</div>;

  return (
    <div className="flex flex-col p-5">
      <h1 className="text-4xl text-center mt-20 mb-20">
        챔피언 로테이션 (이번 주 무료로 플레이 할 수 있어요!)
      </h1>
      <div className="flex flex-wrap justify-center gap-5">
        {rotationChampions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
};

export default RotationPage;
