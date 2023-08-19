'use client';

import Link from 'next/link';
import { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';

import testImage1 from '../../images/servicesBlock/services1.png';
import testImage2 from '../../images/servicesBlock/services2.png';
import testImage3 from '../../images/servicesBlock/services3.png';
import testImage4 from '../../images/servicesBlock/services4.png';
import testImage5 from '../../images/servicesBlock/services5.png';

type ServicesItemProps = {
  children?: any;
  linkHref: string;
  imgLink: string | StaticImageData;
  imgAlt: string;
};

export const ServicesListItem = ({
  children,
  linkHref,
  imgLink,
  imgAlt,
}: ServicesItemProps) => {
  const imgRef = useRef(null);
  const ImageWidth = 400;
  const ImageHeight = 400;

  const mouseMoveEvent = (event: { pageX: number; pageY: number }) => {
    imgRef.current.style.top = event.pageY - ImageHeight / 2 + 'px';
    imgRef.current.style.left = event.pageX + 20 + 'px';
    console.log(imgRef.current.style.left);
  };

  const mouseEnterEvent = () => {
    imgRef.current.style.display = 'inline-block';
  };

  const mouseLeaveEvent = () => {
    imgRef.current.style.display = 'none';
  };

  return (
    <li className="text-2xl font-bold leading-snug lg:text-4xl md:text-3xl md:leading-snug lg:leading-snug lg:font-bold text-whitePrimary max-w-fit">
      <Link
        onMouseMove={mouseMoveEvent}
        onMouseLeave={mouseLeaveEvent}
        onMouseEnter={mouseEnterEvent}
        href={linkHref}
        className="relative z-10 hover:mix-blend-exclusion hover:text-whitePrimary/75 link text-stroke"
      >
        {children}
      </Link>
      <Image
        width={ImageWidth}
        height={ImageHeight}
        ref={imgRef}
        className={`hidden absolute`}
        src={imgLink}
        alt={imgAlt}
      />
    </li>
  );
};

const ServicesBlock = () => {
  return (
    <>
      <ul className="inline-flex flex-col w-full gap-2 text-lg">
        <ServicesListItem
          linkHref="/"
          imgLink={testImage1}
          imgAlt="Разработка сайтов"
        >
          <span data-text={`Разработка\u00A0сайтов`}>Разработка сайтов</span>
        </ServicesListItem>
        <ServicesListItem
          linkHref="/"
          imgLink={testImage2}
          imgAlt="Сопровождение"
        >
          <span data-text={`Сопровождение`}>Сопровождение</span>
        </ServicesListItem>
        <ServicesListItem
          linkHref="/"
          imgLink={testImage3}
          imgAlt="Продвижение"
        >
          <span data-text={`Продвижение`}>Продвижение</span>
        </ServicesListItem>
        <ServicesListItem
          linkHref="/"
          imgLink={testImage4}
          imgAlt="HTML верстка"
        >
          <span data-text={`HTML\u00A0верстка`}>HTML верстка</span>
        </ServicesListItem>
        <ServicesListItem linkHref="/" imgLink={testImage5} imgAlt="Дизайн">
          <span data-text={`Дизайн`}>Дизайн</span>
        </ServicesListItem>
      </ul>
    </>
  );
};

export default ServicesBlock;
