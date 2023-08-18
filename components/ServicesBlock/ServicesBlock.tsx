'use client';

import Link from 'next/link';
import React, { useRef, useState } from 'react';
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
    y.set(event.pageY);
    // lockScroll();
  };

  const hideImage = (event: any) => {
    imgRef.current.style.display = 'none';
    // removeScrollLock();
  };

  return (
    <li
      onMouseMove={showImage}
      onMouseLeave={hideImage}
      className="lg:text-4xl text-2xl md:text-3xl leading-snug md:leading-snug lg:leading-snug font-bold lg:font-bold text-whitePrimary max-w-fit"
    >
      <Link href={linkHref} className='hover:text-whitePrimary/75'>
        {children}
        <FramerImage
          style={{x: x, y: y}}
          width="300"
          height="300"
          ref={imgRef}
          className={`absolute top-0 left-0 hidden`}
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
      <ul className="inline-flex flex-col gap-2 text-lg w-full">
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
