import { fetchItems } from '@/actions/items';
import ItemCard from '@/components/ItemCard';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'LOL Items',
  description: 'introduces information about all lol items',
};

const ItemsPage = async () => {
  const items = await fetchItems();

  return (
    <div>
      <h1 className="text-4xl mt-14 mb-14 text-center">아이템 목록</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {items.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
