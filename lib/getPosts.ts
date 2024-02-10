import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import GithubSlugger from 'github-slugger';
import getReadingTime from '@/lib/readingTime';

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

  return {
    ...data,
    slug,
    url: fileUrl,
    body: content,
    readingTime,
    tableOfContents,
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
