import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

interface ProjectDetails {
    title: string;
    summary: string;
    img?: any;
    link: string;
    github?: string;
  }

const Card = ({ title, summary, img, link, github}: ProjectDetails) => {
  return (
    <motion.div className='w-[400px] h-auto  bg-white/20 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-5 flex flex-col justify-evenly' whileHover={{ boxShadow: "0px 0px 14px rgb(0,0,0)" }}>
        {/* Image */}
        {
            img && <Link href={link} target='_blank'
                className='w-full overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
        }
        <div className='p-2'>
            {/* Heading */}
            <h2 className='text-2xl font-bold mb-4 md:text-white p-2 text-black sm:text-black'>{title}</h2>
            {/* Description */}
            <p className='text-sm text-black p-2'>{summary}</p>
        </div>
        <div className='flex-end flex flex-row justify-center'>
            {github && <Link role='link' href={github} target='_blank' className='w-10  pl-2'>
                <FaGithub size={30} />
            </Link>}
        </div>
    </motion.div>
  )
}

export default Card