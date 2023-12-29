import React from 'react'
import { servicesData } from '../data/servicesData';
import { ServicesProps } from '@/lib/types';

const Services = () => {

  return (
    <>
      <h1 className="block-title">Услуги</h1>
      <div className="grid gap-10 max-sm:gap-7 md:grid-cols-[repeat(auto-fit,minmax(383px,1fr))] bg-whiteSecondary dark:bg-darkSecondary p-5 lg:p-9 rounded-xl block-border">
        { servicesData.map((element, index) => (
          <ServicesItem key={index} itemData={element} />
        )) }
      </div>
      <section className="relative py-12 overflow-hidden md:py-24 bg-coolGray-50">
  <div className="container relative px-4 mx-auto">
    {/* <img className="absolute top-0 hidden mt-8 sm:block left-1/2 lg:ml-20 xl:-ml-52 lg:mt-20 rounded-4xl" src="asitrastudio-assets/services/map-small.png" alt=""> */}
    <h1 className="mb-24 text-6xl tracking-tighter font-heading md:text-10xl">Services</h1>
    <a className="relative items-end block pb-8 mb-24 border-b border-black group xl:flex" href="#">
      <div className="mb-8 xl:mb-0">
        <span className="block text-sm lg:-mb-1 text-coolGray-600">01</span>
        <h3 className="inline-block pb-2 text-4xl transition duration-150 border-transparent xs:text-6xl lg:text-7xl border-b-3 group-hover:border-black">De-risking your project</h3>
      </div>
      <div className="max-w-md mb-8 ml-auto text-right xl:mb-0 xl:mr-20">
        <p>We follow the RIBA Plan of Work 2020 to ensure an orderly framework and project clarity from the outset. First, we conduct feasibility studies and a project review.</p>
      </div>
      <div className="text-right">
        <span className="inline-block transition duration-100 transform group-hover:rotate-45">
          <svg width="33" height="33" viewbox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 3L3 30" stroke="black" stroke-width="4.3875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M30 27.758V3H5.24196" stroke="black" stroke-width="4.3875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
      </div>
    </a>
    <a className="items-end block pb-8 mb-24 border-b border-black group xl:flex" href="#">
      <div className="mb-8 xl:mb-0">
        <span className="block text-sm lg:-mb-1 text-coolGray-600">02</span>
        <h3 className="inline-block pb-2 text-4xl transition duration-150 border-transparent xs:text-6xl lg:text-7xl border-b-3 group-hover:border-black">Planning strategies</h3>
      </div>
      <div className="max-w-md mb-8 ml-auto text-right xl:mb-0 xl:mr-20">
        <p>This process is led either by a chartered planning consultant or chartered architect and entails the preparation of concept designs and planning strategies.</p>
      </div>
      <div className="text-right">
        <span className="inline-block transition duration-100 transform group-hover:rotate-45">
          <svg width="33" height="33" viewbox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 3L3 30" stroke="black" stroke-width="4.3875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M30 27.758V3H5.24196" stroke="black" stroke-width="4.3875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
      </div>
    </a>
    <a className="items-end block pb-8 border-b border-black group xl:flex" href="#">
      <div className="mb-8 xl:mb-0">
        <span className="block text-sm lg:-mb-1 text-coolGray-600">03</span>
        <h3 className="inline-block text-4xl transition duration-150 border-transparent xs:text-6xl lg:text-7xl border-b-3 group-hover:border-black">Return on investment</h3>
      </div>
      <div className="max-w-md mb-8 ml-auto text-right xl:mb-0 xl:mr-20">
        <p>During this phase the design is developed to meet the required technical standards to meet building regulations and incorporate sustainability strategies.</p>
      </div>
      <div className="text-right">
        <span className="inline-block transition duration-100 transform group-hover:rotate-45">
          <svg width="33" height="33" viewbox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 3L3 30" stroke="black" stroke-width="4.3875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M30 27.758V3H5.24196" stroke="black" stroke-width="4.3875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </span>
      </div>
    </a>
  </div>
</section>
<a className="inline-flex items-center justify-center w-full text-base font-medium text-black transition duration-200 rounded-full group sm:w-auto h-14 px-7 hover:text-violet-900 bg-violet-600 hover:bg-white" href="#">
                <span className="mr-2">SEE DETAILS</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9199 6.62C17.8185 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z" fill="currentColor"></path>
                </svg>
              </a>
    </>
  )
}

const ServicesItem = ({ itemData }: {itemData: ServicesProps}) => {
  return (
    <div>
      <h3 className="font-boss text-[1.2rem] lg:text-xl mb-5 leading-normal">{itemData.group}</h3>
      <ul className="p-0 list-none">
        { itemData.services.map((element, index) => (
          <li className='relative sm:text-base text-sm leading-[1.7] mb-[0.5em] pl-[1.3em] before:block before:content-[""] before:w-[0.5em] before:h-[0.5em] before:absolute before:-translate-y-2/4 before:bg-[#935bc4] before:w-[0.4em] before:h-[0.4em] before:rounded-[50%] before:left-0 before:top-2/4 pl-[1.1em]' key={index}>{element.name}</li>
        )) }
      </ul>

    </div>
    
  );
};

export default Services;