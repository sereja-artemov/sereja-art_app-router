'use client';

import Image from 'next/image';
import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const ImageWidth = 667;
  const ImageHeight = 375;

  // показывает картинку при наведении
  const mouseEnterHandler = (event: {
    target: { nextSibling: HTMLElement };
  }) => {
    const nextDomElement = event.target.nextSibling;
    if (nextDomElement.tagName === 'IMG') {
      nextDomElement.classList.remove('hidden');
    } else {
      console.error('nextDomElement не является картинкой');
    }
  };

  // перемещает картинку при наведении
  const mouseMoveHandler = (event: {
    target: { nextSibling: HTMLElement };
    pageX: number;
    pageY: number;
  }) => {
    const nextDomElement = event.target.nextSibling;
    if (nextDomElement.tagName === 'IMG') {
      nextDomElement.style.top = event.pageY - ImageHeight / 2 + 'px';
      nextDomElement.style.left = event.pageX + ImageWidth / 9 + 'px';
    } else {
      console.error('nextDomElement не является картинкой');
    }
  };

  const mouseLeaveHandler = (event: {
    target: { nextSibling: HTMLElement };
  }) => {
    const nextDomElement = event.target.nextSibling;
    if (nextDomElement.tagName === 'IMG') {
      nextDomElement.classList.add('hidden');
    } else {
      console.error('nextDomElement не является картинкой');
    }
  };

  return (
    <>
      <h1 className="mb-5 text-3xl leading-none uppercase lg:text-5xl font-boss">
        Проекты
      </h1>
      <ul>
        {projectsData.map((project, index) => (
          <li
            key={index}
            className="p-2 pb-6 mb-5 xl:p-3 bg-whiteSecondary dark:bg-darkSecondary border border-blockBorderColorLight dark:border-blockBorderColorDark rounded-2xl lg:flex items-start lg:pb-2 max-w-[1140px]"
          >
            <Image
              onMouseOver={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              onMouseMove={mouseMoveHandler}
              className="w-full h-auto rounded-xl mb-5 lg:w-[380px] lg:mb-0 hover:mix-blend-luminosity"
              width={910}
              height={512}
              src={project.previewImage || project.image}
              alt={`${project.name} картинка проекта`}
              priority
            />
            <Image
              className="w-full h-auto rounded-xl mb-5 lg:w-[45vw] absolute hidden overflow-hidden pointer-events-none z-[1001]"
              width={910}
              height={512}
              src={project.image || project.previewImage}
              alt={`${project.name} картинка проекта`}
              priority
            />
            <div className="px-4 lg:px-8 lg:py-5">
              <span className="flex items-center gap-2 mb-2 text-sm text-secondTextColor">
                <AiOutlineCalendar className="w-4 h-auto" />
                {project.year} год
              </span>
              <h2 className="mb-2 font-bold leading-normal font-boss text-md lg:text-xl lg:mb-2">
                {project.name}
              </h2>
              <p className="mb-4 text-sm leading-normal xl:text-base">
                {project.description}
              </p>
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
              {/* <div className="flex flex-wrap gap-4 shrink-0">
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
