import path from 'path';
import { readFileSync } from "fs";
import { sync } from 'glob';
import matter from 'gray-matter';
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from 'rehype-slug';
import readTime, {ReadTimeResults} from "reading-time";
import rehypePrettyCode from "rehype-pretty-code";
import getWordEnding from "@/lib/getWordEnding";
import {slugify, transliterate} from "transliteration";
import { FrontMatter, ReadTimeResultsCustom } from '@/lib/types';

export default class MDXContent {
  private POST_PATH: string;

  constructor(folderName: string) {
    /* .replace(/\\/g, '/') меняем палочки для windows */
    this.POST_PATH = path.join(process.cwd(), folderName).replace(/\\/g, '/');
  }

  /* Переводим минуты на русский язык */
  transformReadingTime(content: string) {
    const readingTime = readTime(content, { wordsPerMinute: 200 });

    const readingTimeMinutes = readingTime.text.match( /\d+/g );
    const word = getWordEnding(Number(readingTimeMinutes), [' минута', ' минуты', ' минут']);
    const readingTimeText = readingTime.text.replace(/[^0-9\.]+/g, word);

    return readingTimeText;
  }

  /* Получаем все slug из каталога */
  getSlugs() {
    const paths = sync(`${this.POST_PATH}/*.mdx`);
    return paths.map((path) => {
      const parts = path.split("/");
      const fileName = parts[parts.length - 1];
      const [slug, _ext] = fileName.split(".");
      return slug;
    });
  }

  /* Функция возвращает front matter */
  getFrontMatter(slug: string): FrontMatter | null {
    const postPath = path.join(this.POST_PATH, `${slug}.mdx`);
    /* Возвращаем содержимое файла */
    const source = readFileSync(postPath);
    const { content, data } = matter(source);

    const readingTime: ReadTimeResultsCustom = readTime(content, { wordsPerMinute: 200 });
    readingTime.textRU = this.transformReadingTime(content);
    if (!data.published) return null;

      return {
        slug,
        readingTime,
        excerpt: data.excerpt ?? "",
        title: data.title ?? slug,
        date: (data.date ?? new Date()).toString(),
        stringDate: data.stringDate ?? "",
        keywords: data.keywords ?? "",
        image: data.image ?? "http://tech.sereja-art.ru/upload/image-empty.jpg",
        category: data.category ?? "",
      };
  }

  /* Получаем post по значению slug (это пост с контентом и front matter)  */
  async getPostFromSlug(slug: string, force: boolean = false) {
    const postPath = path.join(this.POST_PATH, `${slug}.mdx`);
    const source = readFileSync(postPath);
    const {content, data} = matter(source);
    if (!data.published && !force) return {post: null};

    // получаем front matter
    const frontMatter = this.getFrontMatter(slug);

    /* настройка темы блоков с кодом */
    const prettyCodeOptions = {
      theme: "one-dark-pro",
      onVisitLine(node: any) {
        // Prevent lines from collapsing in `display: grid` mode, and
        // allow empty lines to be copy/pasted
        if (node.children.length === 0) {
          node.children = [{type: "text", value: " "}];
        }
      },
      // Feel free to add classNames that suit your docs
      onVisitHighlightedLine(node: any) {
        node.properties.className.push("highlighted");
      },
      onVisitHighlightedWord(node: any) {
        node.properties.className = ["word"];
      },
    }

    /* обрабатываем markdown файл */
    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug, // автоматически создает заголовкам id с таким же названием
          // [rehypeAutolinkHeadings, { behaviour: "wrap" }],
          [rehypePrettyCode, prettyCodeOptions],
        ],
      },
    });
    return {
      post: {
        content: mdxSource,
        tableOfContents: this.getTableOfContents(content),
        meta: frontMatter,
      },
    };
  }

  /* Получаем все записи
  - Находим все slugs
  - мапим каждый slug и получаем его front matter
  - сортируем записи по дате
  - возвращаем массив с записями
*/
  getAllPosts(length?: number | undefined) {
    const posts = this.getSlugs()
      .map((slug) => {
        return this.getFrontMatter(slug);
      })
      .filter((post) => post != null) // Оставляем только опубликованные записи
      .sort((a, b) => {
        if (new Date(a!.date) > new Date(b!.date)) return -1;
        if (new Date(a!.date) < new Date(b!.date)) return 1;
        return 0;
      });

    return length === undefined ? posts : posts.slice(0, length);
  }

  /* Генерируем навигацию по заголовкам
  - используя регулярные выражения, получаем заголовки h2-h6
  - затем создаем иерархию заголовков, убираем "#", и возвращаем в виде массива
*/
  getTableOfContents(markdown: string) {
    const regXHeader = /#{2,6}.+/g;
    const headingArray = markdown.match(regXHeader)
      ? markdown.match(regXHeader)
      : [];
    return headingArray?.map((heading) => {
      return {
        level: heading.split("#").length - 1 - 2, // мы начинаем с h2, поэтому мы вычитаем 2, а 1 - это дополнительный текст заголовка
        heading: heading.replace(/#{2,6}/, "").trim(),
        transliteratedHeading: slugify(heading), //делаем транслитерацию для заголовка
      };
    });
  }
}


