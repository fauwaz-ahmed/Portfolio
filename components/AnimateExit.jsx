"use client";
import { AnimatePresence, easeOut } from "framer-motion";
import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const AnimateExit = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b  from-blue-100 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-50"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <motion.div 
  className='h-screen w-screen fixed bg-black rounded-b-[100px] z-50' 
  animate={{height:"0vh"}} 
  exit={{height:"140vh"}} 
  transition={{duration:0.4, ease:"easeOut"}}
/>

<motion.div 
  className='fixed m-auto top-0 left-0 right-0 bottom-0 text-white text-8xl cursor-default z-60 w-fit h-fit flex items-center justify-center' 
  initial={{opacity:1}} 
  animate={{opacity:0}} 
  exit={{opacity:0}} 
  transition={{duration:0.8, ease:"easeOut"}}
>
    
  {((pathName.substring(1)).charAt(0)).toUpperCase()+pathName.substring(2)}
</motion.div>

<motion.div 
  className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-50' 
  initial={{height:"140vh"}} 
  animate={{height:"0vh", transition:{delay:0.4}}}
/>


        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default AnimateExit;
