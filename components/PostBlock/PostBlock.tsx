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
      <div className="justify-between sm:flex sm:gap-4">
        <h3 className="mb-3 text-base font-bold">Смотровая площадка</h3>
        <div className="flex gap-3 shrink-0">
          <span className="">
            <AiOutlineCalendar className="w-5 h-5 fill-darkSecondary dark:fill-whiteSecondary" />
            {/* {getLocaleDate('ru', article.date, 'short')} */}
          </span>
          <span>
            <AiOutlineFieldTime className="w-5 h-5 fill-darkSecondary dark:fill-whiteSecondary" />
            {/* {article.readingTime.textRU} */}
          </span>
          <span>
            <AiOutlineRead className="w-5 h-5 fill-darkSecondary dark:fill-whiteSecondary" />
            {/* {article.readingTime.words}
            {getWordEnding(article.readingTime.words, [
              ' слово',
              ' слова',
              ' слов',
            ])} */}
          </span>
        </div>
      </div>
      <hr className="my-5 h-[1px] border-t-0 bg-darkSecondary/30 dark:bg-whiteSecondary opacity-100 dark:opacity-50" />
      <p>
        Подъем на смотровую площадку на высоту де вите иташки, откуда
        открывается потрясающий вид на город
      </p>
    </div>
  );
};
