import React from 'react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Item } from '@/types/Item';

type ItemCardProps = { item: Item };
const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Card className="w-2/5 md:w-1/4 lg:w-1/5 bg-inherit">
      <CardContent className="flex flex-col gap-2">
        <Image
          className="self-center mb-4 mt-7"
          src={`https://ddragon.leagueoflegends.com/cdn/${process.env.NEXT_PUBLIC_DATA_DRAGON_VURSION}/img/item/${item.id}.png`}
          width={150}
          height={150}
          alt={item.name}
        ></Image>
        <h2 className="text-2xl font-bold break-all">{item.name}</h2>
        <p className="text-gray-500 break-all">{item.plaintext}</p>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
