'use client';

import Image from 'next/image';
import React from 'react';
import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlineRead,
} from 'react-icons/ai';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  return (
    <>
      <h1 className="mb-5 text-3xl leading-none uppercase lg:text-5xl font-boss">
        Проекты
      </h1>
      {/* <ul>
          {projectsData.map((project) => (
            <li>
              <Image width={910} height={512} src={project.previewImage || project.image} alt={`${project.name} картинка проекта`} priority />
            </li>
          ))}
        </ul> */}
      <ul>
        {projectsData.map((project, index) => (
          <li
            key={index}
            className="p-2 pb-6 mb-5 xl:p-3 bg-whiteSecondary dark:bg-darkSecondary border border-blockBorderColorLight dark:border-blockBorderColorDark rounded-2xl lg:flex items-start lg:pb-2 max-w-[1140px]"
          >
            <Image
              className="w-full h-auto rounded-xl mb-5 lg:w-[35%] lg:mb-0"
              width={910}
              height={512}
              src={project.previewImage || project.image}
              alt={`${project.name} картинка проекта`}
              priority
            />
            <div className="px-4 lg:px-8 lg:py-5">
              <span className="flex items-center gap-2 mb-2 text-sm text-secondTextColor">
                <AiOutlineCalendar className="w-4 h-auto" />
                {project.year} год
              </span>
              <h2 className="font-bold text-md lg:text-xl mb-2 lg:mb-2 leading-normal">
                {project.name}
              </h2>
              <p className="mb-4 text-sm xl:text-base leading-normal">{project.description}</p>
              <ul className="flex flex-wrap text-sm">
                {project.tools.map((tool, index) => (
                  <li
                    key={index}
                    className="mr-[0.7em] mb-[0.7em] px-[.9em] py-[0.3em] rounded-[0.3em] bg-accentBg"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
              {/* <div className="flex gap-4 flex-wrap shrink-0">
                {projectsData.links.githubLink !== undefined && (
                  <Link href={projectsData.links.githubLink} target="_blank">
                    <BsGithub
                      className="w-[30px] h-auto hover:text-[#6767AB] hover:transition-all hover:duration-[0.2s] hover:ease-[ease-in-out] hover:scale-[1.2]"
                      title="github иконка"
                    />
                  </Link>
                )}
                {projectsData.links.buildLink !== undefined && (
                  <Link href={projectsData.links.buildLink} target="_blank">
                    <FiExternalLink
                      className="w-[30px] h-auto hover:text-[#6767AB] hover:transition-all hover:duration-[0.2s] hover:ease-[ease-in-out] hover:scale-[1.2]"
                      title="build иконка"
                    />
                  </Link>
                )}
              </div> */}
            </div>
          </li>
        ))}
      </ul>

    </>
  );
};

export default Projects;
