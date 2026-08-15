'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '../ui/Sheet';
import { navigationLinks } from './Nav';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        aria-label="Open navigation menu"
        className="grid size-11 cursor-pointer place-items-center rounded-xl border border-white/10 bg-white/5 text-primary"
      >
        <Menu aria-hidden="true" className="size-5" />
      </SheetTrigger>

      <SheetContent className="flex flex-col border-l border-white/10 bg-[#0d1016]/98 p-8">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate to the main sections of Masoud Mousavi&apos;s portfolio.
        </SheetDescription>
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="mt-2 text-2xl font-semibold tracking-tight"
        >
          Masoud<span className="text-primary">.</span>
        </Link>

        <nav aria-label="Mobile navigation" className="mt-16 flex flex-col gap-2">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                href={link.path}
                key={link.path}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-4 text-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <p className="mt-auto border-t border-white/8 pt-6 text-sm text-muted-foreground">
          Senior Front-End Engineer
          <br />
          Tehran, Iran · Open to remote roles
        </p>
      </SheetContent>
    </Sheet>
  );
};
