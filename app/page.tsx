import CardsGrid from '@/components/CardsGrid/CardsGrid';
import Facts from '@/components/Facts/Facts';
import { Header } from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Facts />
        <CardsGrid />
      </main>
    </>
  );
}
