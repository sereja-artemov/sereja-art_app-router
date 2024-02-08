import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Article, Graph, WithContext } from 'schema-dts';
import Link from 'next/link';
import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlineRead,
} from 'react-icons/ai';
import TableOfContents from '@/components/TableOfContents/TableOfContents';
import MDXComponentsCustom from '@/components/MDXComponents';
import { getPost, getPostFromSlug, getPosts } from '@/lib/getPosts';
import { PostType } from '@/lib/types';
import { MDXRemote } from 'next-mdx-remote/rsc';
import getLocaleDate from '@/lib/getLocaleDate';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from "rehype-pretty-code";
import { prettyCodeOptions } from '@/lib/prettyCodeOptions';

interface IProps {
  params: { slug: string };
}

const PostLayout = async ({ params }: { params: { slug: string } }) => {

  // const  post: PostType | undefined = await getPost(params.slug, 'blog');
  // if (!post) notFound()
  const  post: PostType | undefined = await getPostFromSlug(params.slug, 'blog');
  
  console.log(post);


  const structuredData: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    url: `${process.env.HOST}/blog/${params.slug}/`,
    image: {
      '@type': 'ImageObject',
      url: `${post.coverImage}`,
    },
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
      className={`grid grid-cols-1 lg:items-start ${
        post.tableOfContents.length > 0 && 'lg:grid-cols-[25%_1fr]'
      }`}
    >
      {post.tableOfContents.length > 0 && (
        <TableOfContents post={post} />
      )}
      <article
        className={`${
           post.tableOfContents.length <= 0 && 'mx-auto'
         } prose-code:not-prose w-full prose max-[375px]:prose-sm prose-custom prose-h2:blog-title-link prose-h3:blog-title-link prose-pre:not-prose lg:prose-xl dark:prose-invert prose-code:text-[15px] prose-pre:border prose-pre:border-blockBorderColorDark prose-pre:rounded-xl prose-pre:mt-0 prose-code:before:hidden prose-code:after:hidden prose-pre:rounded-t-none prose-pre:px-0`}
      >
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
        <MDXRemote source={post.body} options = {{mdxOptions: {
           rehypePlugins: [
             rehypeSlug, // автоматически создает заголовкам id с таким же названием
             // [rehypeAutolinkHeadings, { behaviour: "wrap" }],
             [rehypePrettyCode, prettyCodeOptions],
           ],
        }}} components={MDXComponentsCustom} />
        {/* <MDXContent components={MDXComponentsCustom} /> */}
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default PostLayout;

export const generateStaticParams = async () => {
  const posts = await getPosts('blog');
  return posts.map((post) => ({ slug: post.slug }));
}


//SEO metadata
export async function generateMetadata({ params: { slug } }: IProps): Metadata {
  const  post: PostType | undefined = await getPostFromSlug(slug, 'blog');


  if (!post) {
    return {};
  }

  const { excerpt, title, date, keywords, url } = post;
  const description = excerpt;

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: 'article',
      title,
      url: `${process.env.HOST}/${url}`,
      description,
      publishedTime: date,
      images: `http://tech.sereja-art.ru/upload/blogs/${post.slug}/${post.slug}.jpg`,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
    },
  };
}
