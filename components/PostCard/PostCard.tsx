import { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlineRead,
} from 'react-icons/ai';

export default function PostCard(post: Post) {
  return (
    <article className="flex gap-7">
      <Image
        className="rounded-lg w-[150px] h-auto"
        src={post.coverImage}
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrQcAAX8A/n6ayNMAAAAASUVORK5CYII="
        alt={`${post.title} - обложка записи блога frontend-разработчика sereja-art`}
      />
      <div className="max-w-[700px]">
        <Link href={post.url}>
          <h3 className="mb-3 text-3xl leading-6 font-boss">{post.title}</h3>
        </Link>
        <p className="mb-5">{post.excerpt}</p>
        <div className="flex gap-5">
          <span className="flex items-center gap-[.5em] text-base">
            <AiOutlineCalendar />
            <time dateTime={post.date}>
              {new Intl.DateTimeFormat('ru', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }).format(new Date(post.date))}
            </time>
          </span>
          <span className="flex items-center gap-[.5em] text-base">
            <AiOutlineFieldTime />
            {post.readingTime.readingTimeText}
          </span>
          <span className="flex items-center gap-[.5em] text-base">
            <AiOutlineRead />
            {post.readingTime.wordsQuantityStr}
          </span>
        </div>
      </div>
    </article>
  );
}
