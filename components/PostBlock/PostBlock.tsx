import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';
import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlineRead,
} from 'react-icons/ai';
import getLocaleDate from '@/lib/getLocaleDate';
import getWordEnding from '@/lib/getWordEnding';
import Link from 'next/link';

export const PostBlock = () => {

  const getLastPublishedPost = () => {
    const publishedPosts = allPosts.filter((e) => e.published);
    const postsByDate = publishedPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return postsByDate[0];
  }

  const post = getLastPublishedPost();
  
  return (
    <div className="text-darkPrimary dark:text-whitePrimary">
      <div className='mb-2 overflow-hidden rounded-lg md:mb-0 sm:border border-blockBorderColorLight/50 dark:border-blockBorderColorDark/50'>
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
        <Link
          className="block mb-1.5 leading-snug lg:text-xl md:text-lg text-base font-boss"
          href={post.url}
        >
          <h3>{post.title}</h3>
        </Link>
        <div className="flex flex-wrap gap-3 shrink-0 2xl:pt-1">
          <span className='flex gap-[.5em] text-xs items-center sm:text-sm'>
            <AiOutlineCalendar className="w-[1.5em] h-[1.5em] fill-darkSecondary dark:fill-whiteSecondary" />
            {getLocaleDate('ru', post.date, 'short')}
          </span>
          <span className='flex gap-[.5em] text-xs items-center sm:text-sm'>
            <AiOutlineFieldTime className="w-[1.5em] h-[1.5em] fill-darkSecondary dark:fill-whiteSecondary" />
            {post.readingTime.readingTimeText}
          </span>
          <span className='flex gap-[.5em] text-xs items-center sm:text-sm'>
            <AiOutlineRead className="w-[1.5em] h-[1.5em] fill-darkSecondary dark:fill-whiteSecondary" />
            {post.readingTime.wordsQuantityStr}
          </span>
        </div>
      <hr className="my-4 mt-5 lg:mt-3 h-[1px] border-t-0 bg-darkSecondary/30 dark:bg-whiteSecondary opacity-100 dark:opacity-50" />
      <p className='md:text-base'>
        {post.excerpt}
      </p>
    </div>
  );
};
