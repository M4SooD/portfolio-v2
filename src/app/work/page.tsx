import type { Metadata } from 'next';
import { LockKeyhole } from 'lucide-react';
import WorkShowcase from '@/components/work/WorkShowcase';

export const metadata: Metadata = {
  title: 'Selected Work',
  description:
    'Selected professional and independent front-end work by Masoud Mousavi, including production fintech platforms, product interfaces, and modern web applications.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return (
    <section className="section-shell">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h1 className="page-title mt-4">Projects built with intent, not just technology.</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:ml-auto lg:text-lg">
            Production experience from fintech and digital-product teams, followed by
            independent interface explorations. Each case study focuses on measurable
            outcomes, maintainable implementation, and thoughtful interaction.
          </p>
        </div>

        <div className="mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-primary/15 bg-primary/6 px-4 py-3 text-sm leading-6 text-muted-foreground">
          <LockKeyhole aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
          <p>
            Professional projects are represented as case studies. Their repositories
            remain private under company confidentiality, while public company links are
            provided for context.
          </p>
        </div>

        <WorkShowcase />
      </div>
    </section>
  );
}
