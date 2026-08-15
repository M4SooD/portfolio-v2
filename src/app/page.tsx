import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import { Expertise } from '@/components/home/Expertise';
import { FeaturedWork } from '@/components/home/FeaturedWork';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Expertise />
      <FeaturedWork />
    </>
  );
}
