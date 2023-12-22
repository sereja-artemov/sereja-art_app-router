'use client';

import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Metadata } from 'next';
import { Article, Graph, WithContext } from 'schema-dts';
import type { MDXComponents } from 'mdx/types';

import Link from 'next/link';
import Figcaption from '@/components/MDXComponents/Figcaption';
import CodeTitle from '@/components/MDXComponents/CodeTitle/CodeTitle';
import YouTubeEmbed from '@/components/MDXComponents/YouTube';
import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlineRead,
} from 'react-icons/ai';
import getLocaleDate from '@/lib/getLocaleDate';
import { useState } from 'react';
// ^ This component is just a placeholder, it will give you an error, remove it.

interface IProps {
  params: { slug: string };
}

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Figcaption,
  CodeTitle,
  YouTubeEmbed,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const [isTocActive, setIsTocActive] = useState(false);

  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  const structuredData: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    // url: `${process.env.HOST}/blog/${slug}/`,
    // image: {
    //   '@type': 'ImageObject',
    //   url: `${process.env.HOST}${post.cover.filePath.replace(
    //     '../public',
    //     '',
    //   )}/`,
    // },
    description: post.excerpt,
    datePublished: post.date,
    publisher: {
      '@type': 'Person',
      name: 'Sergey Artemov',
      url: process.env.HOST,
      image: '/avatar.png',
    },
    author: {
      '@type': 'Person',
      name: 'Sergey Artemov',
      url: process.env.HOST,
      image: '/avatar.png',
    },
  };
  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [structuredData],
  };

  return (
    <div
      className={`grid grid-cols-1 lg:items-start ${post.toc.length > 0 && "lg:grid-cols-[25%_1fr]"}`}
      id={post._id}
    >
{post.toc.length > 0 && (
  <>
      <div
        className={`${
          isTocActive ? 'max-lg:translate-y-0' : 'max-lg:translate-y-full'
        } lg:sticky transition-transform lg:border-none lg:top-[120px] lg:pr-5 fixed left-0 bottom-0 w-full max-lg:bg-whiteSecondary/50 max-lg:dark:bg-darkSecondary/50 backdrop-blur-md z-[500] border border-blockBorderColorLight dark:border-blockBorderColorDark`}
      >
        
          <nav className={`max-lg:px-5 max-lg:py-6`}>
            <div className="mb-1 mt-[7px] text-sm font-medium">Содержание</div>
            <ul className="max-h-[70vh] overflow-y-auto py-2 text-sm text-secondTextColor dark:text-secondTextColorDark max-lg:color-inherit max-lg:max-h-[50%] overflow-auto">
              {post.toc.map(
                (element, index) =>
                  element.level <= 2 && (
                    <li
                      style={{
                        marginLeft: element.level * 15 + 'px',
                      }}
                      key={index}
                      className="py-[.25em] text-[clamp(1rem,0.8571rem_+_0.2232vw,1.125rem)] leading-normal"
                    >
                      <Link
                        href={`#${element.slugifyHeading}`}
                        style={{
                          fontSize: 1 - Number(`0.${element.level}`) + 'em',
                        }}
                      >
                        {element.heading}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </nav>
  

        <button
          onClick={() => setIsTocActive(!isTocActive)}
          className="absolute top-[-70px] px-8 py-4 border rounded-full lg:hidden left-1/2 -translate-x-1/2 block-border max-lg:bg-whiteSecondary max-lg:dark:bg-darkSecondary"
        >
          {!isTocActive ? 'Оглавление' : 'Закрыть'}
        </button>
        
      </div>
      </>
        )}
      <article className={`${post.toc.length <= 0 && "mx-auto"} prose-code:not-prose w-full prose max-[375px]:prose-sm prose-custom prose-h2:blog-title-link prose-h3:blog-title-link prose-pre:not-prose lg:prose-xl dark:prose-invert prose-code:text-[15px] prose-pre:border prose-pre:border-blockBorderColorDark prose-pre:rounded-xl prose-pre:mt-0 prose-code:before:hidden prose-code:after:hidden prose-pre:rounded-t-none prose-pre:px-0`}>
        {/* шапка начало */}
        <div className="px-5 py-6 mb-5 border sm:px-6 lg:py-8 lg:px-10 rounded-3xl block-border block-bg">
          <h1 className="text-2xl leading-tight max-[375px]:text-xl font-bold font-boss lg:leading-tight lg:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap justify-between gap-1.5 text-sm dark:text-secondTextColorDark text-secondTextColor">
            <span className="inline-flex items-center gap-2 mr-3 lg:text-base [&>svg]:w-[1.4em] [&>svg]:h-auto">
              {<AiOutlineCalendar />}
              {getLocaleDate('ru', post.date, 'short')}
            </span>
            <div className="inline-flex gap-4">
              <span className="flex items-center gap-2 lg:text-base [&>svg]:w-[1.4em] [&>svg]:h-auto">
                {<AiOutlineFieldTime />}
                {post.readingTime.readingTimeText}
              </span>
              <span className="flex items-center gap-2 lg:text-base [&>svg]:w-[1.4em] [&>svg]:h-auto">
                {<AiOutlineRead />}
                {post.readingTime.wordsQuantityStr}
              </span>
            </div>
          </div>
        </div>
        {/* шапка конец */}

        <MDXContent components={mdxComponents} />
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default PostLayout;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

//SEO metadata
export function generateMetadata({ params: { slug } }: IProps): Metadata {
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  const { excerpt, title, date, keywords } = post;

  const description = excerpt;

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: 'article',
      title,
      description,
      publishedTime: date,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
    },
  };
}
