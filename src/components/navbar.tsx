"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import NavLink from './navlink';
import { motion } from 'framer-motion';

const links = [
    { url: "/", title: "Home"},
    { url: "/about", title: "About"},
    { url: "/portfolio", title: "Portfolio"}
]

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariant = {
    closed: {
        rotate: 0,
    },
    opened: {
        rotate: 45,
        backgroundColor: "rgb(255,255,255)"
    }
  }
  const centerVariant = {
    closed: {
        opacity: 1,
    },
    opened: {
        opacity: 0,
    }
  }
  const bottomVariant = {
    closed: {
        rotate: 0,
    },
    opened: {
        rotate: -45,
        backgroundColor: "rgb(255,255,255)"
    }
  }

  const listVariants = {
    closed: {
        x: "100vw"
    },
    opened: {
        x:0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
        }
    }
  }

  const listItemVariants = {
    closed: {
        x: -10,
        opacity: 0
    },
    opened: {
        x: 0,
        opacity: 1
    }
  }
  return (
    <div role='navigation' className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
        {/* LINKS */}
        <div className='hidden md:flex gap-4 w-1/3'>
            {
                links.map(link => (
                    <NavLink link={link} key={link.url} />
                ))
            }
        </div>
        {/* Logo */}
        <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
            <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
                <span className='text-white mr-1'>My</span>
                <span className='w-20 h-8 rounded bg-white text-black  flex items-center justify-center'>Portfolio</span>
            </Link>
        </div>
        {/* Social Icons */}
        <div className='hidden md:flex gap-4 w-1/3'>
            <Link href={"https://github.com/abhilashdk2016"}>
                <Image src={github} alt='github' width={24} height={24} />
            </Link>
            <Link href={"https://www.linkedin.com/in/abhilashdk"}>
                <Image src={linkedin} alt='linkedin' width={24} height={24} />
            </Link>
            <Link href={"/"}>
                <Image src={instagram} alt='instagram' width={24} height={24} />
            </Link>
            <Link href={"/"}>
                <Image src={facebook} alt='facebook' width={24} height={24} />
            </Link>
        </div>
        <div className='md:hidden'>
            <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen(!open)}>
                <motion.div variants={topVariant} animate={ open ? "opened" : "closed" } className={`w-10 h-1 bg-black rounded origin-left`}></motion.div>
                <motion.div variants={centerVariant} animate={ open ? "opened" : "closed" } className={`w-10 h-1 bg-black rounded`}></motion.div>
                <motion.div variants={bottomVariant} animate={ open ? "opened" : "closed" } className={`w-10 h-1 bg-black rounded origin-left`}></motion.div>
            </button>
            {
                open 
                ?
                    <motion.div  variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'>
                    {
                        links.map(link => (
                            <motion.div variants={listItemVariants} key={link.url}>
                                <Link href={link.url} >{link.title}</Link>
                            </motion.div>
                        ))
                    }
                    </motion.div>
                : null

            }
        </div>
    </div>
  )
}

export default Navbar