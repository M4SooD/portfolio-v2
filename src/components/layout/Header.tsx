import Link from 'next/link';
import { Button } from '../ui/Button';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-foreground">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-4xl font-semibold">
            M4S <span className="text-primary">.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button
              asChild
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-[#1c1c22] transition-all duration-500 cursor-pointer"
            >
              Hire me
            </Button>
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
