"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import BrainAnimate from "@/components/BrainAnimate";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef()
   //it is use to store the values betwn thw renders

  const {scrollYProgress} = useScroll({container:containerRef})
  console.log(scrollYProgress)
  return (
    <motion.div
      className="h-full "
      
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT-CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold tracking-widest">BIOGRAPHY</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              porro ut soluta beatae vel impedit, laudantium provident fugiat,
              magni omnis magnam! Amet, labore obcaecati! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptatem eveni.
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur a.
            </span>
          </div>
          {/* SKILLS */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold tracking-widest">SKILLS</h1>
            {/* SKILL LIST */}
            <div className=" flex gap-4 flex-wrap">
              <div className="p-2 rounded bg-black text-white flex justify-center items-center hover:bg-white hover:text-black ring-1 ring-black cursor-pointer">
                Java
              </div>
              <div className="p-2 rounded bg-black text-white flex justify-center items-center hover:bg-white hover:text-black ring-1 ring-black cursor-pointer">
                HTML
              </div>
              <div className="p-2 rounded bg-black text-white flex justify-center items-center hover:bg-white hover:text-black ring-1 ring-black cursor-pointer">
                CSS
              </div>
              <div className="p-2 rounded bg-black text-white flex justify-center items-center hover:bg-white hover:text-black ring-1 ring-black cursor-pointer">
                Javascript
              </div>
              <div className="p-2 rounded bg-black text-white flex justify-center items-center hover:bg-white hover:text-black ring-1 ring-black cursor-pointer">
                SQL
              </div>

              <div className="p-2 rounded bg-black text-white flex justify-center items-center hover:bg-white hover:text-black ring-1 ring-black cursor-pointer">
                React.js
              </div>
              <div className="p-2 rounded bg-black text-white flex justify-center items-center hover:bg-white hover:text-black ring-1 ring-black cursor-pointer">
                TailwindCSS
              </div>
              <div className="p-2 rounded bg-black text-white flex justify-center items-center hover:bg-white hover:text-black ring-1 ring-black cursor-pointer">
                Next.js
              </div>
              <div className="p-2 rounded bg-black text-white flex justify-center items-center hover:bg-white hover:text-black ring-1 ring-black cursor-pointer">
                Framer Motion
              </div>
            </div>
          </div>
          {/* EXPERIENCE */}
          <div className="flex flex-col justify-center">
            <h1 className="font-bold tracking-widest pb-24">EXPERIENCE</h1>

            {/* EXPERIENCE-LIST */}
            <div className="">
              {/* EXPERIENCE-LIST-ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* job-title */}
                  <div className="font-semibold bg-white rounded  p-3 h-fit w-fit ">
                    Senior Software Developer
                  </div>
                  {/* job-desc */}
                  <div className="p-3 italic">
                    Mentoring Junior Developer is the best part.
                  </div>
                  {/* job-duration */}
                  <div className="p-3 font-semibold text-red-400 text-sm">
                    2024 - present
                  </div>
                  {/* job-company */}
                  <div className="font-semibold bg-white rounded  p-3 text-sm w-fit">
                    Apple
                  </div>
                </div>
                {/* MIDDLE */}
                <div className="w-1/6 flex items-center justify-center">
                  {/* line with relative positioning */}
                  <div className="relative w-1 h-full bg-gray-700">
                    {/* circle positioned absolutely at the top center */}
                    <div className="absolute -top-2 -left-2 w-5 h-5 bg-white ring-1 ring-red-400 rounded-full"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE-LIST-ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* MIDDLE */}
                <div className="w-1/6 flex items-center justify-center">
                  {/* line with relative positioning */}
                  <div className="relative w-1 h-full bg-gray-700">
                    {/* circle positioned absolutely at the top center */}
                    <div className="absolute -top-2 -left-2 w-5 h-5 bg-white ring-1 ring-red-400 rounded-full"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* job-title */}
                  <div className="font-semibold bg-white rounded  p-3 h-fit w-fit">
                    Senior Software Developer
                  </div>
                  {/* job-desc */}
                  <div className="p-3 italic">
                    Mentoring Junior Developer is the best part.
                  </div>
                  {/* job-duration */}
                  <div className="p-3 font-semibold text-red-400 text-sm">
                    2024 - present
                  </div>
                  {/* job-company */}
                  <div className="font-semibold bg-white rounded  p-3 text-sm w-fit">
                    Apple
                  </div>
                </div>
              </div>
              {/* EXPERIENCE-LIST-ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* job-title */}
                  <div className="font-semibold bg-white rounded  p-3 h-fit w-fit ">
                    Senior Software Developer
                  </div>
                  {/* job-desc */}
                  <div className="p-3 italic">
                    Mentoring Junior Developer is the best part.
                  </div>
                  {/* job-duration */}
                  <div className="p-3 font-semibold text-red-400 text-sm">
                    2024 - present
                  </div>
                  {/* job-company */}
                  <div className="font-semibold bg-white rounded  p-3 text-sm w-fit">
                    Apple
                  </div>
                </div>
                {/* MIDDLE */}
                <div className="w-1/6 flex items-center justify-center">
                  {/* line with relative positioning */}
                  <div className="relative w-1 h-full bg-gray-700">
                    {/* circle positioned absolutely at the top center */}
                    <div className="absolute -top-2 -left-2 w-5 h-5 bg-white ring-1 ring-red-400 rounded-full"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* SVG-CONTAINER */}
        <div className="hidden lg:block w-1/3  xl:1/2 z-70 h-[calc(100vh-7rem)] sticky top-0" >
        <BrainAnimate scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </motion.div>
  );
}; 

export default AboutPage;
