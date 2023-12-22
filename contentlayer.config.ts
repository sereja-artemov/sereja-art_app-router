import { defineDocumentType, makeSource } from '@contentlayer/source-files';
import getReadingTime from './lib/readingTime';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings, {
  type Options as AutolinkOptions,
} from 'rehype-autolink-headings';
import rehypePrettyCode, {
  type Options as PrettyCodeOptions,
} from 'rehype-pretty-code';
import { s } from 'hastscript';
import GithubSlugger from "github-slugger"

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    published: { type: 'boolean', required: true },
    category: { type: 'string' },
    keywords: { type: 'string' },
    excerpt: { type: 'string' },
    coverImage: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace(`${post._raw.sourceFileDir}/`, ""),
    },
    url: {
      type: 'string',
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
    readingTime: {
      type: 'json',
      resolve: (post) => {
        const content = post.body.raw;
        const readingTime = getReadingTime(content);

        return readingTime;
      },
    },
    toc: {
      type: 'json',
      resolve: (post) => {
        const slugger = new GithubSlugger();
        const regXHeader = /#{2,6}.+/g;
        const headingArray = post.body.raw.match(regXHeader)
          ? post.body.raw.match(regXHeader)
          : [];
        return headingArray?.map((heading) => {
          return {
            level: heading.split('#').length - 1 - 2, // мы начинаем с h2, поэтому мы вычитаем 2, а 1 - это дополнительный текст заголовка
            heading: heading.replace(/#{2,6}/, '').trim(),
            slugifyHeading: slugger.slug(heading).replace(
              /(^| +)[!-\/:-@\[-`\{-~]*([^ ]*?)[!-\/:-@\[-`\{-~]*(?=\s|$)/gi,
              '$1$2'
            )
          };
        });
      },
    },
  },
}));

export const Note = defineDocumentType(() => ({
  name: 'Note',
  filePathPattern: `content/notes/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    published: { type: 'boolean', required: true },
    category: { type: 'string' },
    keywords: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath.replace(`${post._raw.sourceFileDir}/`, ""),
    },
    url: {
      type: 'string',
      resolve: (post) => `${post._raw.flattenedPath}`,
    },
    readingTime: {
      type: 'json',
      resolve: (post) => {
        const content = post.body.raw;
        const readingTime = getReadingTime(content);

        return readingTime;
      },
    },
    toc: {
      type: 'json',
      resolve: (post) => {
        const slugger = new GithubSlugger();
        const regXHeader = /#{2,6}.+/g;
        const headingArray = post.body.raw.match(regXHeader)
          ? post.body.raw.match(regXHeader)
          : [];
        return headingArray?.map((heading) => {
          return {
            level: heading.split('#').length - 1 - 2, // мы начинаем с h2, поэтому мы вычитаем 2, а 1 - это дополнительный текст заголовка
            heading: heading.replace(/#{2,6}/, '').trim(),
            slugifyHeading: slugger.slug(heading).replace(
              /(^| +)[!-\/:-@\[-`\{-~]*([^ ]*?)[!-\/:-@\[-`\{-~]*(?=\s|$)/gi,
              '$1$2'
            )
          };
        });
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  contentDirInclude: [],
  documentTypes: [Post, Note],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [
        /**
         * Adds auto-linking button after h1, h2, h3 headings
         */
        rehypeAutolinkHeadings,
        {
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
        } satisfies Partial<AutolinkOptions>,
      ],
      // rehypeToc,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          grid: false,
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          // Feel free to add classNames that suit your docs
          // onVisitHighlightedLine(node: any) {
          //   node.properties.className.push("highlighted");
          // },
          // onVisitHighlightedWord(node: any) {
          //   node.properties.className = ["word"];
          // },
        } satisfies Partial<PrettyCodeOptions>,
      ],
    ],
  },
});
