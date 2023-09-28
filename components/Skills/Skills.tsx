import { skillsData } from '@/app/data/skillsData';
import { motion } from 'framer-motion';
import React from 'react'
import {SiAdobephotoshop, SiCss3, SiFigma, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiSass} from "react-icons/si";
import { BsWordpress } from 'react-icons/bs';
import { AiOutlineSmallDash } from 'react-icons/ai';
import { FaYandex } from 'react-icons/fa';

const Skills = () => {

  const activeSkillsArray = skillsData.filter((item) => {
    return item.active;
  })

  return (
    <section className='container'>
      <h2 className={`block-title`}>Мои основные навыки</h2>
      <motion.div initial="hidden"
                  whileInView="visible"
                  // variants={FadeContainer}
                  viewport={{ once: true }} className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'>
        {activeSkillsArray.map((skill, index) => {
          return <SkillsItem key={index} name={skill.name} />
        })}
      </motion.div>
    </section>
  )
}

export default Skills


type SkillsItemProps = {
  name: string,
};

const SkillsItem: React.FC<SkillsItemProps> = ({name}) => {
  const Icon = chooseIcon(name);

  return (
    <motion.div
      variants={popUp} className={s.skill}>
        <Icon className={s.image} />
        <p className={s.name}>{name}</p>
    </motion.div>
  )
}

/* To choose the Icon according to the Name */
function chooseIcon(title: string) {
  let Icon;
  switch (title) {
    case "JavaScript":
      Icon = SiJavascript;
      break;
    case "HTML":
      Icon = SiHtml5;
      break;
    case "CSS":
      Icon = SiCss3;
      break;
    case "SCSS":
      Icon = SiSass;
      break;
    case "React":
      Icon = SiReact;
      break;
    case "NextJS":
      Icon = SiNextdotjs;
      break;
    case "Figma":
      Icon = SiFigma;
      break;
    case "Photoshop":
      Icon = SiAdobephotoshop;
      break;
    case "WordPress":
      Icon = BsWordpress;
      break;
    case "Яндекс.Директ":
      Icon = FaYandex;
      break;
    default:
      Icon = AiOutlineSmallDash;
      break;
  }
  return Icon;
}
