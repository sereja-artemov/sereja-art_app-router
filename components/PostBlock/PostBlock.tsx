import Image from 'next/image';
import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlineRead,
} from 'react-icons/ai';
import getLocaleDate from '@/lib/getLocaleDate';
import getWordEnding from '@/lib/getWordEnding';

export const PostBlock = () => {
  return (
    <div className="text-darkPrimary dark:text-whitePrimary">
      <Image
        className="mb-4"
        src="/test-blog-image.jpg"
        width="638"
        height="84"
        alt=""
      ></Image>
      <div className="justify-between 2xl:flex 2xl:gap-7 items-start">
        <h3 className="mb-3 text-base md:text-lg font-bold">Смотровая площадка</h3>
        <div className="flex flex-wrap gap-3 shrink-0 2xl:pt-1">
          <span className='flex gap-[.5em] text-xs items-center sm:text-sm'>
            <AiOutlineCalendar className="w-[1.5em] h-[1.5em] fill-darkSecondary dark:fill-whiteSecondary" />
            {/* {getLocaleDate('ru', article.date, 'short')} */}
            20.20.20
          </span>
          <span className='flex gap-[.5em] text-xs items-center sm:text-sm'>
            <AiOutlineFieldTime className="w-[1.5em] h-[1.5em] fill-darkSecondary dark:fill-whiteSecondary" />
            {/* {article.readingTime.textRU} */}
            20 минут
          </span>
          <span className='flex gap-[.5em] text-xs items-center sm:text-sm'>
            <AiOutlineRead className="w-[1.5em] h-[1.5em] fill-darkSecondary dark:fill-whiteSecondary" />
            200 слов
            {/* {article.readingTime.words}
            {getWordEnding(article.readingTime.words, [
              ' слово',
              ' слова',
              ' слов',
            ])} */}
          </span>
        </div>
      </div>
      <hr className="my-4 mt-5 lg:mt-3 h-[1px] border-t-0 bg-darkSecondary/30 dark:bg-whiteSecondary opacity-100 dark:opacity-50" />
      <p className='md:text-base'>
        Подъем на смотровую площадку на высоту де вите иташки, откуда
        открывается потрясающий вид на город
      </p>
    </div>
  );
};
