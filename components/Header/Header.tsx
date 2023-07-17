import React from 'react';
import Link from 'next/link';

export const Header = () => {

  const isIcon = true;

  return (
    <header className='container flex mx-auto my-5 gap-x-1.5 align-middle'>
      <button type='button' className='flex grow p-0.5 border rounded-full'>
        <div className={`w-full h-full px-4 ${isIcon ? 'pr-1' : ''} p-0.5 rounded-full bg-slate-50 flex justify-between items-center`}>
          <Link className='text-black' href='/'>Главная страница</Link>
          <svg className='w-5 h-auto group-hover:fill-slate-50' width="20px" height="20px" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064"></g><g id="SVGRepo_iconCarrier"> <title>arrow-right-circle</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.00032" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-310.000000, -1089.000000)" fill="#000000"> <path d="M332.535,1105.88 L326.879,1111.54 C326.488,1111.93 325.855,1111.93 325.465,1111.54 C325.074,1111.15 325.074,1110.51 325.465,1110.12 L329.586,1106 L319,1106 C318.447,1106 318,1105.55 318,1105 C318,1104.45 318.447,1104 319,1104 L329.586,1104 L325.465,1099.88 C325.074,1099.49 325.074,1098.86 325.465,1098.46 C325.855,1098.07 326.488,1098.07 326.879,1098.46 L332.535,1104.12 C332.775,1104.36 332.85,1104.69 332.795,1105 C332.85,1105.31 332.775,1105.64 332.535,1105.88 L332.535,1105.88 Z M326,1089 C317.163,1089 310,1096.16 310,1105 C310,1113.84 317.163,1121 326,1121 C334.837,1121 342,1113.84 342,1105 C342,1096.16 334.837,1089 326,1089 L326,1089 Z" id="arrow-right-circle"> </path> </g> </g> </g></svg>
        </div>
      </button>
     <ul className='hidden lg:block'>
      <li>
        <Link href="">1</Link>
        <Link href="">1</Link>
        <Link href="">1</Link>
        <Link href="">1</Link>
        <Link href="">1</Link>
        <Link href="">1</Link>
      </li>
     </ul>
     <div className='flex p-0.5 border rounded-full lg:hidden'>
        <button className='px-3 p-0.5 rounded-full border hover:bg-slate-50 hover:text-black' type='button'>Меню</button>
     </div>
    </header>
  )
}
