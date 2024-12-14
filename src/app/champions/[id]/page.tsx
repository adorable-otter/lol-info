import React from 'react';
import ChampionDetailCard from './_components/ChampionDetailCard';
import { fetchChampionDetail } from '@/api/champions';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: 'Champion ' + params.id,
    description: `introduces information about ${params.id}`,
  };
}

type ChampionDetailPageProps = { params: { id: string } };

const ChampionDetailPage = async ({ params }: ChampionDetailPageProps) => {
  const championDetail = await fetchChampionDetail(params.id);

  if (!championDetail) return <div>error</div>;

  return (
    <div>
      <ChampionDetailCard champion={championDetail} />
    </div>
  );
};

export default ChampionDetailPage;
