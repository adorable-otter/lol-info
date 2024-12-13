import { Champion } from '@/types/Champion';

export const fetchRotationChampions = async (): Promise<Champion[]> => {
  const response = await fetch('/api/rotation');
  const data = await response.json();
  return data.rotationChampions;
};
