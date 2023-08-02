import { Header } from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* отступ для fixed header */}
        <div className='mt-[72px]'></div>
        <Hero />
      </main>
    </>
    
  )
}
