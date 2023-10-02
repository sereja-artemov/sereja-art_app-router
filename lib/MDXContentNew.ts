import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import readTime, { ReadTimeResults } from 'reading-time';
import { ReadTimeResultsCustom } from './types';
import getWordEnding from './getWordEnding';
import { cache } from 'react';

/* Переводим минуты на русский язык */
export const transformReadingTime = (content: string) => {
  const readingTime = readTime(content, { wordsPerMinute: 200 });

  const readingTimeMinutes = readingTime.text.match(/\d+/g);
  const word = getWordEnding(Number(readingTimeMinutes), [
    ' минута',
    ' минуты',
    ' минут',
  ]);
  const readingTimeText = readingTime.text.replace(/[^0-9\.]+/g, word);

  return readingTimeText;
};

export const getPosts = cache(async () => {
  const postsDir = 'posts';
  const files = await fs.readdir(postsDir);

  return Promise.all(
    files
      .filter((fileName) => path.extname(fileName) === '.mdx')
      .map(async (blogFileName) => {
        const postSlug = path.basename(blogFileName, '.mdx');
        const filePath = path.join(postsDir, blogFileName);
        const source = await fs.readFile(filePath, 'utf8');
        const { content, data } = matter(source);

        const readingTime: ReadTimeResultsCustom = readTime(content, {
          wordsPerMinute: 200,
        });
        readingTime.textRU = transformReadingTime(content);
        if (!data.published) return null;

        return {
          slug: postSlug,
          readingTime,
          excerpt: data.excerpt ?? '',
          title: data.title,
          date: (data.date ?? new Date()).toString(),
          stringDate: data.stringDate ?? '',
          keywords: data.keywords ?? '',
          image:
            data.image ?? 'http://tech.sereja-art.ru/upload/image-empty.jpg',
          category: data.category ?? '',
        };
      })
  );
});

export const getPost = async (slug: string) => {
  const posts = await getPosts();

  return posts.find((post) => post.slug === slug);
};
