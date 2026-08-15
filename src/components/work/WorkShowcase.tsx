'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Github, LockKeyhole } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';
import { projects } from '@/constants/work';
import WorkSlider from './WorkSlider';

const WorkShowcase = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const project = projects[activeProjectIndex];

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveProjectIndex(swiper.activeIndex);
  };

  return (
    <div className="mt-14 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
      <article
        className="order-2 lg:order-1 lg:sticky lg:top-28"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="text-primary">{project.num}</span>
          <span className="h-px w-8 bg-white/12" />
          {project.category}
        </div>
        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{project.title}</h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{project.description}</p>

        {project.role || project.period ? (
          <dl className="mt-6 grid gap-3 rounded-2xl border border-white/8 bg-white/3 p-4 sm:grid-cols-2">
            {project.role ? (
              <div>
                <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">Role</dt>
                <dd className="mt-1.5 text-sm font-medium">{project.role}</dd>
              </div>
            ) : null}
            {project.period ? (
              <div>
                <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">Period</dt>
                <dd className="mt-1.5 text-sm font-medium">{project.period}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {project.highlights ? (
          <ul className="mt-6 space-y-2.5 text-sm leading-6 text-muted-foreground">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <ul className="mt-7 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
          {project.stack.map((item) => (
            <li key={item.name} className="rounded-full border border-primary/15 bg-primary/6 px-3 py-1.5 text-xs text-primary">
              {item.name}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.live ? (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
            >
              {project.liveLabel ?? 'View live project'}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          ) : null}
          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/12 bg-white/4 px-5 text-sm font-semibold transition hover:border-primary/35 hover:text-primary"
            >
              <Github aria-hidden="true" className="size-4" />
              Source code
            </Link>
          ) : (
            <span className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 text-sm font-medium text-muted-foreground">
              <LockKeyhole aria-hidden="true" className="size-4" />
              Private company code
            </span>
          )}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          {String(activeProjectIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </p>
      </article>

      <div className="order-1 min-w-0 lg:order-2">
        <WorkSlider projects={projects} handleSlideChange={handleSlideChange} />
      </div>
    </div>
  );
};

export default WorkShowcase;
