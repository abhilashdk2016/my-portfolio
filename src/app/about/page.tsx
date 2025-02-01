"use client";
import React from 'react';
import { motion } from "framer-motion";
import Skill from '@/components/skill';

const About = () => {
  return (
    <motion.div className='h-full' initial={{ y: "-200vh" }} animate={{ y: "0" }} transition={{ duration: 1 }}>
      <div className='md:h-full flex flex-col mr-20% ml-20% mt-5 mb-5'>
        <div className='md:h-[80%] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-around'>
          {/* SKILLS */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", delay: 1, duration: 0.5 }} className='max-w-[700px] flex flex-col sm:mt-10'>
            <h1 className='font-bold text-2xl m-5 text-center'>Skills</h1>
            {/* Skill list */}
            <div className='flex flex-wrap gap-4 justify-center'>
              <Skill skill={"html"}></Skill>
              <Skill skill={"css"}></Skill>
              <Skill skill={"js"}></Skill>
              <Skill skill={"ts"}></Skill>
              <Skill skill={"react"}></Skill>
              <Skill skill={"redux"}></Skill>
              <Skill skill={"reactquery"}></Skill>
              <Skill skill={"next"}></Skill>
              <Skill skill={"tailwind"}></Skill>
              <Skill skill={"jest"}></Skill>
              <Skill skill={"node"}></Skill>
              <Skill skill={"express"}></Skill>
              <Skill skill={"mongo"}></Skill>
              <Skill skill={"post"}></Skill>
              <Skill skill={"aws"}></Skill>
              <Skill skill={"k8"}></Skill>
              <Skill skill={"go"}></Skill>
              <Skill skill={"graphql"}></Skill>
              <Skill skill={"redis"}></Skill>
              <Skill skill={'optimise'}></Skill>
            </div>
          </motion.div>
          {/* EXPERIENCE */}
          <div className='max-w-[1500px] flex flex-col pb-5 md:w-[700px] lg:w-[700px]'>
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", delay: 1.5, duration: 0.5 }} className='font-bold text-2xl m-5 text-center'>Experience</motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", delay: 1.85, duration: 0.5 }} className='flex justify-around h-48'>
                {/* LEFT */}
                <div className='w-1/3'>
                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior Software Engineer</div>
                    <div className='p-3 text-white text-sm font-semibold'>2020 - PRESENT</div>
                    <div className='bg-white p-3 rounded text-fm font-semibold w-fit'>Advanced Business and Healthcare solutions</div>
                </div>
                {/* CENTER */}
                <div className='w-1/6'>
                    {/* LINE */}
                    <div className='w-1 h-full bg-black rounded relative ml-[3rem]'>
                        {/* LINE CIRCLE */}
                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2'>

                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'></div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", delay: 2, duration: 0.5 }} className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3'>
                    
                </div>
                {/* CENTER */}
                <div className='w-1/6'>
                    {/* LINE */}
                    <div className='w-1 h-full bg-black rounded relative ml-[3rem]'>
                        {/* LINE CIRCLE */}
                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2'>

                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'>
                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior Engineer</div>
                    <div className='p-3 text-white text-sm font-semibold'>2019 - 2020</div>
                    <div className='bg-white p-3 rounded text-fm font-semibold w-fit'>Harman Consulting Services</div>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", delay: 2.15, duration: 0.5 }} className='flex justify-between h-48'>
                {/* LEFT */}
                <div className='w-1/3'>
                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Consultant</div>
                    <div className='p-3 text-white text-sm font-semibold'>2014 - 2019</div>
                    <div className='bg-white p-3 rounded text-fm font-semibold w-fit'>Capgemini India Pvt. Ltd.</div>
                </div>
                {/* CENTER */}
                <div className='w-1/6'>
                    {/* LINE */}
                    <div className='w-1 h-full bg-black rounded relative ml-[3rem]'>
                        {/* LINE CIRCLE */}
                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2'>

                        </div>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'></div>
            </motion.div>
          </div>
        </div>
        <div className='flex sm:justify-center flex-col md:flex-row md:justify-between w-[90%] md:w-[60%] mx-auto rounded-xl bg-zinc-200 px-5 py-2 lg:px-2'>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", delay: 2.30, duration: 0.5 }} className='m-2'>
            <h1 className='text-xl font-bold p-1'>Education</h1>
            <p className='p-1'>Master of Computer Application</p>
            <p className='p-1'>BMS Institute of Technology</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeIn", delay: 2.45, duration: 0.5 }} className='m-2'>  
            <h1 className='text-xl font-bold p-1'>Certifications</h1>
            <p className='p-1'>Certified Kubernetes Application Developer</p>
            <p className='p-1'>June 2021 - June 2024</p>
          </motion.div>
        </div>
      </div>
      
    </motion.div>
  )
}

export default About