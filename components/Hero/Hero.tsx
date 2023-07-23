import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='px-4 py-8'>
      <div>
        <h1 className='text-[40px] font-boss mb-2 uppercase font-bold'>sereja<span className='text-stroke'>-art</span></h1>
        <div>
          <button type='button'>Начать работать</button>
          <p>frontend-разработчик, дизайнер, специалист по контекстной рекламе</p>
        </div>
      </div>
      <div className='mb-5'>
        <Image className='max-w-[140px] mb-2' src='' alt='' />
        <Link className='text-xs text-center' href='#'>Обо мне</Link>
      </div>
    </section>
  )
}

export default Hero;