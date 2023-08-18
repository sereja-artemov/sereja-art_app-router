import React from 'react';
import ServicesBlock from '../ServicesBlock/ServicesBlock';
import CardWrapper from '../CardWrapper/CardWrapper';

const CardsGrid = () => {
  return (
    <section className="container grid grid-flow-row-dense grid-cols-6 gap-5">
      <CardWrapper
        cardLink="/services"
        cardTitle="Услуги"
        cssGridClassName="bg-[#1635A5] col-span-full lg:col-span-3 line-background"
      >
        <ServicesBlock />
      </CardWrapper>
    </section>
  );
};

export default CardsGrid;
