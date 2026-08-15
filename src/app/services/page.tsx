import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Blocks, Gauge, LayoutTemplate, Workflow } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Expertise',
  description:
    'Front-end engineering expertise across React, Next.js, Angular, design systems, state architecture, and web performance.',
  alternates: { canonical: '/services' },
};

const services = [
  {
    number: '01',
    icon: LayoutTemplate,
    title: 'Product front-end development',
    description:
      'Production-grade React, Next.js, and Angular interfaces that translate complex requirements into clear, responsive product experiences.',
    outcomes: ['Responsive UI', 'Accessibility', 'SSR & App Router'],
  },
  {
    number: '02',
    icon: Workflow,
    title: 'Application architecture',
    description:
      'Maintainable feature boundaries, predictable state, and resilient REST, GraphQL, and WebSocket flows for data-intensive products.',
    outcomes: ['TypeScript', 'TanStack Query & Zustand', 'Real-time data'],
  },
  {
    number: '03',
    icon: Gauge,
    title: 'Performance & reliability',
    description:
      'Measured improvements to Core Web Vitals, rendering hot paths, bundle delivery, and automated coverage for dependable releases.',
    outcomes: ['~30% faster load', '<5ms critical renders', '~50% fewer rollbacks'],
  },
  {
    number: '04',
    icon: Blocks,
    title: 'Design systems',
    description:
      'Accessible, reusable component foundations and practical migration plans that modernize products without stopping feature delivery.',
    outcomes: ['Versioned UI libraries', 'Storybook', 'Legacy-to-React migration'],
  },
];

export default function ServicesPage() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="eyebrow">Expertise</p>
            <h1 className="page-title mt-4">I turn product complexity into maintainable interfaces.</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:ml-auto lg:text-lg">
            My work sits at the intersection of product thinking, UI architecture,
            and delivery. The goal is software that feels straightforward to users
            and stays straightforward for engineers.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group surface flex h-full flex-col rounded-3xl p-6 transition hover:-translate-y-1 hover:border-primary/20 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-xs font-medium tracking-[0.18em] text-muted-foreground">
                    {service.number}
                  </span>
                </div>
                <h2 className="mt-8 text-2xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-primary">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="rounded-full border border-border/80 bg-card/65 px-3 py-1.5 text-xs text-muted-foreground">
                      {outcome}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl border border-primary/15 bg-primary/6 p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-lg font-semibold">Have a product or engineering challenge?</p>
            <p className="mt-2 text-sm text-muted-foreground">Let&apos;s talk through the context and find the highest-leverage path forward.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
          >
            Start a conversation
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
