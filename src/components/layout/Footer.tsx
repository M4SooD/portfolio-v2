import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/6 py-10">
      <div className="container flex flex-col gap-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Masoud Mousavi. Built with care and TypeScript.</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link className="inline-flex min-h-11 items-center transition-colors hover:text-primary" href="mailto:masoud.mousavi.dev@gmail.com">
            Email
          </Link>
          <Link
            className="inline-flex min-h-11 items-center gap-1 transition-colors hover:text-primary"
            href="https://github.com/M4SooD"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Link>
          <Link
            className="inline-flex min-h-11 items-center gap-1 transition-colors hover:text-primary"
            href="https://www.linkedin.com/in/masood-moosavi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
