import { useMDXComponent } from 'next-contentlayer/hooks';
import { allNotes } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Article, Graph, WithContext } from 'schema-dts';
import MDXComponentsCustom from '@/components/MDXComponents';

interface IProps {
  params: { slug: string };
}

export default function PageLayout({ params }: { params: { slug: string } }) {

  const note = allNotes.find((note) => note.slug === params.slug);
  if (!note) notFound();

  const MDXContent = useMDXComponent(note.body.code);
  const structuredData: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: note.title,
    // url: `${process.env.HOST}/blog/${slug}/`,
    // image: {
    //   '@type': 'ImageObject',
    //   url: `${process.env.HOST}${post.cover.filePath.replace(
    //     '../public',
    //     '',
    //   )}/`,
    // },
    description: note.body.raw,
    datePublished: note.date,
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
    <div className='mx-auto prose-code:not-prose w-full prose max-[375px]:prose-sm prose-custom prose-h2:blog-title-link prose-h3:blog-title-link prose-pre:not-prose lg:prose-xl dark:prose-invert prose-code:text-[15px] prose-pre:border prose-pre:border-blockBorderColorDark prose-pre:rounded-xl prose-pre:mt-0 prose-code:before:hidden prose-code:after:hidden prose-pre:rounded-t-none prose-pre:px-0'>
      <h1 className='text-2xl leading-tight max-[375px]:text-xl font-bold font-boss lg:leading-tight lg:text-5xl'>{note.title}</h1>
      <MDXContent components={MDXComponentsCustom} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}

export const generateStaticParams = async () =>
  allNotes.map((note) => ({ slug: note.slug }));

  //SEO metadata
export function generateMetadata({ params: { slug } }: IProps): Metadata {
  const note = allNotes.find((note) => note.slug === slug);

  if (!note) {
    return {};
  }

  const { description, title, date, keywords } = note;

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