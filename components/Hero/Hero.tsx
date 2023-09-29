import Image from 'next/image';
import Link from 'next/link';
import HeroAvatar from '../../images/hero-avatar.jpg';

const Hero = () => {
  return (
    <section className="container mb-6">
      <div className="flex flex-col-reverse lg:items-end text-whiteSecondary bg-darkSecondary lg:pt-20 lg:px-12 lg:pb-12 md:flex-row md:justify-between md:align-top gap-7 px-4 py-8 md:px-9 md:py-11 rounded-3xl bg-slate-400 bg-[url('/hero-bg.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="md:max-w-[285px] lg:max-w-none">
          <h1 className="text-[40px] md:text-[46px] lg:text-[110px] leading-none font-boss mb-3 md:mb-1 lg:mb-5 uppercase font-bold">
            sereja <span className="text-stroke">art-</span>
          </h1>
          <div className="lg:flex lg:flex-row-reverse lg:shrink-0 lg:items-center lg:gap-7">
            <p className="mb-5 lg:mb-0 lg:text-base">
              frontend-разработчик, веб-дизайнер, специалист по контекстной
              рекламе
            </p>
            <button
              type="button"
              className="flex items-center justify-between h-full gap-6 px-4 py-1 pr-1 border rounded-full lg:pr-1 lg:gap-5 lg:px-5 shrink-0 md:border-2 lg:text-xl"
            >
              <p className="lg:mb-[0.1em]">Начать работать</p>
              <svg
                className="w-auto h-[2em]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-slate-50"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.4049 9.45833L9.45911 12.4063C9.25547 12.6094 8.92578 12.6094 8.72265 12.4063C8.51901 12.2031 8.51901 11.8698 8.72265 11.6667L10.869 9.52083H5.35547C5.06745 9.52083 4.83464 9.28646 4.83464 9C4.83464 8.71354 5.06745 8.47916 5.35547 8.47916H10.869L8.72265 6.33333C8.51901 6.13021 8.51901 5.80206 8.72265 5.59373C8.92578 5.3906 9.25547 5.3906 9.45911 5.59373L12.4049 8.54166C12.5299 8.66666 12.569 8.83854 12.5404 9C12.569 9.16146 12.5299 9.33333 12.4049 9.45833ZM9.0013 0.666664C4.3987 0.666664 0.667969 4.39583 0.667969 9C0.667969 13.6042 4.3987 17.3333 9.0013 17.3333C13.6039 17.3333 17.3346 13.6042 17.3346 9C17.3346 4.39583 13.6039 0.666664 9.0013 0.666664Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-fit">
          <Image
            className="lg:max-w-[140px] md:max-w-[119px] mb-2 rounded-full"
            src={HeroAvatar}
            alt="аватарка"
          />
          <Link className="w-full text-xs btn lg:text-sm" href="/about">
            Обо мне
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
