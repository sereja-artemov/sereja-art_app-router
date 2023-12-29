'use client'

import { Post } from 'contentlayer/generated'
import Link from "next/link";
import { useState } from "react";

function TableOfContents({ post }: { post: Post }) {
  const [isTocActive, setIsTocActive] = useState(false);

  return (
    <div
      className={`${
        isTocActive ? 'max-lg:translate-y-0' : 'max-lg:translate-y-full'
      } lg:sticky transition-transform lg:border-none lg:top-[120px] lg:pr-5 fixed left-0 bottom-0 w-full max-lg:bg-whiteSecondary/50 max-lg:dark:bg-darkSecondary/50 backdrop-blur-md z-[500] border border-blockBorderColorLight dark:border-blockBorderColorDark`}
    >
      <nav className={`max-lg:px-5 max-lg:py-6`}>
        <div className="mb-1 mt-[7px] text-sm font-medium">
          Содержание
        </div>
        <ul className="max-h-[70vh] overflow-y-auto py-2 text-sm text-secondTextColor dark:text-secondTextColorDark max-lg:color-inherit max-lg:max-h-[50%] overflow-auto">
          {post.toc.map(
            (element: Post['toc'], index: number) =>
              element.level <= 2 && (
                <li
                  style={{
                    marginLeft: element.level * 15 + 'px',
                  }}
                  key={index}
                  className="py-[.25em] text-[clamp(1rem,0.8571rem_+_0.2232vw,1.125rem)] leading-normal"
                >
                  <Link
                    href={`#${element.slugifyHeading}`}
                    style={{
                      fontSize: 1 - Number(`0.${element.level}`) + 'em',
                    }}
                  >
                    {element.heading}
                  </Link>
                </li>
              )
          )}
        </ul>
      </nav>

      <button
        onClick={() => setIsTocActive(!isTocActive)}
        className="absolute top-[-70px] px-8 py-4 border rounded-full lg:hidden left-1/2 -translate-x-1/2 block-border max-lg:bg-whiteSecondary max-lg:dark:bg-darkSecondary"
      >
        {!isTocActive ? 'Оглавление' : 'Закрыть'}
      </button>
    </div>
  )
}

export default TableOfContents