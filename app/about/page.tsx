import Image from 'next/image';
import React from 'react';
import avatarPhoto from '../../images/about-photo.png';

const About = () => {
  return (
    <div className="md:flex md:items-center md:gap-20">
      <div className="md:w-2/5">
        <Image
          className="mx-auto"
          src={avatarPhoto}
          alt="Сергей Артемов - веб-разработчик"
        />
      </div>
      <div className="max-w-textContainer md:w-3/5">
        <h1 className="mb-5 text-2xl leading-none uppercase font-boss">
          Обо мне
        </h1>
        <p>
          👋 Меня зовут Сергей Артемов, я frontend-разработчик. Профессионально
          занимаюсь разработкой и сопровождением сайтов. Провожу маркетинговое
          исследование, создаю дизайн, верстаю и программирую.
        </p>
        <p>
          Мне нравится использовать React.js или Next.js для создания сайтов и
          функциональных веб-приложений. Также работаю с 1С-Битрикс и Tilda.
        </p>

        <p>
          Наилучшим образом представлю вашу компанию в интернете и приведу
          клиентов с помощью контекстной рекламы Яндекс.Директ.
        </p>

        <p>Люблю кататься на 🚲 велосипеде и готовить 🍕 пиццу.</p>
      </div>
    </div>
  );
};

export default About;
