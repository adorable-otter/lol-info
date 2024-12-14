import ItemCard from '@/components/ItemCard';
import { Item } from '@/types/Item';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'LOL Items',
  description: 'introduces information about all lol items',
};

const ItemsPage = async () => {
  const fetchItems = async (): Promise<Item[]> => {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${process.env.NEXT_PUBLIC_DATA_DRAGON_VURSION}/data/ko_KR/item.json`
    );
    const data: { data: { [key: string]: Item } } = await response.json();
    return Object.entries(data.data).map(([id, item]) => ({ ...item, id }));
  };

  const items = await fetchItems();

  return (
    <div className="p-5">
      <h1 className="text-4xl mt-20 mb-20 text-center">아이템 목록</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {items.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
