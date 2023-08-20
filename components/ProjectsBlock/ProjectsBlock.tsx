'use client';

import { useKeenSlider } from 'keen-slider/react';
import prommaticImage from '@/images/projects/prommatic.webp';
import Image from 'next/image';

// const SliderItem = ({ children }: any) => {
//   return <div className="w-full h-auto keen-slider__slide">{children}</div>;
// };

const ProjectsBlock = () => {
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
    <div className="relative overflow-auto rounded-2xl">
      <Image
        className="w-full h-auto"
        src="https://sereja-art.ru/_next/image?url=http%3A%2F%2Ftech.sereja-art.ru%2Fupload%2Fprojects%2Fprommatic_1024.webp&w=1920&q=75"
        alt="проект сайт промматик"
        sizes="100vw"
        width={1200}
        height={675}
      ></Image>
      <div className="bottom-0 left-0 p-5 lg:absolute text-darkPrimary">
        <h3>Производственная компания Промматик</h3>
        <p>
          Запустил с нуля сайт компании Промматик, наполнил контентом, сделал
          базовую SEO-оптимизацию и подключил необходимые сервисы.
        </p>
      </div>
    </div>
  );
};

export default ProjectsBlock;
