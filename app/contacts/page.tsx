import Link from 'next/link'
import React from 'react'

const Contacts = () => {
  return (
    <>
      <h1 className='block-title'>
        Контакты
      </h1>
      <p className='block mb-8 max-sm:mb-5'>Если вы заинтересованы в сотрудничестве или вам нужна помощь <br/> с проектом, пожалуйста, напишите мне на email</p>
      <a href='mailto:artemov46@gmail.com' className='inline-block px-6 py-3 rounded-md bg-whiteSecondary dark:bg-darkSecondary mb-8 lg:text-5xl font-medium font-boss'>artemov46@gmail.com</a>
      <p className='block mb-8 max-sm:mb-5'>или в любом мессенджере</p>
      <div className='block mb-8 max-sm:mb-5'>
        <span className="lg:text-5xl font-medium font-boss flex gap-5">
          <Link className='inline-block px-6 py-3 rounded-md bg-whiteSecondary dark:bg-darkSecondary' href='https://t.me/sereja_art' target='_blank'>Telegram</Link>
          <Link className='inline-block px-6 py-3 rounded-md bg-whiteSecondary dark:bg-darkSecondary' href='https://wa.me/79513339923' target='_blank'>WhatsApp</Link>
        </span>
      </div>
      <p className='block mb-8 max-sm:mb-5'>я в соцсетях</p>
      <div className=''>
        <Link href='https://vk.com/sereja_art' target='_blank' className='lg:text-5xl font-medium font-boss inline-block px-6 py-3 rounded-md bg-whiteSecondary dark:bg-darkSecondary'>ВКонтакте</Link>
      </div>
    </>
  )
}

export default Contacts