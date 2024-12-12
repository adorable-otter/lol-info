import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Champion } from '@/types/Champion';
import Image from 'next/image';

type ChampionCardProps = { champion: Champion };
const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <Card className="w-[250px] bg-inherit">
      <CardContent className="flex flex-col gap-2">
        <Image
          className="self-center mb-4 mt-7"
          src={`https://ddragon.leagueoflegends.com/cdn/${process.env.NEXT_PUBLIC_DATA_DRAGON_VURSION}/img/champion/${champion.image.full}`}
          width={150}
          height={150}
          alt={champion.name}
        ></Image>
        <h2 className="text-2xl font-bold text-red-700">{champion.name}</h2>
        <p className='text-white'>{champion.title}</p>
      </CardContent>
    </Card>
  );
};

export default ChampionCard;
