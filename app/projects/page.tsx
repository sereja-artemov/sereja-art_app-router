'use client'

import Image from 'next/image';
import React from 'react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  return (
    <>
      <h1 className='mb-5 text-3xl lg:text-5xl leading-none uppercase font-boss'>Проекты</h1>
        <ul>
          {projectsData.map((project) => (
            <li>
              <Image width={910} height={512} src={project.previewImage || project.image} alt={`${project.name} картинка проекта`} priority />
            </li>
          ))}
        </ul>
    </>
  );
};

export default Projects;
