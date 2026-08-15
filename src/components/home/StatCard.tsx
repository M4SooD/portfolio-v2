export interface StatItem {
  value: string;
  label: string;
}

interface StatCardProps {
  item: StatItem;
}

export const StatCard = ({ item }: StatCardProps) => {
  return (
    <div className="surface rounded-2xl p-5 transition hover:-translate-y-1 hover:border-primary/20">
      <p className="text-3xl font-semibold tracking-[-0.05em] text-primary sm:text-4xl">
        {item.value}
      </p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.label}</p>
    </div>
  );
};
