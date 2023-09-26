import { Variants } from "framer-motion";
import React from "react";
import CSS from 'csstype';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { StaticImageData } from "next/image";

export interface ReadTimeResultsCustom {
  text: string;
  textRU?: string;
  time: number;
  words: number;
  minutes: number;
}

export type FrontMatter = {
  readingTime: ReadTimeResultsCustom;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  keywords: string;
  slug: string;
  title: string;
  stringDate: string;
};

/* Custom Animated Components types */
export type AnimatedTAGProps = {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
  style?: CSS.Properties;
};

export type ProjectType = {
  name: string;
  description: string;
  date: number | string | Date;
  cost: number;
  links?: {
    [key: string]: string;
  };
  image: string | StaticImageData;
  previewImage: string | StaticImageData;
  tools: string[];
  year?: number;
  active: boolean;
}

export type ServicesProps = {
  group: string;
  services: [
    {
      [index: string]: string;
    }
  ]
};

export type skillsType = {
  name: string;
  active: boolean;
}

export type PostType = {
  meta: FrontMatter;
  source: MDXRemoteSerializeResult;
  tableOfContents: TableOfContents[];
};

export type TableOfContents = {
  heading: string;
  level: number;
  transliteratedHeading: string;
}
