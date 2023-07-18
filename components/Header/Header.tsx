'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const openMenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
  }

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    const close = (e:any) => {
      if(e.keyCode === 27){
        closeMenu;
      }
    }
    window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
  },[])

  return (
    <header className='container mx-auto my-5'>
      { isMenuOpen &&  <div onClick={closeMenu} className='fixed top-0 left-0 w-full h-screen bg-black z-800 bg-opacity-40'></div>}
      <nav className='flex gap-x-1.5 align-middle'>
        <button type='button' className='flex grow p-0.5 border rounded-full'>
          <div className="w-full h-full px-4 pr-1 p-0.5 rounded-full bg-slate-50 flex justify-between items-center">
            <Link className='text-black' href='/'>Главная страница</Link>
            <svg className='w-5 h-auto group-hover:fill-slate-50' width="20px" height="20px" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064"></g><g id="SVGRepo_iconCarrier"> <title>arrow-right-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.00032" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-310.000000, -1089.000000)" fill="#000000"> <path d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z" id="arrow-right-circle"> </path> </g> </g> </g></svg>
          </div>
        </button>
        { isMenuOpen && <ul className='z-900 fixed top-1/2 translate-x-[-50%] border rounded-3xl translate-y-[-50%] left-1/2 w-[90%] p-4 py-14 bg-black'>
          <li className='mb-2 flex grow p-0.5 border rounded-full bg-[#2B2B2B]'>
            <div className="w-full h-full px-3 pr-0.5 p-0.5 rounded-full flex gap-2 justify-between items-center">
              <Link href='/'>Портфолио</Link>
              <div className='flex shrink-0 items-center self-stretch h-100% px-4 text-black font-medium py-[1px] bg-rose-500 rounded-full text-center align-middle text-xs max-w-[25%]'>
                <span>14+</span>
              </div>
            </div>
          </li>
          <li className='mb-2 flex grow p-0.5 border rounded-full bg-[#2B2B2B]'>
            <div className="w-full h-full px-3 pr-0.5 p-0.5 rounded-full flex justify-between items-center">
              <Link href='/'>Обо мне</Link>
            </div>
          </li>
          <li className='mb-2 flex grow p-0.5 border rounded-full bg-[#2B2B2B]'>
            <div className="w-full h-full px-3 pr-0.5 p-0.5 rounded-full flex justify-between items-center">
              <Link href='/'>Блог</Link>
            </div>
          </li>
          <li className='mb-2 flex grow p-0.5 border rounded-full bg-[#2B2B2B]'>
            <div className="w-full h-full px-3 pr-0.5 p-0.5 rounded-full flex justify-between items-center">
              <Link href='/'>Контакты</Link>
            </div>
          </li>
          <button onClick={closeMenu} type='button' className='absolute right-[18px] top-[16px]'>
            <svg className='w-7 h-auto' width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.23188 54.6448C2.85161 54.9991 2.54661 55.4264 2.33506 55.9012C2.12352 56.376 2.00977 56.8885 2.0006 57.4082C1.99143 57.9279 2.08703 58.4441 2.28169 58.926C2.47636 59.4079 2.7661 59.8457 3.13363 60.2133C3.50116 60.5808 3.93895 60.8706 4.42089 61.0652C4.90283 61.2599 5.41904 61.3555 5.93873 61.3463C6.45842 61.3371 6.97093 61.2234 7.4457 61.0118C7.92048 60.8003 8.34778 60.4953 8.70211 60.115L3.23188 54.6448ZM34.5051 34.312C34.8854 33.9577 35.1904 33.5304 35.4019 33.0556C35.6135 32.5808 35.7272 32.0683 35.7364 31.5486C35.7456 31.029 35.65 30.5127 35.4553 30.0308C35.2606 29.5489 34.9709 29.1111 34.6034 28.7435C34.2358 28.376 33.798 28.0863 33.3161 27.8916C32.8342 27.6969 32.318 27.6013 31.7983 27.6105C31.2786 27.6197 30.7661 27.7334 30.2913 27.945C29.8165 28.1565 29.3892 28.4615 29.0349 28.8418L34.5051 34.312ZM29.0349 28.8418C28.6546 29.1961 28.3496 29.6234 28.1381 30.0982C27.9265 30.573 27.8128 31.0855 27.8036 31.6052C27.7944 32.1249 27.89 32.6411 28.0847 33.123C28.2794 33.605 28.5691 34.0427 28.9366 34.4103C29.3042 34.7778 29.742 35.0675 30.2239 35.2622C30.7058 35.4569 31.222 35.5525 31.7417 35.5433C32.2614 35.5341 32.7739 35.4204 33.2487 35.2088C33.7235 34.9973 34.1508 34.6923 34.5051 34.312L29.0349 28.8418ZM60.3081 8.50902C60.9918 7.77532 61.364 6.80488 61.3463 5.80217C61.3286 4.79946 60.9224 3.84276 60.2133 3.13363C59.5041 2.42449 58.5474 2.01829 57.5447 2.0006C56.542 1.98291 55.5716 2.35511 54.8379 3.03879L60.3081 8.50902ZM34.5051 28.8418C34.1508 28.4615 33.7235 28.1565 33.2487 27.945C32.7739 27.7334 32.2614 27.6197 31.7417 27.6105C31.222 27.6013 30.7058 27.6969 30.2239 27.8916C29.742 28.0863 29.3042 28.376 28.9366 28.7435C28.5691 29.1111 28.2794 29.5489 28.0847 30.0308C27.89 30.5127 27.7944 31.029 27.8036 31.5486C27.8128 32.0683 27.9265 32.5808 28.1381 33.0556C28.3496 33.5304 28.6546 33.9577 29.0349 34.312L34.5051 28.8418ZM54.8379 60.115C55.1922 60.4953 55.6195 60.8003 56.0943 61.0118C56.5691 61.2234 57.0816 61.3371 57.6013 61.3463C58.121 61.3555 58.6372 61.2599 59.1191 61.0652C59.601 60.8706 60.0388 60.5808 60.4064 60.2133C60.7739 59.8457 61.0636 59.4079 61.2583 58.926C61.453 58.4441 61.5486 57.9279 61.5394 57.4082C61.5302 56.8885 61.4165 56.376 61.2049 55.9012C60.9934 55.4264 60.6884 54.9991 60.3081 54.6448L54.8379 60.115ZM29.0349 34.312C29.3892 34.6923 29.8165 34.9973 30.2913 35.2088C30.7661 35.4204 31.2786 35.5341 31.7983 35.5433C32.318 35.5525 32.8342 35.4569 33.3161 35.2622C33.798 35.0675 34.2358 34.7778 34.6034 34.4103C34.9709 34.0427 35.2606 33.605 35.4553 33.123C35.65 32.6411 35.7456 32.1249 35.7364 31.6052C35.7272 31.0855 35.6135 30.573 35.4019 30.0982C35.1904 29.6234 34.8854 29.1961 34.5051 28.8418L29.0349 34.312ZM8.70211 3.03879C7.9684 2.35511 6.99797 1.98291 5.99526 2.0006C4.99255 2.01829 4.03585 2.42449 3.32672 3.13363C2.61759 3.84276 2.21139 4.79946 2.19369 5.80217C2.176 6.80488 2.5482 7.77532 3.23188 8.50902L8.70211 3.03879ZM8.70211 60.115L34.5051 34.312L29.0349 28.8418L3.23188 54.6448L8.70211 60.115ZM34.5051 34.312L60.3081 8.50902L54.8379 3.03879L29.0349 28.8418L34.5051 34.312ZM29.0349 34.312L54.8379 60.115L60.3081 54.6448L34.5051 28.8418L29.0349 34.312ZM34.5051 28.8418L8.70211 3.03879L3.23188 8.50902L29.0349 34.312L34.5051 28.8418Z" fill="white"/>
            <path d="M3.23188 54.6448C2.85161 54.9991 2.54661 55.4264 2.33506 55.9012C2.12352 56.376 2.00977 56.8885 2.0006 57.4082C1.99143 57.9279 2.08703 58.4441 2.28169 58.926C2.47636 59.4079 2.7661 59.8457 3.13363 60.2133C3.50116 60.5808 3.93895 60.8706 4.42089 61.0652C4.90283 61.2599 5.41904 61.3555 5.93873 61.3463C6.45842 61.3371 6.97093 61.2234 7.4457 61.0118C7.92048 60.8003 8.34778 60.4953 8.70211 60.115M3.23188 54.6448L8.70211 60.115M3.23188 54.6448L29.0349 28.8418M8.70211 60.115L34.5051 34.312M34.5051 34.312C34.8854 33.9577 35.1904 33.5304 35.4019 33.0556C35.6135 32.5808 35.7272 32.0683 35.7364 31.5486C35.7456 31.029 35.65 30.5127 35.4553 30.0308C35.2606 29.5489 34.9709 29.1111 34.6034 28.7435C34.2358 28.376 33.798 28.0863 33.3161 27.8916C32.8342 27.6969 32.318 27.6013 31.7983 27.6105C31.2786 27.6197 30.7661 27.7334 30.2913 27.945C29.8165 28.1565 29.3892 28.4615 29.0349 28.8418M34.5051 34.312L29.0349 28.8418M34.5051 34.312C34.1508 34.6923 33.7235 34.9973 33.2487 35.2088C32.7739 35.4204 32.2614 35.5341 31.7417 35.5433C31.222 35.5525 30.7058 35.4569 30.2239 35.2622C29.742 35.0675 29.3042 34.7778 28.9366 34.4103C28.5691 34.0427 28.2794 33.605 28.0847 33.123C27.89 32.6411 27.7944 32.1249 27.8036 31.6052C27.8128 31.0855 27.9265 30.573 28.1381 30.0982C28.3496 29.6234 28.6546 29.1961 29.0349 28.8418M34.5051 34.312L60.3081 8.50902M29.0349 28.8418L54.8379 3.03879M60.3081 8.50902C60.9918 7.77532 61.364 6.80488 61.3463 5.80217C61.3286 4.79946 60.9224 3.84276 60.2133 3.13363C59.5041 2.42449 58.5474 2.01829 57.5447 2.0006C56.542 1.98291 55.5716 2.35511 54.8379 3.03879M60.3081 8.50902L54.8379 3.03879M34.5051 28.8418C34.1508 28.4615 33.7235 28.1565 33.2487 27.945C32.7739 27.7334 32.2614 27.6197 31.7417 27.6105C31.222 27.6013 30.7058 27.6969 30.2239 27.8916C29.742 28.0863 29.3042 28.376 28.9366 28.7435C28.5691 29.1111 28.2794 29.5489 28.0847 30.0308C27.89 30.5127 27.7944 31.029 27.8036 31.5486C27.8128 32.0683 27.9265 32.5808 28.1381 33.0556C28.3496 33.5304 28.6546 33.9577 29.0349 34.312M34.5051 28.8418L29.0349 34.312M34.5051 28.8418C34.8854 29.1961 35.1904 29.6234 35.4019 30.0982C35.6135 30.573 35.7272 31.0855 35.7364 31.6052C35.7456 32.1249 35.65 32.6411 35.4553 33.123C35.2606 33.605 34.9709 34.0427 34.6034 34.4103C34.2358 34.7778 33.798 35.0675 33.3161 35.2622C32.8342 35.4569 32.318 35.5525 31.7983 35.5433C31.2786 35.5341 30.7661 35.4204 30.2913 35.2088C29.8165 34.9973 29.3892 34.6923 29.0349 34.312M34.5051 28.8418L60.3081 54.6448M34.5051 28.8418L8.70211 3.03879M29.0349 34.312L54.8379 60.115M29.0349 34.312L3.23188 8.50902M54.8379 60.115C55.1922 60.4953 55.6195 60.8003 56.0943 61.0118C56.5691 61.2234 57.0816 61.3371 57.6013 61.3463C58.121 61.3555 58.6372 61.2599 59.1191 61.0652C59.601 60.8706 60.0388 60.5808 60.4064 60.2133C60.7739 59.8457 61.0636 59.4079 61.2583 58.926C61.453 58.4441 61.5486 57.9279 61.5394 57.4082C61.5302 56.8885 61.4165 56.376 61.2049 55.9012C60.9934 55.4264 60.6884 54.9991 60.3081 54.6448M54.8379 60.115L60.3081 54.6448M8.70211 3.03879C7.9684 2.35511 6.99797 1.98291 5.99526 2.0006C4.99255 2.01829 4.03585 2.42449 3.32672 3.13363C2.61759 3.84276 2.21139 4.79946 2.19369 5.80217C2.176 6.80488 2.5482 7.77532 3.23188 8.50902M8.70211 3.03879L3.23188 8.50902" stroke="white" stroke-width="2.56"/>
            </svg>
          </button>
        </ul>}


        <div className='flex p-0.5 border rounded-full lg:hidden'>
          <button onClick={openMenu} className='px-3 p-0.5 rounded-full border hover:bg-slate-50 hover:text-black' type='button'>Меню</button>
        </div>
      </nav>
      {/* <div className='fixed top-0 left-0 w-full h-screen bg-black z-800 bg-opacity-40'></div> */}
>>>>>>>>> Temporary merge branch 2
    </header>
  )
}
