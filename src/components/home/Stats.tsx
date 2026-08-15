import { StatCard, type StatItem } from './StatCard';

const stats: StatItem[] = [
  { value: '4+', label: 'Years building production products' },
  { value: '30%', label: 'Faster initial load on key dashboards' },
  { value: '<5ms', label: 'Critical widget render time, down from ~50ms' },
  { value: '~50%', label: 'Fewer emergency rollbacks through testing' },
];

const Stats = () => {
  return (
    <section aria-label="Career highlights" className="pb-18 md:pb-24">
      <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.label} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
