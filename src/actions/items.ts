import { Item, ItemResponse } from "@/types/Item";

export const fetchItems = async (): Promise<Item[]> => {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${process.env.NEXT_PUBLIC_DATA_DRAGON_VURSION}/data/ko_KR/item.json`
  );
  if (!response.ok) throw new Error('네트워크 오류가 발생했습니다.');
  const data:ItemResponse = await response.json();
  return Object.entries(data.data).map(([id, item]) => ({ ...item, id }));
};