'use client';

import { useKeenSlider } from 'keen-slider/react';
import prommaticImage from '@/images/projects/prommatic.webp';
import Image from 'next/image';
import { useState } from 'react';
import useWindowSize from '@/app/hooks/useWindowSize';

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
      <div className="relative">
        <Image
          className="w-full h-auto rounded-2xl"
          src="https://sereja-art.ru/_next/image?url=http%3A%2F%2Ftech.sereja-art.ru%2Fupload%2Fprojects%2Fprommatic_1024.webp&w=1920&q=75"
          alt="проект сайт промматик"
          sizes="100vw"
          width={1200}
          height={675}
        ></Image>
        
        {(isInfoPopupOpen && windowSize.width >= 768) && 
          <div className="overflow-auto pt-4 pb-4 top-0 left-0 md:px-10 md:absolute text-whiteSecondary w-full h-full bg-darkSecondary/90 md:pt-[70px] lg:text-base">
            <div className='mb-6'>
              <h3 className='text-base leading-normal lg:text-lg md:text-lg mb-2 font-semibold'>Производственная компания Промматик</h3>
                <p>
                  Запустил с нуля сайт компании Промматик, наполнил контентом, сделал
                  базовую SEO-оптимизацию и подключил необходимые сервисы.
                </p>
              </div> 
              
            {/* инструменты и технологии */}
            <ul className='flex flex-wrap gap-1 lg:gap-2 text-xs lg:text-sm'>
              <li className='rounded-md py-1 px-3 bg-darkPrimary'>1C-Bitrix</li>
              <li className='rounded-md py-1 px-3 bg-darkPrimary'>Aspro</li>
              <li className='rounded-md py-1 px-3 bg-darkPrimary'>SEO</li>
              <li className='rounded-md py-1 px-3 bg-darkPrimary'>Битрикс24</li>
              <li className='rounded-md py-1 px-3 bg-darkPrimary'>Bicall</li>
            </ul>
          </div> }

        {/* кнопка попапа с информацией о проекте */}
        {(windowSize.width >= 768) && 
          <button onClick={() => setIsInfoPopupOpen(!isInfoPopupOpen)} className='absolute left-5 top-5 w-9 h-9 rounded-full bg-darkSecondary leading-6'>
            {!isInfoPopupOpen ?
            <svg className='w-full h-auto' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className=' fill-whiteSecondary' d="M12 17.75C11.8019 17.7474 11.6126 17.6676 11.4725 17.5275C11.3324 17.3874 11.2526 17.1981 11.25 17V10C11.25 9.80109 11.329 9.61032 11.4697 9.46967C11.6103 9.32902 11.8011 9.25 12 9.25C12.1989 9.25 12.3897 9.32902 12.5303 9.46967C12.671 9.61032 12.75 9.80109 12.75 10V17C12.7474 17.1981 12.6676 17.3874 12.5275 17.5275C12.3874 17.6676 12.1981 17.7474 12 17.75Z" fill="#000000"/>
              <path className=' fill-whiteSecondary' d="M12 8.25C11.8019 8.24741 11.6126 8.16756 11.4725 8.02747C11.3324 7.88737 11.2526 7.69811 11.25 7.5V7C11.25 6.80109 11.329 6.61032 11.4697 6.46967C11.6103 6.32902 11.8011 6.25 12 6.25C12.1989 6.25 12.3897 6.32902 12.5303 6.46967C12.671 6.61032 12.75 6.80109 12.75 7V7.5C12.7474 7.69811 12.6676 7.88737 12.5275 8.02747C12.3874 8.16756 12.1981 8.24741 12 8.25Z" fill="#000000"/>
            </svg> :       
            <svg className='w-full h-auto' width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className=' fill-whiteSecondary' d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"/>
            </svg>}
          </button>}
        
      </div>
      {/* счетчик и управление */}
      <div>
        <p><span>1</span>/8</p>
        <div className='flex flex-wrap'>
          <span>
             <svg className='rotate-180' stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2.2em" width="2.2em" xmlns="http://www.w3.org/2000/svg"><path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor"></path></svg>
          </span>
          <span>
             <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2.2em" width="2.2em" xmlns="http://www.w3.org/2000/svg"><path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor"></path></svg>
          </span>
        </div>
      </div>
    </>

  );
};

export default ProjectsBlock;
