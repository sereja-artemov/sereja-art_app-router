import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Metadata } from 'next';
import { Article, Graph, WithContext } from 'schema-dts';
import type { MDXComponents } from 'mdx/types';

import Link from 'next/link';
import Figcaption from '@/components/MDXComponents/Figcaption';
import CodeTitle from '@/components/MDXComponents/CodeTitle/CodeTitle';
// ^ This component is just a placeholder, it will give you an error, remove it.

interface IProps {
  params: { slug: string };
}

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Figcaption,
  CodeTitle,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
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
    <>
      <article className="prose prose-pre:not-prose lg:prose-xl dark:prose-invert prose-code:text-[15px] prose-pre:border prose-pre:border-blockBorderColorDark prose-pre:rounded-xl prose-pre:mt-0 prose-code:before:hidden prose-code:after:hidden prose-pre:rounded-t-none prose-pre:px-0">
        <div className="mb-8 text-center">
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {new Intl.DateTimeFormat('en-US').format(new Date(post.date))}
          </time>
          <h1 className="text-3xl font-bold">{post.title}</h1>
        </div>
        <MDXContent components={mdxComponents} />
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default PostLayout;

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

//SEO metadata
export function generateMetadata({ params: { slug } }: IProps): Metadata {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

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
