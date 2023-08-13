import React from 'react';

const CardsGrid = () => {
  return (
    <section className="grid grid-flow-row-dense grid-cols-6">
      <div className="col-span-3 row-span-2 bg-green-700">1</div>
      <div className="col-span-3 bg-green-200">2</div>
      <div className="bg-green-300">3</div>
      <div className="bg-green-400">4</div>
      <div className="bg-green-400">5</div>
      <div className="bg-green-600">6</div>
    </section>
  );
};

export default CardsGrid;
