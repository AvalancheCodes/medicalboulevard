import { useState } from "react";

const key = "recently-viewed-rooms-ids";
const useRecentlyViewedRoomsIds = () => {
  const [data, setData] = useState<string[]>(() => {
    const hasWindow = typeof window !== 'undefined'
    if (!hasWindow) return [];

    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  });

  const pushData = (roomId: string) => {
    setData(prevData => {
      const newSet = new Set([roomId, ...prevData]);
      const newData = Array.from(newSet).slice(0, 5);
      localStorage.setItem(key, JSON.stringify(newData));
      return newData;
    });
  };

  return {
    items: data,
    pushItem: pushData
  };
}

export default useRecentlyViewedRoomsIds;
