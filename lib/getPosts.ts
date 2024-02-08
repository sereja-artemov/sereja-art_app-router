import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import GithubSlugger from 'github-slugger';
import getReadingTime from '@/lib/readingTime';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from "rehype-pretty-code";

import { PostType } from './types';
import { compileMDX } from 'next-mdx-remote/rsc';

export async function getPosts(postTypeDir: string) {
  const posts = await fs.readdir(`./content/${postTypeDir}`);

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./content/${postTypeDir}/${file}`;
        const fileContent = await fs.readFile(filePath, 'utf8');
        const fileSlug = file.replace('.mdx', '');
        const fileUrl = `${postTypeDir}/${fileSlug}`;
        /* Возвращаем содержимое файла */
        const { data, content } = matter(fileContent);

        const readingTime = getReadingTime(content);
        // const tableOfContents = getTableOfContents(content);
        /* Возвращаем front matter */
        return {
          ...data,
          slug: fileSlug,
          url: fileUrl,
          body: content,
          readingTime,
          // tableOfContents,
        };
      })
  );
}

// export async function getPost(slug: string, postTypeDir: string) {
//   const posts = await getPosts(postTypeDir);
//   const currentPost = posts.find((post) => post.slug === slug);
//   // const tableOfContents = getTableOfContents(currentPost);

//   return currentPost;
// }

  /* Получаем post по значению slug (это пост с контентом и front matter)  */
export async function getPostFromSlug(slug: string, postTypeDir: string) {
    const postPath = `./content/${postTypeDir}/${slug}.mdx`;
    // const postPath = path.join(this.POST_PATH, `${slug}.mdx`);
    const fileContent = await fs.readFile(postPath, 'utf8');
    const fileUrl = `${postTypeDir}/${slug}`;
    const {data, content} = matter(fileContent);

    const readingTime = getReadingTime(content);
    const tableOfContents = getTableOfContents(content);

    if (!data.published) return {post: null};
    

    // получаем front matter
  //   const {frontmatter, content} = await compileMDX({
  //     source: article.description,
  //     components: components,
  //     options: {
  //         parseFrontmatter: false, // ставим true, если нам нужно собирать мета данные из файлов mdx (в моём случае данные приходят из API)
  //         mdxOptions: {
  //             rehypePlugins: [rehypeCodeTitles, rehypePrismAll, rehypeFigure],
  //             remarkPlugins: [remarkGfm]
  //         }
  //     }
  // })

  return {
    ...data,
    slug,
    url: fileUrl,
    body: content,
    readingTime,
    tableOfContents,
    // options: {
    //     mdxOptions: {
    //       rehypePlugins: [
    //         rehypeSlug, // автоматически создает заголовкам id с таким же названием
    //         // [rehypeAutolinkHeadings, { behaviour: "wrap" }],
    //         [rehypePrettyCode, prettyCodeOptions],
    //       ],
    //     }
    // }
  };
}

const getTableOfContents = (markdown: string) => {
  const slugger = new GithubSlugger();
  const regXHeader = /#{2,6}.+/g;
  const headingArray = markdown.match(regXHeader)
    ? markdown.match(regXHeader)
    : [];
  return headingArray?.map((heading) => {
    return {
      level: heading.split('#').length - 1 - 2, // мы начинаем с h2, поэтому мы вычитаем 2, а 1 - это дополнительный текст заголовка
      heading: heading.replace(/#{2,6}/, '').trim(),
      slugifyHeading: slugger
        .slug(heading)
        .replace(
          /(^| +)[!-\/:-@\[-`\{-~]*([^ ]*?)[!-\/:-@\[-`\{-~]*(?=\s|$)/gi,
          '$1$2'
        ),
    };
  });
};
