'use client';

import Link from 'next/link';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import { lockScroll, removeScrollLock } from '@/utils/utils';

type ServicesItemProps = {
  children?: any;
  linkHref: string;
  imgLink: string;
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
    x.set(0);
    y.set(0);
    // removeScrollLock();
  };

  return (
    <li
      onMouseMove={showImage}
      onMouseLeave={hideImage}
      className="flex flex-col gap-2 text-2xl font-extrabold text-stroke"
    >
      <Link className="link" href={linkHref}>
        {children}
        <FramerImage
          style={{ x: x, y: y }}
          width="500"
          height="300"
          ref={imgRef}
          className="absolute top-0 left-0 hidden"
          src={imgLink}
          alt={imgAlt}
        />
      </Link>
    </li>
  );
};

const ServicesBlock = ({ cssGridClassName }: { cssGridClassName?: string }) => {
  return (
    <div
      className={`${cssGridClassName} bg-[#1635A5] rounded-2xl p-5 text-whitePrimary`}
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="px-3 py-1 text-xs uppercase border rounded-full">
          Услуги
        </h3>
        <Link href="/services">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="13" cy="12.7234" rx="13" ry="12.7234" fill="white" />
            <path
              d="M19.3536 13.3536C19.5488 13.1583 19.5488 12.8417 19.3536 12.6464L16.1716 9.46447C15.9763 9.2692 15.6597 9.2692 15.4645 9.46447C15.2692 9.65973 15.2692 9.97631 15.4645 10.1716L18.2929 13L15.4645 15.8284C15.2692 16.0237 15.2692 16.3403 15.4645 16.5355C15.6597 16.7308 15.9763 16.7308 16.1716 16.5355L19.3536 13.3536ZM6 13.5L19 13.5V12.5L6 12.5V13.5Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
      <ul className="overflow-auto">
        <ServicesListItem
          linkHref="/"
          imgLink="/"
          imgAlt="Разработка сайтов картинка"
        >
          <span data-text={`Разработка\u00A0сайтов`}>Разработка сайтов</span>
        </ServicesListItem>
        <li>
          <Link className="link" href="/">
            <span data-text={`Сопровождение`}>Сопровождение</span>
          </Link>
        </li>
        <li>
          <Link className="link" href="/">
            <span data-text={`Продвижение`}>Продвижение</span>
          </Link>
        </li>
        <li>
          <Link className="link" href="/">
            <span data-text={`HTML\u00A0верстка`}>HTML верстка</span>
          </Link>
        </li>
        <li>
          <Link className="link" href="/">
            <span data-text={`Дизайн`}>Дизайн</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServicesBlock;
