import s from './Footer.module.scss';
import Link from 'next/link';
import React from 'react';
import { BsTelegram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {

  return (
    <footer className='container my-5 py-10'>
      <div className='flex flex-wrap gap-1'>
        <div className='flex items-center gap-2 border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full px-4 py-2'>
          <MdEmail />
          <Link href='mailto:artemov46@gmail.com' target='_blank'>artemov46@gmail.com</Link>
        </div>
        <div className='flex items-center gap-2 border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full px-4 py-2'>
          <BsTelegram />
          <Link href='https://t.me/sereja_art' target='_blank'>@sereja_art</Link>
        </div>
        <div className='flex items-center gap-2 border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full px-4 py-2'>
          <IoLogoWhatsapp />
          <Link href='https://wa.me/79513339923' target='_blank'>whatsapp</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;