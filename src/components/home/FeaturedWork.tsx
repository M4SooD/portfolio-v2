import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, LockKeyhole } from 'lucide-react';
import { projects } from '@/constants/work';

export const FeaturedWork = () => {
  const featuredProjects = [projects[0], projects[2], projects[4]];

  return (
    <section className="section-shell">
      <div className="container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-balance sm:text-4xl">
              Projects where craft meets engineering.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all projects
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => {
            const href = project.live ?? project.github ?? '/work';
            const isExternal = href.startsWith('http');

            return (
              <article key={project.num} className="group surface overflow-hidden rounded-3xl">
                <Link
                  href={href}
                  aria-label={`View ${project.title}${isExternal ? ' in a new tab' : ''}`}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(min-width: 1280px) 385px, (min-width: 1024px) 31vw, calc(100vw - 40px)"
                        className={`${
                          project.imageFit === 'contain'
                            ? 'object-contain p-10'
                            : 'object-cover'
                        } transition duration-500 group-hover:scale-[1.03]`}
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center bg-linear-to-br from-primary/12 via-[#111923] to-[#0b0f15] p-6 text-center text-white">
                        <div>
                          <p className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-primary">
                            {project.kind === 'professional'
                              ? 'Professional work'
                              : 'Open-source proof'}
                          </p>
                          <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                            {project.title}
                          </p>
                          {project.role ? (
                            <p className="mt-2 text-xs text-white/65">
                              {project.role}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    )}
                    <div className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">
                        {project.num}
                      </span>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                      {project.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.stack.slice(0, 3).map((item) => (
                        <li key={item.name} className="text-xs text-primary">
                          {item.name}
                        </li>
                      ))}
                    </ul>
                    {project.kind === 'professional' ? (
                      <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                        <LockKeyhole aria-hidden="true" className="size-3.5" />
                        Private company code
                      </p>
                    ) : null}
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
