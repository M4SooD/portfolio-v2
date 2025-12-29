import Link from 'next/link';
import { Button } from '../ui/Button';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-foreground">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            M4S <span className="text-primary">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <span className="text-primary">Menu...</span>
        </div>
      </div>
    </header>
  );
};
