import React from 'react';

const Facts = () => {
  return (
    <section className="container mb-6 lg:flex lg:justify-between lg:flex-wrap">
      <ul className="flex flex-wrap gap-1.5 mb-6 md:mb-4 md:text-sm lg:text-base items-start">
        <li className="border border-custom rounded-full px-3.5 py-1 flex items-center">
          5+ лет опыта
        </li>
        <li className="border border-custom rounded-full px-3.5 py-1 flex items-center">
          Работаю официально
        </li>
        <li className="border border-custom rounded-full px-3.5 py-1 flex items-center">
          Результат не гарантирую
        </li>
      </ul>
      <p className="md:text-lg md:max-w-[630px]">
        Помогаю бизнесу зарабатывать с помощью современных веб-технологий и
        маркетинговых инструментов
      </p>
    </section>
  );
};

export default Facts;
