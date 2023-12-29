import Image from 'next/image';
import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { projectsData } from '../data/projectsData';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import ProjectsImage from '@/components/ProjectsImage/ProjectsImage';

const Projects = () => {

  return (
    <>
      <h1 className="block-title">Проекты</h1>
      <ul>
        {projectsData.map((project, index) => (
          <li
            key={index}
            className="p-2 pb-6 mb-5 xl:p-3 block-bg border border-blockBorderColorLight dark:border-blockBorderColorDark rounded-2xl lg:flex items-start lg:pb-2 max-w-[1140px]"
          >
            <ProjectsImage project={project} />

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
              <ul className="flex flex-wrap mb-4 text-xs md:text-sm">
                {project.tools.map((tool, index) => (
                  <li
                    key={index}
                    className="mr-[0.7em] mb-[0.7em] px-[.9em] py-[0.3em] rounded-[0.3em] bg-accentBg"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 shrink-0">
                {project.links.githubLink !== undefined && (
                  <Link href={project.links.githubLink} target="_blank">
                    <BsGithub
                      className="w-[30px] h-auto hover:text-[#6767AB] hover:transition-all hover:duration-[0.2s] hover:ease-[ease-in-out] hover:scale-[1.2]"
                      title="ссылка на github"
                    />
                  </Link>
                )}
                {project.links.buildLink !== undefined && (
                  <Link href={project.links.buildLink} target="_blank">
                    <FiExternalLink
                      className="w-[30px] h-auto hover:text-[#6767AB] hover:transition-all hover:duration-[0.2s] hover:ease-[ease-in-out] hover:scale-[1.2]"
                      title="ссылка на сайт проекта"
                    />
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <section className="py-12 md:py-24 bg-coolGray-50" >
  <div className="container px-4 mx-auto">
    <div className="mb-16">
      <div className="inline-flex items-start w-full mx-auto mb-8">
        <h1 className="pt-4 text-3xl tracking-tighter font-heading xs:text-5xl sm:text-7xl md:text-8xl lg:text-10xl">Selected projects</h1>
        <span className="block mr-12 -mb-4 text-xl text-right lg:mr-8 sm:text-2xl text-coolGray-600">(21)</span>
      </div>
      <ul className="flex flex-wrap items-center -mb-2">
        <li className="mb-2 mr-2 md:mr-6"><a className="inline-block py-2.5 px-5 text-lg text-white bg-black rounded-full transition duration-100" href="#">All</a></li>
        <li className="mb-2 mr-2 md:mr-6"><a className="inline-block py-2.5 px-5 text-lg text-black hover:text-white hover:bg-black rounded-full transition duration-100" href="#">Villa</a></li>
        <li className="mb-2 mr-2 md:mr-6"><a className="inline-block py-2.5 px-5 text-lg text-black hover:text-white hover:bg-black rounded-full transition duration-100" href="#">Residance</a></li>
        <li className="mb-2"><a className="inline-block py-2.5 px-5 text-lg text-black hover:text-white hover:bg-black rounded-full transition duration-100" href="#">Apartaments</a></li>
      </ul>
    </div>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full px-4 mb-20 lg:w-1/2 lg:mb-0">
        <div>
          <a className="block mb-8 group" href="#">
            <div className="flex items-center mb-2 text-coolGray-500 group-hover:text-coolGray-600">
              <span className="text-sm">Apartament</span>
              <span className="inline-block mx-4">
                <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.896 1.772C0.896 1.632 0.924 1.50133 0.98 1.38C1.036 1.25867 1.11067 1.15133 1.204 1.058C1.30667 0.955333 1.41867 0.876 1.54 0.82C1.67067 0.764 1.806 0.736 1.946 0.736C2.086 0.736 2.21667 0.764 2.338 0.82C2.46867 0.876 2.58067 0.955333 2.674 1.058C2.77667 1.15133 2.856 1.25867 2.912 1.38C2.968 1.50133 2.996 1.632 2.996 1.772C2.996 2.052 2.89333 2.29933 2.688 2.514C2.48267 2.72867 2.23533 2.836 1.946 2.836C1.65667 2.836 1.40933 2.72867 1.204 2.514C0.998667 2.29933 0.896 2.052 0.896 1.772Z" fill="currentColor"></path>
                </svg>
              </span>
              <span className="text-sm">Girona, Spain</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b text-coolGray-500 group-hover:text-black">
              <h3 className="text-2xl tracking-tight xs:text-4xl sm:text-5xl">Bulkovka Dent</h3>
              <span className="transition duration-100 transform group-hover:rotate-45">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L2 22" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M22 20.3393V2H3.66071" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </div>
          </a>
          <a className="block mb-8 group" href="#">
            <div className="flex items-center mb-2 text-coolGray-500 group-hover:text-coolGray-600">
              <span className="text-sm">Apartament</span>
              <span className="inline-block mx-4">
                <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.896 1.772C0.896 1.632 0.924 1.50133 0.98 1.38C1.036 1.25867 1.11067 1.15133 1.204 1.058C1.30667 0.955333 1.41867 0.876 1.54 0.82C1.67067 0.764 1.806 0.736 1.946 0.736C2.086 0.736 2.21667 0.764 2.338 0.82C2.46867 0.876 2.58067 0.955333 2.674 1.058C2.77667 1.15133 2.856 1.25867 2.912 1.38C2.968 1.50133 2.996 1.632 2.996 1.772C2.996 2.052 2.89333 2.29933 2.688 2.514C2.48267 2.72867 2.23533 2.836 1.946 2.836C1.65667 2.836 1.40933 2.72867 1.204 2.514C0.998667 2.29933 0.896 2.052 0.896 1.772Z" fill="currentColor"></path>
                </svg>
              </span>
              <span className="text-sm">Girona, Spain</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b text-coolGray-500 group-hover:text-black">
              <h3 className="text-2xl tracking-tight xs:text-4xl sm:text-5xl">De Negen Linden</h3>
              <span className="transition duration-100 transform group-hover:rotate-45">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L2 22" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M22 20.3393V2H3.66071" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </div>
          </a>
          <a className="block mb-8 group" href="#">
            <div className="flex items-center mb-2 text-coolGray-600">
              <span className="text-sm">Apartament</span>
              <span className="inline-block mx-4">
                <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.896 1.772C0.896 1.632 0.924 1.50133 0.98 1.38C1.036 1.25867 1.11067 1.15133 1.204 1.058C1.30667 0.955333 1.41867 0.876 1.54 0.82C1.67067 0.764 1.806 0.736 1.946 0.736C2.086 0.736 2.21667 0.764 2.338 0.82C2.46867 0.876 2.58067 0.955333 2.674 1.058C2.77667 1.15133 2.856 1.25867 2.912 1.38C2.968 1.50133 2.996 1.632 2.996 1.772C2.996 2.052 2.89333 2.29933 2.688 2.514C2.48267 2.72867 2.23533 2.836 1.946 2.836C1.65667 2.836 1.40933 2.72867 1.204 2.514C0.998667 2.29933 0.896 2.052 0.896 1.772Z" fill="currentColor"></path>
                </svg>
              </span>
              <span className="text-sm">Girona, Spain</span>
            </div>
            <div className="flex items-center justify-between pb-4 text-black border-b">
              <h3 className="text-2xl tracking-tight xs:text-4xl sm:text-5xl">Marla Pasticceria</h3>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L2 22" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M22 20.3393V2H3.66071" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </div>
          </a>
          <a className="block mb-8 group" href="#">
            <div className="flex items-center mb-2 text-coolGray-500 group-hover:text-coolGray-600">
              <span className="text-sm">Apartament</span>
              <span className="inline-block mx-4">
                <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.896 1.772C0.896 1.632 0.924 1.50133 0.98 1.38C1.036 1.25867 1.11067 1.15133 1.204 1.058C1.30667 0.955333 1.41867 0.876 1.54 0.82C1.67067 0.764 1.806 0.736 1.946 0.736C2.086 0.736 2.21667 0.764 2.338 0.82C2.46867 0.876 2.58067 0.955333 2.674 1.058C2.77667 1.15133 2.856 1.25867 2.912 1.38C2.968 1.50133 2.996 1.632 2.996 1.772C2.996 2.052 2.89333 2.29933 2.688 2.514C2.48267 2.72867 2.23533 2.836 1.946 2.836C1.65667 2.836 1.40933 2.72867 1.204 2.514C0.998667 2.29933 0.896 2.052 0.896 1.772Z" fill="currentColor"></path>
                </svg>
              </span>
              <span className="text-sm">Girona, Spain</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b text-coolGray-500 group-hover:text-black">
              <h3 className="text-2xl tracking-tight xs:text-4xl sm:text-5xl">Haupstadt</h3>
              <span className="transition duration-100 transform group-hover:rotate-45">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L2 22" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M22 20.3393V2H3.66071" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </div>
          </a>
          <a className="block mb-8 group" href="#">
            <div className="flex items-center mb-2 text-coolGray-500 group-hover:text-coolGray-600">
              <span className="text-sm">Apartament</span>
              <span className="inline-block mx-4">
                <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.896 1.772C0.896 1.632 0.924 1.50133 0.98 1.38C1.036 1.25867 1.11067 1.15133 1.204 1.058C1.30667 0.955333 1.41867 0.876 1.54 0.82C1.67067 0.764 1.806 0.736 1.946 0.736C2.086 0.736 2.21667 0.764 2.338 0.82C2.46867 0.876 2.58067 0.955333 2.674 1.058C2.77667 1.15133 2.856 1.25867 2.912 1.38C2.968 1.50133 2.996 1.632 2.996 1.772C2.996 2.052 2.89333 2.29933 2.688 2.514C2.48267 2.72867 2.23533 2.836 1.946 2.836C1.65667 2.836 1.40933 2.72867 1.204 2.514C0.998667 2.29933 0.896 2.052 0.896 1.772Z" fill="currentColor"></path>
                </svg>
              </span>
              <span className="text-sm">Girona, Spain</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b text-coolGray-500 group-hover:text-black">
              <h3 className="text-2xl tracking-tight xs:text-4xl sm:text-5xl">Pablo Faucet</h3>
              <span className="transition duration-100 transform group-hover:rotate-45">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L2 22" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M22 20.3393V2H3.66071" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </div>
          </a>
          <a className="block mb-8 group" href="#">
            <div className="flex items-center mb-2 text-coolGray-500 group-hover:text-coolGray-600">
              <span className="text-sm">Apartament</span>
              <span className="inline-block mx-4">
                <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.896 1.772C0.896 1.632 0.924 1.50133 0.98 1.38C1.036 1.25867 1.11067 1.15133 1.204 1.058C1.30667 0.955333 1.41867 0.876 1.54 0.82C1.67067 0.764 1.806 0.736 1.946 0.736C2.086 0.736 2.21667 0.764 2.338 0.82C2.46867 0.876 2.58067 0.955333 2.674 1.058C2.77667 1.15133 2.856 1.25867 2.912 1.38C2.968 1.50133 2.996 1.632 2.996 1.772C2.996 2.052 2.89333 2.29933 2.688 2.514C2.48267 2.72867 2.23533 2.836 1.946 2.836C1.65667 2.836 1.40933 2.72867 1.204 2.514C0.998667 2.29933 0.896 2.052 0.896 1.772Z" fill="currentColor"></path>
                </svg>
              </span>
              <span className="text-sm">Girona, Spain</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b text-coolGray-500 group-hover:text-black">
              <h3 className="text-2xl tracking-tight xs:text-4xl sm:text-5xl">Sauvon</h3>
              <span className="transition duration-100 transform group-hover:rotate-45">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L2 22" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M22 20.3393V2H3.66071" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </div>
          </a>
          <a className="block group" href="#">
            <div className="flex items-center mb-2 text-coolGray-500 group-hover:text-coolGray-600">
              <span className="text-sm">Apartament</span>
              <span className="inline-block mx-4">
                <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.896 1.772C0.896 1.632 0.924 1.50133 0.98 1.38C1.036 1.25867 1.11067 1.15133 1.204 1.058C1.30667 0.955333 1.41867 0.876 1.54 0.82C1.67067 0.764 1.806 0.736 1.946 0.736C2.086 0.736 2.21667 0.764 2.338 0.82C2.46867 0.876 2.58067 0.955333 2.674 1.058C2.77667 1.15133 2.856 1.25867 2.912 1.38C2.968 1.50133 2.996 1.632 2.996 1.772C2.996 2.052 2.89333 2.29933 2.688 2.514C2.48267 2.72867 2.23533 2.836 1.946 2.836C1.65667 2.836 1.40933 2.72867 1.204 2.514C0.998667 2.29933 0.896 2.052 0.896 1.772Z" fill="currentColor"></path>
                </svg>
              </span>
              <span className="text-sm">Girona, Spain</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b text-coolGray-500 group-hover:text-black">
              <h3 className="text-2xl tracking-tight xs:text-4xl sm:text-5xl">AOC Block</h3>
              <span className="transition duration-100 transform group-hover:rotate-45">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L2 22" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M22 20.3393V2H3.66071" stroke="currentColor" stroke-width="3.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2">
        {/* <img className="block w-full mx-auto lg:max-w-md xl:max-w-lg lg:mr-0" src="asitrastudio-assets/projects/photo-view4.png" alt=""> */}
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Projects;
