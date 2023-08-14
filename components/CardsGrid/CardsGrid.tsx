import React from 'react';
import ServicesBlock from '../ServicesBlock/ServicesBlock';

const CardsGrid = () => {
  return (
    <section className="container grid grid-flow-row-dense grid-cols-6">
      <ServicesBlock cssGridClassName="col-span-full" />
    </section>
  );
};

export default CardsGrid;
