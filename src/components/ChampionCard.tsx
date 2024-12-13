import React from 'react';
import { Card, CardContent} from './ui/card';
import { Champion } from '@/types/Champion';
import Image from 'next/image';
import Link from 'next/link';

type ChampionCardProps = { champion: Champion };
const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <Link href={`/champions/${champion.id}`}>
      <Card className="w-[250px] bg-inherit">
        <CardContent className="flex flex-col gap-2">
          <Image
            className="self-center mb-4 mt-7"
            src={`https://ddragon.leagueoflegends.com/cdn/${process.env.NEXT_PUBLIC_DATA_DRAGON_VURSION}/img/champion/${champion.image.full}`}
            width={150}
            height={150}
            alt={champion.name}
          ></Image>
          <h2 className="text-2xl font-bold">{champion.name}</h2>
          <p className="text-gray-500">{champion.title}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ChampionCard;
