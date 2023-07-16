import React from 'react';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='container flex mx-auto my-5'>
      <div className='flex p-1.5 border rounded-full'>
       <Link className='px-4 pb-1.5 pt-1 text-xl text-black rounded-full bg-slate-50' href='/'>Главная страница</Link>
      </div>
     <ul>
      <li>
        <Link href="">1</Link>
        <Link href="">1</Link>
        <Link href="">1</Link>
        <Link href="">1</Link>
        <Link href="">1</Link>
        <Link href="">1</Link>
      </li>
     </ul>
    </header>
  )
}
