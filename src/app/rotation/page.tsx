'use client';

import { fetchRotationChampions } from '@/api/rotation';
import ChampionCard from '@/components/ChampionCard';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../loading';

const RotationPage = () => {
  const {
    data: rotationChampions,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['rotationChampions'],
    queryFn: fetchRotationChampions,
    staleTime: 1000 * 60 * 5,
  });

  if (isPending) return <Loading />;
  // 에러가 발생할 경우 에러 페이지로 이동
  if (isError) throw Error();

  return (
    <div>
      <h1 className="text-4xl text-center mt-14 mb-14">
        챔피언 로테이션{' '}
        <span className="hidden lg:inline">(이번 주 무료로 플레이 할 수 있어요!)</span>
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
