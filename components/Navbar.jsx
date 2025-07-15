"use client";
import React from "react";
// import { IoMenu } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navlinks from "./Navlinks";
import { motion, stagger } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const menuVarients={
  closed:{x:"100vw"},
  opened:{
    x:0,
  
  },
  
}

const menuitems={
  closed:{x:-10,
    opacity:0,

  },
  opened:{
    x:0,
    opacity:1,
  },
}
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-32 2xl:px-64">
      {/* MOBILE */}

      {/* logo */}
      <div className=" w-1/3 md:hidden">
        <Link href={"/"} className="flex gap-2 text-xl">
          <div className="font-bold tracking-widest"> Fauwaz</div>{" "}
          <div className=""> Ahmed</div>
        </Link>
      </div>

      {/* Responsive Menu */}
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="relative cursor-pointer md:hidden z-50"
        onClick={() => setOpen((prev) => !prev)}
      ></Image>
      {open && (
        <motion.div variants={menuVarients} initial="closed" animate="opened" className="absolute bg-black  text-white  h-[calc(100vh-6rem)] top-24 left-0 w-screen gap-8 flex items-center flex-col justify-center text-2xl z-10">
         
          {links.map((link) => (
             <motion.div className="" variants={menuitems} initial="closed" animate="opened" key={link.title}>
            <Link href={link.url} >
              {link.title}
            </Link>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Large Screens */}
      {/* Menu */}

      <div className="hidden md:flex w-1/3 flex flex-row text-black justify-between">
      {
        links.map((link)=>(
          <Navlinks link={link} key={link.title}/>
        ))
      }
      </div>
      {/* logo */}
         <div className=" hidden md:flex w-1/3 justify-center items-center">
        <Link href={"/"} className="flex gap-2 text-2xl">
          <div className="font-bold tracking-widest"> Fauwaz</div>{" "}
          <div className=""> Ahmed</div>
        </Link>
      </div>

      {/* Socials */}
      <div className="hidden w-1/3 md:flex items-center gap-3 justify-center gap-5">
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/in/fauwaz-ahmed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ width: 24, height: 24 }} />
        </a>
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/in/fauwaz-ahmed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ width: 24, height: 24 }} />
        </a>
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/in/fauwaz-ahmed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ width: 24, height: 24 }} />
        </a>
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/in/fauwaz-ahmed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ width: 24, height: 24 }} />
        </a>
        <a
          className="cursor-pointer"
          href="https://www.linkedin.com/in/fauwaz-ahmed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={{ width: 24, height: 24 }} />
        </a>
       
       
      </div>
    </div>
  );
};

export default Navbar;
