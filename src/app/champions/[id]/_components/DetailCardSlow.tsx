import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { slowDetail } from '@/actions/champions';

const DetailCardSlow = async ({ id }: { id: string }) => {
  // 시간 지연용 fetch 로직
  const champion = await slowDetail(id);

  if (!champion) return <div>error</div>;

  return (
    <div className="flex justify-center mt-20">
      <Card className="w-1/2 bg-inherit border-none">
        <CardTitle className="text-4xl mb-5">{champion.name}</CardTitle>
        <p className="text-gray-500 text-2xl">{champion.title}</p>
        <CardContent className="flex flex-col gap-5">
          <Image
            className="self-center mb-4 mt-7"
            src={`https://ddragon.leagueoflegends.com/cdn/${process.env.NEXT_PUBLIC_DATA_DRAGON_VURSION}/img/champion/${champion.image.full}`}
            width={250}
            height={250}
            alt={champion.name}
          />
          <p>{champion.lore}</p>
          <h2 className="font-bold text-xl">스탯</h2>
          <ul>
            <li>공격력: {champion.info.attack}</li>
            <li>방어력: {champion.info.defense}</li>
            <li>마법력: {champion.info.magic}</li>
            <li>난이도: {champion.info.difficulty}</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailCardSlow;
