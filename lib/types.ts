import { Variants } from "framer-motion";
import React from "react";
import CSS from 'csstype';
import { StaticImageData } from "next/image";

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
  links: {
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
  published: boolean;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  keywords: string[];
  body: string;
  tableOfContents: TableOfContents[];
  url: string;
  coverImage: string;
  readingTime: { readingTimeText: string, wordsQuantityStr: string };
  lastModified?: number;
};

export interface TableOfContents {
  heading: string;
  level: number;
  slugifyHeading: string,
}

export type NoteType = {
  published: boolean;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  keywords: string[];
  body: string;
  // tableOfContents: TableOfContents[];
  url: string;
  // readingTime: { readingTimeText: string, wordsQuantityStr: string },
};