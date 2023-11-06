'use client'

import useWindowSize from '@/app/hooks/useWindowSize';
import getLocaleDate from '@/lib/getLocaleDate';
import { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlineRead,
} from 'react-icons/ai';

export default function PostCard(post: Post) {
  const windowSize = useWindowSize();

  return (
    <article className=" md:flex md:gap-2 lg:max-w-[1140px] items-start max-md:max-w-[390px] md:w-full ">
      <div className='mb-2 overflow-hidden rounded-lg md:mb-0 sm:border md:w-1/3 lg:w-1/2 border-blockBorderColorLight/50 dark:border-blockBorderColorDark/50'>
        <Image
          className="w-full h-auto"
          src={post.coverImage || '/image-empty.jpg'}
          width={640}
          height={336}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrQcAAX8A/n6ayNMAAAAASUVORK5CYII="
          alt={`${post.title} - обложка записи блога frontend-разработчика sereja-art`}
        />
      </div>

      <div className="w-full px-6 py-5 border bg-whiteSecondary dark:bg-darkSecondary rounded-xl border-blockBorderColorLight dark:border-blockBorderColorDark">
        {/* техническая информация */}
        <div className="flex flex-wrap gap-1.5 text-sm mb-3 lg:mb-3">
          <span className="inline-flex items-center gap-2 mr-3 [&>svg]:w-[1.4em] [&>svg]:h-auto dark:text-secondTextColorDark text-secondTextColor">
            {<AiOutlineCalendar />}
            {getLocaleDate('ru', post.date, 'short')}
          </span>
          <div className="inline-flex gap-4">
            <span className="flex items-center gap-2 [&>svg]:w-[1.4em] [&>svg]:h-auto dark:text-secondTextColorDark text-secondTextColor">
              {<AiOutlineFieldTime />}
              {post.readingTime.readingTimeText}
            </span>
            {windowSize.width >= 410 && (
              <span className="flex items-center gap-2 [&>svg]:w-[1.4em] [&>svg]:h-auto dark:text-secondTextColorDark text-secondTextColor">
                {<AiOutlineRead />}
                {post.readingTime.wordsQuantityStr}
              </span>
            )}
          </div>
        </div>
        <Link
          className="block mb-1.5 leading-snug lg:text-xl md:text-lg text-base font-boss"
          href={post.url}
        >
          <h3>{post.title}</h3>
        </Link>
        <p className="mb-6 leading-normal dark:text-secondTextColorDark text-secondTextColor md:text-sm lg:text-base line-clamp-3 md:line-clamp-2">{post.excerpt}</p>
        <Link className='flex items-center justify-between gap-3 px-5 py-1 font-semibold uppercase border rounded-xl lg:text-base border-blockBorderColorLight dark:border-blockBorderColorDark' href={post.url}>
          <p>Читать</p>
          <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2.2em" width="2.2em" xmlns="http://www.w3.org/2000/svg"><path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor"></path></svg>
        </Link>
      </div>
    </article>
  );
}
