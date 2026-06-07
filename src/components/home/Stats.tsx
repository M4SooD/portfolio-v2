'use client';

import { StatCard, type StatItem } from './StatCard';

const stats: StatItem[] = [
  {
    num: 4,
    text: 'Years of experience',
    suffix: '+',
  },
  {
    num: 19,
    text: 'Projects completed',
  },
  {
    num: 15,
    text: 'Technologies mastered',
  },
  {
    num: 2000,
    text: 'Code commits',
    suffix: '+',
  },
];

const Stats = () => {
  return (
    <>
      <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item, index) => (
              // 3. Render the imported component
              <StatCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
