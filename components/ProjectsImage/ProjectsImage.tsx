'use client'

import Image from 'next/image';

function ProjectsImage({project}) {
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
    <Image
      // onMouseOver={mouseEnterHandler}
      // onMouseLeave={mouseLeaveHandler}
      // onMouseMove={mouseMoveHandler}
      // className="w-full h-auto mb-5 rounded-xl hover:mix-blend-luminosity"
      className="w-full h-auto rounded-xl"
      width={910}
      height={512}
      src={project.previewImage || project.image}
      alt={`${project.name} картинка проекта`}
      priority
    />
  )
}

export default ProjectsImage