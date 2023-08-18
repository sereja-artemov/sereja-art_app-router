'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import { lockScroll, removeScrollLock } from '@/utils/utils';

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

const FramerImage = motion(Image);

export const ServicesListItem = ({
  children,
  linkHref,
  imgLink,
  imgAlt,
}: ServicesItemProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const showImage = (event: any) => {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-150);
    // lockScroll();
  };

  const hideImage = (event: any) => {
    imgRef.current.style.display = 'none';
    // removeScrollLock();
  };

  return (
    <li className="text-2xl font-bold leading-snug lg:text-4xl md:text-3xl md:leading-snug lg:leading-snug lg:font-bold text-whitePrimary max-w-fit">
      <Link
        onMouseMove={showImage}
        onMouseLeave={hideImage}
        href={linkHref}
        className="hover:text-whitePrimary/75 link text-stroke"
      >
        {children}
        <FramerImage
          style={{ x: x, y: y }}
          width="300"
          height="300"
          ref={imgRef}
          className={`absolute left-[150px] hidden`}
          src={imgLink}
          alt={imgAlt}
        />
      </Link>
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
