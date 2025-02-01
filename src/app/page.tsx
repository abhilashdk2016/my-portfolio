"use client";
import Image from 'next/image';
import hero from '../assets/hero3.png';
import { motion } from "framer-motion";
import Link from 'next/link';
export default function Home() {
  return (
    <motion.div className='h-full' initial={{ y: "-200vh" }} animate={{ y: "0" }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
          <Image src={hero} alt="hero" fill className='object-contain'/>
        </div>
        <div className="md:h-1/2 lg:h-full lg:w-1/2 flex flex-col md:gap-8 justify-center items-center">
          <h1 className='text-4xl font-bold md:text-6xl'>Full Stack Developer</h1>
          <p className='text-center lg:text-left md:text-xl m-2'>Passionate self-driven individual with over 10 years of experience in facilitating engineering solutions with wide range of technology skills. Own engineering design, implementation, and delivery of products and features. Improve the scalability and robustness of our backend systems and data pipelines. Collaborate with a cross-functional team of engineers, product managers, and UX designers to develop, test and launch new features. Build, maintain and scale software development processes. Proven ability in utilising full-stack knowledge in building user centred applications.</p>
          <div className='flex m-1'>
            <Link href={"/portfolio"}>
              <button className='p-4 rounded-lg ring-black ring-1 text-white bg-black'>View My Work</button>
            </Link>
            
          </div>
        </div>
      </div>
    </motion.div>
  );
}
