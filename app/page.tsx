import CardsGrid from '@/components/CardsGrid/CardsGrid';
import Facts from '@/components/Facts/Facts';
import Hero from '@/components/Hero/Hero';

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
