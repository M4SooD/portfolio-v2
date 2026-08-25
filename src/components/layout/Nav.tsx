'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'Expertise', path: '/services' },
  { name: 'Experience', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="flex items-center gap-6">
      {navigationLinks.map((link) => {
        const isActive = link.path === pathname;

        return (
          <Link
            href={link.path}
            prefetch={link.path === '/work' ? false : undefined}
            key={link.path}
            aria-current={isActive ? 'page' : undefined}
            className={`relative py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-primary after:transition-transform ${
              isActive
                ? 'text-primary after:scale-x-100'
                : 'text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
