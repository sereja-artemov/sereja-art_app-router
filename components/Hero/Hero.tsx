import Image from 'next/image';
import Link from 'next/link';
import HeroAvatar from '../../images/hero-avatar.jpg';

const Hero = () => {
  return (
    <section className="container mb-6">
      <div className="flex flex-col-reverse lg:items-end lg:pt-20 lg:px-12 lg:pb-12 md:flex-row md:justify-between md:align-top gap-7 px-4 py-8 md:px-9 md:py-11 rounded-3xl bg-slate-400 bg-[url('/hero-bg.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="md:max-w-[285px] lg:max-w-none">
          <h1 className="text-[40px] md:text-[46px] lg:text-[110px] leading-none font-boss mb-3 md:mb-1 lg:mb-5 uppercase font-bold">
            sereja <span className="text-stroke">art-</span>
          </h1>
          <div className="lg:flex lg:flex-row-reverse lg:shrink-0 lg:items-center lg:gap-7">
            <p className="mb-5 lg:mb-0 lg:text-base">
              frontend-разработчик, дизайнер, специалист по контекстной рекламе
            </p>
            <div className="flex items-center justify-between gap-5 px-4 py-1 pr-1 border rounded-full shrink-0 md:border-2 lg:text-xl lg:w-[350px]">
              <button type="button">Начать работать</button>
              <svg
                className="w-[22px] lg:w-[27px] h-auto"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-orange-300"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4035 9.45829L9.45765 12.4062C9.254 12.6094 8.92431 12.6094 8.72119 12.4062C8.51754 12.2031 8.51754 11.8697 8.72119 11.6666L10.8675 9.52079H5.354C5.06598 9.52079 4.83317 9.28642 4.83317 8.99996C4.83317 8.7135 5.06598 8.47913 5.354 8.47913H10.8675L8.72119 6.33329C8.51754 6.13017 8.51754 5.80202 8.72119 5.59369C8.92431 5.39056 9.254 5.39056 9.45765 5.59369L12.4035 8.54162C12.5285 8.66662 12.5676 8.8385 12.5389 8.99996C12.5676 9.16142 12.5285 9.33329 12.4035 9.45829ZM8.99984 0.666626C4.39723 0.666626 0.666504 4.39579 0.666504 8.99996C0.666504 13.6041 4.39723 17.3333 8.99984 17.3333C13.6024 17.3333 17.3332 13.6041 17.3332 8.99996C17.3332 4.39579 13.6024 0.666626 8.99984 0.666626Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.000166667"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-fit">
          <Image
            className="lg:max-w-[140px] md:max-w-[119px] mb-2 rounded-full"
            src={HeroAvatar}
            alt="аватарка"
          />
          <Link
            className="inline-block w-full px-4 py-1 text-xs text-center align-middle border rounded-full"
            href="#"
          >
            Обо мне
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
