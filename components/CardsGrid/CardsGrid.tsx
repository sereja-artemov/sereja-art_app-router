import React from 'react';
import ServicesBlock from '../ServicesBlock/ServicesBlock';
import CardWrapper from '../CardWrapper/CardWrapper';
import ProjectsBlock from '../ProjectsBlock/ProjectsBlock';
import { PostBlock } from '../PostBlock/PostBlock';

const CardsGrid = () => {
  return (
    <section className="container grid grid-flow-row-dense grid-cols-6 gap-5">
      {/* Услуги */}
      <CardWrapper
        cardLink="/services"
        cardTitle="Услуги"
        cssGridClassName="bg-[#1635A5] col-span-full lg:col-span-3 line-background"
        isHeader
      >
        <ServicesBlock />
      </CardWrapper>

      {/* Проекты */}
      <CardWrapper
        cardLink="/projects"
        cardTitle="Проекты"
        cssGridClassName="bg-darkSecondary col-span-full lg:col-span-3 flex flex-col"
      >
        <ProjectsBlock />
      </CardWrapper>

      {/* Блог */}
      <CardWrapper
        cardLink="/blog"
        cardTitle="Последняя запись"
        cssGridClassName="border col-span-full lg:col-span-3 flex flex-col"
        isHeader
      >
        <PostBlock />
      </CardWrapper>
    </section>
  );
};

export default CardsGrid;
