'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiWebpack, 
  SiPostgresql, 
  SiMongodb, 
  SiMysql, 
  SiRedis, 
  SiKubernetes, 
  SiJavascript, 
  SiCss3, 
  SiTypescript,
  SiHtml5,
  SiReact,
  SiRedux,
  SiReactquery,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  //SiRabbitmq,
  SiJest,
  SiTailwindcss
} from "react-icons/si";
import { GrOptimize } from "react-icons/gr";
import { FaGolang, FaAws } from "react-icons/fa6";
import { LiaNode } from "react-icons/lia";
const skillsAndImages = [
  {
    skill: "js", title: "JavaScript", icon: <SiJavascript size={100}></SiJavascript>
  },
  {
    skill: "ts", title: "TypeScript", icon: <SiTypescript size={100}></SiTypescript>
  },
  {
    skill: "go", title: "GoLang", icon: <FaGolang size={100}></FaGolang>
  },
  {
    skill: "html", title: "HTML 5", icon: <SiHtml5 size={100}></SiHtml5>
  },
  {
    skill: "react", title: "ReactJS", icon: <SiReact size={100}></SiReact>
  },
  {
    skill: "reactquery", title: "React Query", icon: <SiReactquery size={100}></SiReactquery>
  },
  {
    skill: "redux", title: "Redux", icon: <SiRedux size={100}></SiRedux>
  },
  {
    skill: "redis", title: "Redis", icon: <SiRedis size={100}></SiRedis>
  },
  {
    skill: "css", title: "CSS", icon: <SiCss3 size={100}></SiCss3>
  },
  {
    skill: "k8", title: "Kubernetes", icon: <SiKubernetes size={100}></SiKubernetes>
  },
  {
    skill: "mysql", title: "MySQL", icon: <SiMysql size={100}></SiMysql>
  },
  {
    skill: "post", title: "PostgreSQL", icon: <SiPostgresql size={100}></SiPostgresql>
  },
  {
    skill: "webpack", title: "Webpack", icon: <SiWebpack size={100}></SiWebpack>
  },
  {
    skill: "mongo", title: "MongoDB", icon: <SiMongodb size={100}></SiMongodb>
  },
  {
    skill: "aws", title: "AWS", icon: <FaAws size={100}></FaAws>
  },
  {
    skill: "next", title: "Next JS", icon: <SiNextdotjs size={100}></SiNextdotjs>
  },
  {
    skill: "node", title: "Node JS", icon: <LiaNode size={100}></LiaNode>
  },
  {
    skill: "express", title: "Express JS", icon: <SiExpress size={100}></SiExpress>
  },
  {
    skill: "graphql", title: "GraphQL", icon: <SiGraphql size={100}></SiGraphql>
  },
  {
    skill: "jest", title: "Jest/Mocha", icon: <SiJest size={100}></SiJest>
  },
  {
    skill: "tailwind", title: "Tailwind CSS", icon: <SiTailwindcss size={100}></SiTailwindcss>
  },
  {
    skill: "optimise", title: "Web Optimization", icon: <GrOptimize size={100}></GrOptimize>
  },
]

const Skill = ({ skill }: { skill: string}) => {
  const obj: any = skillsAndImages.filter(x => x.skill === skill)[0];
  return (
    <motion.div className='rounded-xl items-center justify-center gap-x-3 border bg-zinc-200 px-5 py-2 lg:px-2'
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(0,0,0)",
        background: 'white',
        color: 'black'
      }}
    >
      {obj.icon}
      <p className='text-center m-1'>{obj.title}</p>
    </motion.div>
  )
}

export default Skill