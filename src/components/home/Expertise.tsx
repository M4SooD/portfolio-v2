import Link from 'next/link';
import { ArrowUpRight, Blocks, Gauge, RadioTower } from 'lucide-react';

const expertise = [
  {
    icon: RadioTower,
    title: 'Real-time product interfaces',
    description:
      'Responsive dashboards and financial workflows built for live, high-volume data without sacrificing clarity.',
    skills: ['WebSockets', 'TanStack Query', 'Zustand'],
  },
  {
    icon: Blocks,
    title: 'Architecture & UI systems',
    description:
      'Typed component libraries, predictable state, and migration strategies that help teams move faster.',
    skills: ['TypeScript', 'Design systems', 'React migrations'],
  },
  {
    icon: Gauge,
    title: 'Performance & quality',
    description:
      'Measured performance work and pragmatic automated testing that make releases faster and safer.',
    skills: ['Core Web Vitals', 'Cypress', 'CI/CD'],
  },
];

export const Expertise = () => {
  return (
    <section className="section-shell border-y border-white/6 bg-black/15">
      <div className="container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">What I bring</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-balance sm:text-4xl">
              Senior execution without losing sight of the user.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Explore my expertise
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="surface flex h-full flex-col rounded-3xl p-6 sm:p-7"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                <ul
                  className="mt-auto flex flex-wrap gap-2 pt-6"
                  aria-label={`${item.title} technologies`}
                >
                  {item.skills.map((skill) => (
                    <li key={skill} className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 text-xs text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
