import { fetchChampionDetail } from '@/utils/fetchChampions';
import React from 'react';
import ChampionDetailCard from './_components/ChampionDetailCard';

type ChampionDetailPageProps = { params: { id: string } };

const ChampionDetailPage = async ({ params }: ChampionDetailPageProps) => {
  const championDetail = await fetchChampionDetail(params.id);

  if (!championDetail) return <div>error</div>;

  return (
    <div>
      <ChampionDetailCard champion={championDetail} />{' '}
    </div>
  );
};

export default ChampionDetailPage;
