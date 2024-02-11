import { Metadata } from 'next';
import { Article, Graph, WithContext } from 'schema-dts';
import MDXComponentsCustom from '@/components/MDXComponents';
import { getPost, getPosts } from '@/lib/getPosts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from "rehype-pretty-code";
import { prettyCodeOptions } from '@/lib/prettyCodeOptions';
import rehypeAutolinkHeadings, {
  type Options as AutolinkOptions,
} from 'rehype-autolink-headings';
import { s } from 'hastscript';
import { notFound } from 'next/navigation';

interface IProps {
  params: { slug: string };
}

const NoteLayout = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug, 'notes');
  if (!post) notFound()
  
  const structuredData: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    url: `${process.env.HOST}/notes/${params.slug}/`,
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
    <div className='mx-auto prose-code:not-prose w-full prose max-[375px]:prose-sm prose-custom prose-h2:blog-title-link prose-h3:blog-title-link prose-pre:not-prose lg:prose-xl dark:prose-invert prose-code:text-[15px] prose-pre:border prose-pre:border-blockBorderColorDark prose-pre:rounded-xl prose-pre:mt-0 prose-code:before:hidden prose-code:after:hidden prose-pre:rounded-t-none prose-pre:px-0'>
      <h1 className='text-2xl leading-tight max-[375px]:text-xl font-bold font-boss lg:leading-tight lg:text-5xl'>{post.title}</h1>
      <MDXRemote source={post.body} options = {{mdxOptions: {
           rehypePlugins: [
             rehypeSlug, // автоматически создает заголовкам id с таким же названием
             [rehypeAutolinkHeadings, {
              behavior: 'append',
              // на какие заголовки будет действовать
              test: ['h2', 'h3'],
              properties: { class: 'heading-link' },
              content: s(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 24 24',
                  width: '24',
                  height: '24',
                  fill: 'none',
                  stroke: 'currentColor',
                  'stroke-width': '2',
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  'aria-label': 'Anchor link',
                },
                [
                  s('line', { x1: '4', y1: '9', x2: '20', y2: '9' }),
                  s('line', { x1: '4', y1: '15', x2: '20', y2: '15' }),
                  s('line', { x1: '10', y1: '3', x2: '8', y2: '21' }),
                  s('line', { x1: '16', y1: '3', x2: '14', y2: '21' }),
                ]
              ),
            } satisfies Partial<AutolinkOptions>,],
             [rehypePrettyCode, prettyCodeOptions],
           ],
        }}} components={MDXComponentsCustom} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}

export default NoteLayout;

export const generateStaticParams = async () => {
  const posts = await getPosts('notes');
  return posts.map((post) => ({ slug: post.slug }));
}

//SEO metadata
export async function generateMetadata({ params: { slug } }: IProps): Promise<Metadata> {
  const  post = await getPost(slug, 'notes');

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
