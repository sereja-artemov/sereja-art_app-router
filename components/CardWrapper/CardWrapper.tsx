import Link from 'next/link';
import React from 'react';

type CardWrapperProps = {
  cssGridClassName?: string;
  children?: any;
  cardTitle?: string;
  cardLink?: string;
  isHeader?: boolean;
  isBgTransparent?: boolean;
};

const CardWrapper = ({
  cssGridClassName,
  children,
  cardTitle,
  cardLink,
  isHeader,
  isBgTransparent,
}: CardWrapperProps) => {
  return (
    <div
      className={`${cssGridClassName} rounded-3xl ${!isHeader && 'p-3'} ${
        isHeader && 'p-6 md:p-8 lg:p-10'
      } ${
        isBgTransparent
          ? 'text-darkPrimary dark:text-whitePrimary'
          : 'text-whitePrimary'
      } `}
    >
      {/* шапка карточки */}
      {isHeader && (
        <div className="flex items-center justify-between mb-5">
          {cardTitle !== undefined &&           <h3
            className={`px-3 py-1 text-xs uppercase ${
              cardTitle !== undefined && 'border rounded-full'
            } ${isBgTransparent && 'border border-custom'}`}
          >
            {cardTitle}
          </h3>}

          {cardLink !== undefined && (
            <Link
              className={`${
                isBgTransparent &&
                'border border-custom rounded-full dark:border-none'
              }`}
              href={cardLink}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="13"
                  cy="12.7234"
                  rx="13"
                  ry="12.7234"
                  fill="white"
                />
                <path
                  d="M19.3536 13.3536C19.5488 13.1583 19.5488 12.8417 19.3536 12.6464L16.1716 9.46447C15.9763 9.2692 15.6597 9.2692 15.4645 9.46447C15.2692 9.65973 15.2692 9.97631 15.4645 10.1716L18.2929 13L15.4645 15.8284C15.2692 16.0237 15.2692 16.3403 15.4645 16.5355C15.6597 16.7308 15.9763 16.7308 16.1716 16.5355L19.3536 13.3536ZM6 13.5L19 13.5V12.5L6 12.5V13.5Z"
                  fill="black"
                />
              </svg>
            </Link>
          )}
        </div>
      )}

      {children}
    </div>
  );
};

export default CardWrapper;
