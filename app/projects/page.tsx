'use client'

import Image from 'next/image';
import React from 'react';
import { projectsData } from '../data/projectsData';
import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlineRead,
} from 'react-icons/ai';

const Projects = () => {
  return (
    <>
      <h1 className='mb-5 text-3xl lg:text-5xl leading-none uppercase font-boss'>Проекты</h1>
        {/* <ul>
          {projectsData.map((project) => (
            <li>
              <Image width={910} height={512} src={project.previewImage || project.image} alt={`${project.name} картинка проекта`} priority />
            </li>
          ))}
        </ul> */}

        {projectsData.map((project) => (
            <div className='mb-5 p-2 xl:p-3 pb-6 bg-whiteSecondary dark:bg-darkSecondary rounded-2xl lg:flex lg:pb-2'>
              <Image className='w-full h-auto rounded-xl mb-5 lg:w-[325px] lg:mb-0' width={910} height={512} src={project.previewImage || project.image} alt={`${project.name} картинка проекта`} priority />
              <div className='px-4 lg:px-8 lg:py-5'>
                <span className='flex gap-2 items-center text-sm mb-2 text-secondTextColor'><AiOutlineCalendar className='w-4 h-auto' />{project.year} год</span>
                <h2 className='font-bold text-md lg:text-2xl mb-2 lg:mb-3 leading-[1.6]'>{project.name}</h2>
                <p className='text-sm xl:text-base mb-4'>{project.description}</p>
                <ul className='flex flex-wrap text-[12px]'>
                  {project.tools.map((tool) => (
                    <li className='mr-[0.7em] mb-[0.7em] px-[0.9em] py-[0.2em] rounded-[0.3em] bg-accentBg'>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
    </>
  );
};

export default Projects;
