import Image from 'next/image';
import Link from 'next/link';
import HeroAvatar from '../../images/hero-avatar.jpg';

const Hero = () => {
  return (
    <section className='container mb-6'>
      <div className="flex flex-col-reverse gap-7 px-4 py-8 rounded-3xl bg-slate-400 bg-[url('/hero-bg.jpg')] bg-no-repeat bg-cover bg-center">
        <div>
            <h1 className='text-[40px] font-boss mb-3 uppercase font-bold'>sereja<span className='text-stroke'>-art</span></h1>
            <div>
              <p className='mb-5'>frontend-разработчик, дизайнер, специалист по контекстной рекламе</p>
              <div className='flex items-center justify-between gap-5 px-4 py-1 pr-1 border rounded-full'>
                <button type='button'>Начать работать</button>
                <svg className='w-[22px] lg:w-[27px] h-auto fill-blue-500' width="20px" height="20px" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064"></g><g id="SVGRepo_iconCarrier"> <title>arrow-right-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.00032" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-310.000000, -1089.000000)" fill="#000000"> <path d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z" id="arrow-right-circle"> </path> </g> </g> </g></svg>
              </div>
            </div>
          </div>
          <div className='w-fit'>
            <Image className='max-w-[140px] mb-2 rounded-full' src={HeroAvatar} alt='аватарка' />
            <Link className='inline-block w-full px-4 py-1 text-xs text-center align-middle border rounded-full' href='#'>Обо мне</Link>
          </div>
      </div>

    </section>
  )
}

export default Hero;