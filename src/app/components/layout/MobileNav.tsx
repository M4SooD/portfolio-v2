'use client';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/Sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';
import { useState } from 'react';

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justfiy-center items-center">
        <CiMenuFries className="text-[32px] text-primary" />
      </SheetTrigger>

      <SheetContent className="flex flex-col border-none bg-background">
        <SheetTitle className="hidden">Mobile Navigation Menu</SheetTitle>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              M4S <span className="text-primary">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={() => setIsOpen(false)}
                className={`${
                  link.path === pathname &&
                  'text-primary border-b-2 border-primary'
                } text-xl capitalize hover:text-primary transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
