import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from '../theme/ThemeToggle';

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <span className="grid size-10 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            MM
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            Masoud Mousavi
          </span>
        </Link>

        <div className="flex items-center gap-2 lg:gap-5">
          <div className="hidden items-center gap-7 lg:flex">
            <Nav />
          </div>
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90 lg:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};
