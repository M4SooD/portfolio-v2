'use client';

import { useCountUp } from '@/hooks/useCountUp';

export interface StatItem {
  num: number;
  text: string;
  suffix?: string;
}

interface StatCardProps {
  item: StatItem;
}

export const StatCard = ({ item }: StatCardProps) => {
  const count = useCountUp(item.num, 5000, 2000);

  return (
    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
      <div className="text-4xl xl:text-6xl font-extrabold flex">
        <span>{count}</span>
        {item.suffix && <span>{item.suffix}</span>}
      </div>

      <p
        className={`${
          item.text.length < 15 ? 'max-w-25' : 'max-w-37.5'
        } leading-snug text-white/80`}
      >
        {item.text}
      </p>
    </div>
  );
};
