'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navigationRoutes } from '@/utils/utils';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDarkMode } from '@/context/darkModeContext';

export function Header() {
  const { isDarkMode, changeDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const openMenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <>
      <header className="fixed top-0 z-50 w-full py-5 -translate-x-1/2 left-1/2">
        <div className="container flex gap-x-1.5 items-stretch mx-auto">
          <nav className="mx-auto w-full left-0 flex gap-x-1.5">
            <button
              type="button"
              className="flex grow lg:grow-0 shrink-0 p-0.5 lg:p-1 border border-slate-900/50 dark:border-slate-50 rounded-full"
            >
              <div className="w-full h-full gap-3 px-4 pr-0.5 lg:p-1 p-0.5 rounded-full bg-slate-800 dark:bg-slate-50 dark:text-black text-white flex justify-between items-center">
                <Link className="lg:mb-[0.1em]" href="/">
                  {width <= 320 ? 'Главная' : 'Главная страница'}
                </Link>
                <svg
                  className="w-[22px]  lg:w-[27px] h-auto group-hover:fill-slate-50"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-slate-50 dark:fill-darkPrimary"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4049 9.45833L9.45911 12.4063C9.25547 12.6094 8.92578 12.6094 8.72265 12.4063C8.51901 12.2031 8.51901 11.8698 8.72265 11.6667L10.869 9.52083H5.35547C5.06745 9.52083 4.83464 9.28646 4.83464 9C4.83464 8.71354 5.06745 8.47916 5.35547 8.47916H10.869L8.72265 6.33333C8.51901 6.13021 8.51901 5.80206 8.72265 5.59373C8.92578 5.3906 9.25547 5.3906 9.45911 5.59373L12.4049 8.54166C12.5299 8.66666 12.569 8.83854 12.5404 9C12.569 9.16146 12.5299 9.33333 12.4049 9.45833ZM9.0013 0.666664C4.3987 0.666664 0.667969 4.39583 0.667969 9C0.667969 13.6042 4.3987 17.3333 9.0013 17.3333C13.6039 17.3333 17.3346 13.6042 17.3346 9C17.3346 4.39583 13.6039 0.666664 9.0013 0.666664Z"
                    fill="white"
                  />
                </svg>
              </div>
            </button>
            <ul className="hidden h-auto gap-1.5 lg:flex overflow-auto">
              {navigationRoutes.map((route, index) => (
                <li
                  key={index}
                  className="flex items-center lg:px-5 xl:px-6 lg:my-1 my-0.5 border rounded-full border-slate-900/10 dark:border-slate-50/25 bg-slate-200 dark:bg-darkSecondary hover:bg-opa"
                >
                  <Link className="mb-[0.1em]" href={route.route}>
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex">
              {/* Кнопка меню */}
              <div
                onClick={openMenu}
                className="lg:hidden border border-slate-900/50 rounded-full p-0.5 flex items-center"
              >
                <button
                  className="leading-none px-4 p-0.5 border border-slate-900/50 rounded-full h-full min-w-[87px]"
                  type="button"
                >
                  {isMenuOpen ? 'Закрыть' : 'Меню'}
                </button>
              </div>

              {/* Мобильное меню */}
              {isMenuOpen && (
                <ul className="fixed top-20 left-1/2 -translate-x-1/2 w-[90vw] h-auto p-4 py-8 overflow-auto dark:bg-darkPrimary border lg:hidden rounded-3xl">
                  {navigationRoutes.map((item, index) => (
                    <li key={index} className="">
                      <Link className="" href={item.route}>
                        <span data-text={item.name}>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>
          <div className="flex items-center justify-center shrink-0 lg:mr-4">
            <div className="w-8 h-8 lg:w-10 lg:h-10 max-h-12">
              <DarkModeSwitch
                sunColor="#0f172a"
                moonColor="#f8fafc"
                style={{ width: '100%', height: 'auto' }}
                checked={isDarkMode}
                onChange={changeDarkMode}
              />
            </div>
          </div>

          <div>
            {/* Иконки соцсетей */}
            <ul className="items-center hidden gap-1 lg:flex">
              <li className="border rounded-full flex items-center justify-center w-[48px] h-[48px] p-2.5">
                <a href="">
                  <svg
                    className="max-w-full max-h-auto"
                    fill="#ffffff"
                    width="64px"
                    height="64px"
                    viewBox="-2.5 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <title>vk</title>{' '}
                      <path d="M16.563 15.75c-0.5-0.188-0.5-0.906-0.531-1.406-0.125-1.781 0.5-4.5-0.25-5.656-0.531-0.688-3.094-0.625-4.656-0.531-0.438 0.063-0.969 0.156-1.344 0.344s-0.75 0.5-0.75 0.781c0 0.406 0.938 0.344 1.281 0.875 0.375 0.563 0.375 1.781 0.375 2.781 0 1.156-0.188 2.688-0.656 2.75-0.719 0.031-1.125-0.688-1.5-1.219-0.75-1.031-1.5-2.313-2.063-3.563-0.281-0.656-0.438-1.375-0.844-1.656-0.625-0.438-1.75-0.469-2.844-0.438-1 0.031-2.438-0.094-2.719 0.5-0.219 0.656 0.25 1.281 0.5 1.813 1.281 2.781 2.656 5.219 4.344 7.531 1.563 2.156 3.031 3.875 5.906 4.781 0.813 0.25 4.375 0.969 5.094 0 0.25-0.375 0.188-1.219 0.313-1.844s0.281-1.25 0.875-1.281c0.5-0.031 0.781 0.406 1.094 0.719 0.344 0.344 0.625 0.625 0.875 0.938 0.594 0.594 1.219 1.406 1.969 1.719 1.031 0.438 2.625 0.313 4.125 0.25 1.219-0.031 2.094-0.281 2.188-1 0.063-0.563-0.563-1.375-0.938-1.844-0.938-1.156-1.375-1.5-2.438-2.563-0.469-0.469-1.063-0.969-1.063-1.531-0.031-0.344 0.25-0.656 0.5-1 1.094-1.625 2.188-2.781 3.188-4.469 0.281-0.5 0.938-1.656 0.688-2.219-0.281-0.625-1.844-0.438-2.813-0.438-1.25 0-2.875-0.094-3.188 0.156-0.594 0.406-0.844 1.063-1.125 1.688-0.625 1.438-1.469 2.906-2.344 4-0.313 0.375-0.906 1.156-1.25 1.031z" />{' '}
                    </g>
                  </svg>
                </a>
              </li>
              <li className="border rounded-full flex items-center justify-center w-[48px] h-[48px] p-2.5">
                <a href="">
                  <svg
                    className="max-w-full max-h-auto"
                    fill="#ffffff"
                    width="64px"
                    height="64px"
                    viewBox="-2.5 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <title>vk</title>{' '}
                      <path d="M16.563 15.75c-0.5-0.188-0.5-0.906-0.531-1.406-0.125-1.781 0.5-4.5-0.25-5.656-0.531-0.688-3.094-0.625-4.656-0.531-0.438 0.063-0.969 0.156-1.344 0.344s-0.75 0.5-0.75 0.781c0 0.406 0.938 0.344 1.281 0.875 0.375 0.563 0.375 1.781 0.375 2.781 0 1.156-0.188 2.688-0.656 2.75-0.719 0.031-1.125-0.688-1.5-1.219-0.75-1.031-1.5-2.313-2.063-3.563-0.281-0.656-0.438-1.375-0.844-1.656-0.625-0.438-1.75-0.469-2.844-0.438-1 0.031-2.438-0.094-2.719 0.5-0.219 0.656 0.25 1.281 0.5 1.813 1.281 2.781 2.656 5.219 4.344 7.531 1.563 2.156 3.031 3.875 5.906 4.781 0.813 0.25 4.375 0.969 5.094 0 0.25-0.375 0.188-1.219 0.313-1.844s0.281-1.25 0.875-1.281c0.5-0.031 0.781 0.406 1.094 0.719 0.344 0.344 0.625 0.625 0.875 0.938 0.594 0.594 1.219 1.406 1.969 1.719 1.031 0.438 2.625 0.313 4.125 0.25 1.219-0.031 2.094-0.281 2.188-1 0.063-0.563-0.563-1.375-0.938-1.844-0.938-1.156-1.375-1.5-2.438-2.563-0.469-0.469-1.063-0.969-1.063-1.531-0.031-0.344 0.25-0.656 0.5-1 1.094-1.625 2.188-2.781 3.188-4.469 0.281-0.5 0.938-1.656 0.688-2.219-0.281-0.625-1.844-0.438-2.813-0.438-1.25 0-2.875-0.094-3.188 0.156-0.594 0.406-0.844 1.063-1.125 1.688-0.625 1.438-1.469 2.906-2.344 4-0.313 0.375-0.906 1.156-1.25 1.031z" />{' '}
                    </g>
                  </svg>
                </a>
              </li>
              <li className="border rounded-full flex items-center justify-center w-[48px] h-[48px] p-2.5">
                <a href="">
                  <svg
                    className="max-w-full max-h-auto"
                    fill="#ffffff"
                    width="64px"
                    height="64px"
                    viewBox="-2.5 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <title>vk</title>{' '}
                      <path d="M16.563 15.75c-0.5-0.188-0.5-0.906-0.531-1.406-0.125-1.781 0.5-4.5-0.25-5.656-0.531-0.688-3.094-0.625-4.656-0.531-0.438 0.063-0.969 0.156-1.344 0.344s-0.75 0.5-0.75 0.781c0 0.406 0.938 0.344 1.281 0.875 0.375 0.563 0.375 1.781 0.375 2.781 0 1.156-0.188 2.688-0.656 2.75-0.719 0.031-1.125-0.688-1.5-1.219-0.75-1.031-1.5-2.313-2.063-3.563-0.281-0.656-0.438-1.375-0.844-1.656-0.625-0.438-1.75-0.469-2.844-0.438-1 0.031-2.438-0.094-2.719 0.5-0.219 0.656 0.25 1.281 0.5 1.813 1.281 2.781 2.656 5.219 4.344 7.531 1.563 2.156 3.031 3.875 5.906 4.781 0.813 0.25 4.375 0.969 5.094 0 0.25-0.375 0.188-1.219 0.313-1.844s0.281-1.25 0.875-1.281c0.5-0.031 0.781 0.406 1.094 0.719 0.344 0.344 0.625 0.625 0.875 0.938 0.594 0.594 1.219 1.406 1.969 1.719 1.031 0.438 2.625 0.313 4.125 0.25 1.219-0.031 2.094-0.281 2.188-1 0.063-0.563-0.563-1.375-0.938-1.844-0.938-1.156-1.375-1.5-2.438-2.563-0.469-0.469-1.063-0.969-1.063-1.531-0.031-0.344 0.25-0.656 0.5-1 1.094-1.625 2.188-2.781 3.188-4.469 0.281-0.5 0.938-1.656 0.688-2.219-0.281-0.625-1.844-0.438-2.813-0.438-1.25 0-2.875-0.094-3.188 0.156-0.594 0.406-0.844 1.063-1.125 1.688-0.625 1.438-1.469 2.906-2.344 4-0.313 0.375-0.906 1.156-1.25 1.031z" />{' '}
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* Popup */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed top-0 left-0 z-40 w-full h-screen dark:bg-slate-900/50 backdrop-blur-sm"
        />
      )}
    </>
  );
}
