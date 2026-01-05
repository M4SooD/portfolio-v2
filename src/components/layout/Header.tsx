import Link from 'next/link';
import { Button } from '../ui/Button';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-foreground">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            M4S <span className="text-primary">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="cursor-pointer">Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav Trigger */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
