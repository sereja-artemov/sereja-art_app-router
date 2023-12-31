'use client'

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { navigationRoutes } from "@/app/data/navigationRoutes";
import Link from "next/link";


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
                <ul className="hidden h-auto p-1 overflow-auto border rounded-full lg:flex border-darkPrimary/50 dark:border-whiteSecondary/30">
              {navigationRoutes.map((route, index) => {
                const isActive = pathname === route.route;

                return (
                  <li key={index} className="flex items-stretch">
                    <Link
                      className={`mb-[0.1em] ${
                        isActive
                          ? 'bg-darkPrimary text-whitePrimary dark:bg-whitePrimary dark:text-darkPrimary'
                          : 'bg-whiteSecondary dark:bg-darkSecondary'
                      } hover:bg-darkPrimary hover:text-whitePrimary dark:hover:bg-whitePrimary dark:hover:text-darkPrimary py-[.4em] leading-none px-[1em] max-xl:px-[.61em] my-0.5 lg:my-0 border rounded-full text-lg flex items-center border-darkPrimary/50 dark:border-whiteSecondary/20 `}
                      href={route.route}
                    >
                      {route.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex">
              {/* Кнопка меню */}
              <div
                onClick={openMenu}
                className="lg:hidden border border-slate-900/50 dark:border-whiteSecondary/30 rounded-full p-0.5 flex items-center"
              >
                <button
                  className="leading-none px-4 p-0.5 border border-slate-900/50 dark:border-whiteSecondary/30 rounded-full h-full min-w-[87px]"
                  type="button"
                >
                  {isMenuOpen ? 'Закрыть' : 'Меню'}
                </button>
              </div>

              {/* Мобильное меню */}
              {isMenuOpen && (
                <ul className="fixed top-20 left-1/2 -translate-x-1/2 w-[90vw] backdrop-blur-md h-auto p-4 py-8 overflow-auto bg-whiteSecondary/50 dark:bg-darkSecondary/50 border lg:hidden rounded-3xl">
                  {navigationRoutes.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between w-full h-full gap-3 p-2 px-5 pr-1.5 mb-3 rounded-full  last:mb-0 lg:pr-1 lg:p-1 lg:px-4 bg-slate-800 dark:bg-whiteSecondary dark:text-black text-whiteSecondary"
                    >
                      <Link
                        onClick={() => closeMenu()}
                        className="text-2xl uppercase m-0 lg:mb-[0.1em] font-boss font-medium text-whitePrimary dark:text-darkPrimary"
                        href={item.route}
                      >
                        <span data-text={item.name}>{item.name}</span>
                      </Link>
                      <svg
                        className="w-auto h-[2.5em]"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-slate-50 dark:fill-darkPrimary"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.4049 9.45833L9.45911 12.4063C9.25547 12.6094 8.92578 12.6094 8.72265 12.4063C8.51901 12.2031 8.51901 11.8698 8.72265 11.6667L10.869 9.52083H5.35547C5.06745 9.52083 4.83464 9.28646 4.83464 9C4.83464 8.71354 5.06745 8.47916 5.35547 8.47916H10.869L8.72265 6.33333C8.51901 6.13021 8.51901 5.80206 8.72265 5.59373C8.92578 5.3906 9.25547 5.3906 9.45911 5.59373L12.4049 8.54166C12.5299 8.66666 12.569 8.83854 12.5404 9C12.569 9.16146 12.5299 9.33333 12.4049 9.45833ZM9.0013 0.666664C4.3987 0.666664 0.667969 4.39583 0.667969 9C0.667969 13.6042 4.3987 17.3333 9.0013 17.3333C13.6039 17.3333 17.3346 13.6042 17.3346 9C17.3346 4.39583 13.6039 0.666664 9.0013 0.666664Z"
                          fill="white"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
              )}
            </div>
                  {/* Popup */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed top-0 left-0 z-40 w-full h-screen dark:bg-slate-900/50 backdrop-blur-sm"
        />
      )}
   </> 
  )
}

export default Navigation