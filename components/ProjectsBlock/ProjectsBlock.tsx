'use client';

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useWindowSize from '@/app/hooks/useWindowSize';
import Link from 'next/link';
import { projectsData } from '@/app/data/projectsData';

const ProjectsBlock = () => {
  const windowSize = useWindowSize();
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMount, setIsMount] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isProjectInfoVisible, setIsProjectInfoVisible] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      slides: {
        perView: 1,
        spacing: 20,
      },
    },
    [
      // add plugins here
    ]
  );

  // исправил неправильную ширину слайдов при первоначальной загрузке
  useEffect(() => {
    instanceRef?.current?.update();
  }, [isImageLoading]);

  const getCurrentSlideNumber = () => {
    return (
      isImageLoading &&
      instanceRef.current &&
      instanceRef.current.track.details.abs + 1
    );
  };

  const getSliderlength = () => {
    return (
      isImageLoading &&
      instanceRef.current &&
      instanceRef.current.track.details.slides.length
    );
  };

  return (
    <>
      <div
        ref={sliderRef}
        className="flex max-w-full overflow-hidden keen-slider"
      >
        {projectsData.map((project, index) => {
          return (
            <div
              onMouseEnter={() => {
                setIsProjectInfoVisible(true);
              }}
              onMouseLeave={() => {
                setIsProjectInfoVisible(false);
              }}
              key={index}
              className="relative flex flex-col mb-3 keen-slider__slide group"
            >
              {/* фикс вспышки */}
              <Image
                className={`${
                  !isImageLoading && 'invisible'
                } w-full h-auto mb-2 rounded-2xl`}
                src={project.previewImage || project.image}
                alt={`${project.name} картинка проекта`}
                sizes="100vw"
                width={1200}
                height={675}
                onLoadingComplete={() => setIsImageLoading(true)}
              ></Image>
              {/* подложка с информацией о проекте */}
              <div
                className={` ${
                  isProjectInfoVisible ? 'xl:opacity-100 ' : 'xl:opacity-0'
                } ease-in duration-200 relative lg:w-full lg:m-0 lg:h-auto h-full overflow-auto xl:py-6 py-5 min-[1280px]:absolute min-[1280px]:bottom-2 min-[1280px]:left-1/2 min-[1280px]:-translate-x-1/2 mb-2 px-4 rounded-2xl shadow-xl lg:border-none border border-[#464646]`}
              >
                <div className="flex flex-col h-full">
                  <h3 className="mb-3 text-base font-medium leading-normal xl:mb-2 md:text-xl">
                    {project.name}
                  </h3>
                  <p className="mb-5 md:text-base line-clamp-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-5 text-xs">
                    {project.tools.map((item, index) => (
                      <p
                        className="px-3.5 py-1 pb-1.5 bg-darkSecondary rounded-full"
                        key={index}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                  <Link
                    className="w-full mt-auto text-sm btn shrink-0 md:text-base"
                    href="#"
                  >
                    Подробнее
                  </Link>
                </div>
                <div className="backdrop-blur-sm absolute left-0 top-0 w-full h-full -z-10 bg-[#424750]/80"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* счетчик и управление */}
      <div className="flex items-center justify-between px-2 mt-auto">
        {/* счетчик */}
        <p className="text-base md:text-lg lg:text-xl">
          <span className="text-[1.6em] font-medium">
            {getCurrentSlideNumber()}
          </span>
          / {getSliderlength()}
        </p>
        {/* стрелки */}
        <div className="flex flex-wrap gap-5">
          {isImageLoading && instanceRef.current && (
            <>
              <button
                className="disabled:opacity-20"
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              >
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
              <button
                className="disabled:opacity-20"
                onClick={(e: any) => {
                  e.stopPropagation() || instanceRef.current?.next();
                }}
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              >
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsBlock;
