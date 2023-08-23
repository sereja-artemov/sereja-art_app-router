'use client';

import { useKeenSlider } from 'keen-slider/react';
import prommaticImage from '@/images/projects/prommatic.webp';
import Image from 'next/image';
import { useState } from 'react';
import useWindowSize from '@/app/hooks/useWindowSize';
import Link from 'next/link';

// const SliderItem = ({ children }: any) => {
//   return <div className="w-full h-auto keen-slider__slide">{children}</div>;
// };

const ProjectsBlock = () => {
  const windowSize = useWindowSize();
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slideChanged() {
        console.log('slide changed');
      },
      slides: {
        perView: 1,
        spacing: 40,
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    // <div ref={sliderRef} className="flex keen-slider">
    //   <SliderItem>1</SliderItem>
    //   <SliderItem>2</SliderItem>
    //   <SliderItem>3</SliderItem>
    // </div>

    <>
      {/* слайд */}
      <div className="relative mb-3">
        <Image
          className="w-full h-auto rounded-2xl mb-2"
          src="https://sereja-art.ru/_next/image?url=http%3A%2F%2Ftech.sereja-art.ru%2Fupload%2Fprojects%2Fprommatic_1024.webp&w=1920&q=75"
          alt="проект сайт промматик"
          sizes="100vw"
          width={1200}
          height={675}
        ></Image>

        {/* попап с информацией о проекте */}
        <div className='max-h-[95%] overflow-auto xl:py-6 py-5 backdrop-blur-md min-[1280px]:absolute min-[1280px]:bottom-0 min-[1280px]:left-1/2 min-[1280px]:w-[97%] min-[1280px]:-translate-x-1/2 mb-2 px-4 rounded-2xl shadow-xl border border-[#464646] bg-[#424750]/80'>
          <div className='flex flex-wrap flex-col md:items-start'>
            <h3 className='xl:mb-2 mb-3 leading-normal font-medium text-base md:text-xl'>Производственная компания Промматик</h3>
            <p className='mb-5 md:text-base'>Запустил с нуля сайт компании Промматик, наполнил контентом, сделал базовую SEO-оптимизацию и подключил необходимые сервисы.</p>
            <Link
            className="btn-stroke shrink-0 md:text-base text-sm"
            href="#"
          >
            Подробнее
          </Link>
          </div>
        </div>
      </div>

      {/* счетчик и управление */}
      <div className="flex items-center justify-between px-2">
        <p className="text-base md:text-lg lg:text-xl">
          <span className="text-[1.6em]">1</span>/ 8
        </p>
        <div className="flex flex-wrap gap-5">
          <button>
            <svg
              className="rotate-180"
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="2.2em"
              width="2.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="2.2em"
              width="2.2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectsBlock;
