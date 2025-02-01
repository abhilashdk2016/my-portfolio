"use client";
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import jira from "../../assets/jira.png";
import uptimer from "../../assets/uptimer.png";
import Card from '@/components/card';

interface ProjectDetails {
  title: string;
  summary: string;
  img?: any;
  link: string;
  github?: string;
}

const FeaturedProject = ({ title, summary, img, link, github}: ProjectDetails) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-black bg-white shadow-2xl lg:p-12 relative rounded-br-2xl xs:rounded-2xl xs:rounded-br-3xl p-4 flex-col sm:flex-col lg:flex-row'>
      <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-black  rounded-br-3xl' />
      {img && <Link href={link} target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>}
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='text-[#B53389] my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-black'>{summary}</p>
        <div className='mt-2 flex items-center'>
        {github && <Link href={github} target='_blank' className='w-10'>
          <FaGithub size={30} />
        </Link>}
        </div>
      </div>
    </article>
  ) 
}

const Project = ({ title, summary, img, link, github}: ProjectDetails) => {
  return (
    <article className='w-full flex flex-col items-center justify-center border border-solid border-black bg-white p-6 relative rounded-br-2xl rounded-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[104%] rounded-[2.5rem] bg-black  rounded-br-3xl' />
      {img && <Link href={link} target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>}
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='text-[#B53389] my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-black'>{summary}</p>
        <div className='mt-2 flex items-center'>
        {github && <Link href={github} target='_blank' className='w-10'>
          <FaGithub size={30} />
        </Link>}
        </div>
      </div>
    </article>
  ) 
}

const Portfolio = () => {
  return (
//     <motion.div className='h-full' initial={{ y: "-200vh" }} animate={{ y: "0" }} transition={{ duration: 1 }}>
//       <div className='md:w-[80%] flex flex-col items-center justify-around md:mx-auto w-full h-full'>
//         <div className='grid grid-cols-12 md:gap-24 lg:gap-x-8 gap-x-0 gap-8'>
//           <div className='col-span-12'>
//             <FeaturedProject title='Finance App' 
//             summary='A feature rich finance app built with Next.js with authentication, user and product management'
//              img={fp1} link='/' github='' />
//           </div>
//           <div className='lg:col-span-6 col-span-12'>
//             <Project title='Cloudforms' 
//               summary='A Cloud based React App that was developed to replace the old Desktop Application which
// was used to for Creating and Managing Government Forms by Solicitors and Clients in UK. UI is developed using ReactJS and Redux and deployed to Amazon S3 as static sites.
// • C# API’s are used to Digitally Submit the forms to Government Gateways.'
//               link='/' github='' />
//           </div>
//           <div className='lg:col-span-6 col-span-12'>
//             <Project title='Ticketing app' 
//               summary='Microservice style Ticketing App. Implemented Event Streaming using NATS Streaming Server. UI is implemented using Next JS. Used Docker and Kubernetes for deploying the app'
//               link='/' github='https://github.com/abhilashdk2016/ticketing-ms' />
//           </div>
//           <div className='col-span-12'>
//             <FeaturedProject title='Jira Clone' 
//             summary='A feature rich Jira app built with Next.js with authentication, user and product management'
//              img={fp1} link='/' github='' />
//           </div>
//           <div className='lg:col-span-6 col-span-12'>
//             <Project title='Implementation of Transactional Outbox Microservice Pattern' 
//                 summary='Implemented basics of transactional outbox microservice pattern
// • Order service GoLang API generates and inserts an order into orders table and in the same
// transaction an event is also inserted into an outbox table.
// • Another Golang program will be polling the outbox table periodically and if there are
// unprocessed events in outbox table, processes them and marks them as processed'
//                 link='/' github='https://github.com/abhilashdk2016/transactional-outbox-pattern' />
//           </div>
//           {/* <div className='col-span-6'>
//             Project - 4
//           </div> */}
//         </div>
//       </div> 
//     </motion.div>
    <motion.div className='h-full' initial={{ y: "-200vh" }} animate={{ y: "0" }} transition={{ duration: 1 }}>
      <div className='md:h-full flex flex-col mr-20% ml-20% mt-5 mb-5'>
        <div className='flex flex-wrap gap-4 justify-center'>
          <Card title='Uptimer' 
            summary='Uptimer is a project that monitors services like HTPP, MongoDB, TCP and SSL. Backend server is built using Apollo GraphQL which interacts with Postgres Database. Client side is built using Next JS. Features include creating a new monitor, pausing/deleting/edit an existing monitor.'
            img={uptimer} link='https://uptimer-client-jnur.onrender.com' github='https://github.com/abhilashdk2016/uptimer-client' 
          />
          <Card title='Cloudforms' 
              summary='A Cloud based React App that was developed to replace the old Desktop Application which
was used to for Creating and Managing Government Forms by Solicitors and Clients in UK. UI is developed using ReactJS and Redux and deployed to Amazon S3 as static sites.
• C# API’s are used to Digitally Submit the forms to Government Gateways.'
              link='/' github='' />
          <Card title='Ticketing app' 
            summary='Microservice style Ticketing App. Implemented Event Streaming using NATS Streaming Server. UI is implemented using Next JS. Used Docker and Kubernetes for deploying the app'
            link='/' github='https://github.com/abhilashdk2016/ticketing-ms' />
          <Card title='Jira Clone' 
            summary='A feature rich Jira app built with Next.js with authentication, user and product management'
             img={jira} link='http://jira-omega.vercel.app' github='https://github.com/abhilashdk2016/jira' 
          />
          <Card title='Implementation of Transactional Outbox Microservice Pattern' 
                summary='Implemented basics of transactional outbox microservice pattern
• Order service GoLang API generates and inserts an order into orders table and in the same
transaction an event is also inserted into an outbox table.
• Another Golang program will be polling the outbox table periodically and if there are
unprocessed events in outbox table, processes them and marks them as processed'
                link='/' github='https://github.com/abhilashdk2016/transactional-outbox-pattern' />
        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio