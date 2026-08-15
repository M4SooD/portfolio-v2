import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="section-shell">
      <div className="container grid min-h-[55vh] place-items-center text-center">
        <div>
          <p className="eyebrow">404 · Page not found</p>
          <h1 className="page-title mt-4">This route took a wrong turn.</h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            The page may have moved, or the link might be outdated.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
