import React from 'react';

const CardWrapper = ({ cssGridClassName, children }: { cssGridClassName?: string, children: any }) => {
  return (
    <div className={`${cssGridClassName} rounded-2xl p-6 md:p-8 lg:p-10 text-whitePrimary`}>
      {children}
    </div>
  );
};

export default CardWrapper;
