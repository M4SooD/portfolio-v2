import Link from 'next/link';
import { ArrowRight, Download, MapPin, Sparkles } from 'lucide-react';
import Photo from './Photo';
import Socials from './Socials';

const strengths = [
  'React 19 & Next.js',
  'TypeScript',
  'Real-time systems',
  'Web performance',
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 sm:pt-18 lg:pb-20 lg:pt-22">
      <div className="container grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-3.5 py-2 text-xs font-medium text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to senior front-end opportunities
          </div>

          <p className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Sparkles aria-hidden="true" className="size-4 text-primary" />
            Senior Front-End Engineer
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.06em] text-balance sm:text-6xl xl:text-[4.5rem]">
            I build fast, scalable interfaces that make{' '}
            <span className="bg-linear-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
              complex products feel simple.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            I&apos;m Masoud Mousavi, a Senior Front-End Engineer building real-time
            fintech and SaaS products—from scalable architecture to accessible,
            production-ready interfaces.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/work"
              prefetch={false}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(82,242,173,0.2)]"
            >
              View selected work
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <a
              href="/assets/Masoud_Mousavi_FrontEnd_Engineer.pdf"
              download="Masoud_Mousavi_FrontEnd_Engineer.pdf"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-border bg-card/65 px-6 text-sm font-semibold shadow-sm transition hover:border-primary/40 hover:bg-primary/8 hover:text-primary"
            >
              Download résumé
              <Download aria-hidden="true" className="size-4" />
            </a>
          </div>

          <div className="mt-9 flex flex-col gap-6 border-t border-border/80 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin aria-hidden="true" className="size-4 text-primary" />
              Tehran, Iran · Available remotely
            </div>
            <Socials
              containerStyles="flex items-center gap-2"
              iconStyles="grid size-10 place-items-center rounded-full border border-border bg-card/65 text-muted-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-primary/35 hover:text-primary"
            />
          </div>
        </div>

        <div>
          <Photo />
        </div>
      </div>

      <div className="container mt-14 lg:mt-8">
        <div className="surface flex flex-wrap items-center gap-x-7 gap-y-3 rounded-2xl px-5 py-4 text-xs text-muted-foreground sm:px-6">
          <span className="font-semibold uppercase tracking-[0.16em] text-foreground">
            Core stack
          </span>
          {strengths.map((strength) => (
            <span key={strength} className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-primary" />
              {strength}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
