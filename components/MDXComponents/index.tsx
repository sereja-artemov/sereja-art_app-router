import type { MDXComponents } from 'mdx/types';
import Figcaption from "./Figcaption";
import CodeTitle from "./CodeTitle/CodeTitle";
import YouTubeEmbed from '@/components/MDXComponents/YouTube';
import Link from 'next/link';

const MDXComponentsCustom: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  Figcaption,
  CodeTitle,
  YouTubeEmbed,
};

export default MDXComponentsCustom;
