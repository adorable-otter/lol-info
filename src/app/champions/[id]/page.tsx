import React, { Suspense } from 'react';
import ChampionDetailCard from './_components/ChampionDetailCard';
import { fetchChampionDetail } from '@/api/champions';
import { Metadata } from 'next';
import Loading from '@/app/loading';
import DetailCardSlow from './_components/DetailCardSlow';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: 'Champion ' + params.id,
    description: `introduces information about ${params.id}`,
  };
}

type ChampionDetailPageProps = { params: { id: string } };

const ChampionDetailPage = async ({ params }: ChampionDetailPageProps) => {
  const championDetail = await fetchChampionDetail(params.id);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ChampionDetailCard champion={championDetail} />
      </Suspense>

      {/* suspense 적용 테스트를 위한 코드 */}
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Async Server Component */}
        <DetailCardSlow id={params.id} />
      </Suspense>
    </div>
  );
};

export default ChampionDetailPage;
