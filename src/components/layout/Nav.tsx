'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'home', path: '/' },
  { name: 'services', path: '/services' },
  { name: 'resume', path: '/resume' },
  // { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.path}
            className={`${
              link.path === pathname
                ? 'text-primary border-b-2 border-primary'
                : 'text-foreground hover:text-primary'
            } capitalize font-medium transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
