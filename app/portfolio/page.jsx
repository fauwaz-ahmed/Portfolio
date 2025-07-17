"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  // First declare the items array
  const items = [
    {
      id: 1,
      title: "Portfolio",
      color: "from-blue-300 to-violet-300",
      desc: "•	Built with Next.js, Tailwind CSS, and Framer Motion for animations • Implemented responsive design for all devices •	Deployed on Vercel with CI/CD pipeline,",
      img: "/porfolioimg.jpg", // Replace with your actual image path
      link: "https://portfolio-indol-theta-42.vercel.app/",
    },
    {
      id: 2,
      title: "URL Shortener",
      color: "from-violet-300 to-purple-300",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, voluptatibus corporis. Laudantium.",
      img: "/url.jpg",
      link: "https://link-shortener-liard.vercel.app/",
    },
    {
      id: 3,
      title: "E-commerce",
      color: "from-purple-300 to-pink-300",
      desc: "• Coming-Soon • In-Progress",
      img: "/torapril28.jpg",
      link: "https://e-commerce-fawn-pi-21.vercel.app/",
    },
  ];

  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ target: containerRef });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(items.length - 1) * 100}%`]
  );

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Header section */}
      <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-6xl md:text-8xl text-center">
        My Works
      </div>

      {/* Horizontal scrolling section */}
      <div className="h-[300vh]" ref={containerRef}>
        <div className="sticky top-0 h-screen w-screen overflow-hidden">
          <motion.div className="flex h-full w-full" style={{ x }}>
            {items.map((item) => (
              <div
                className={`h-full w-full flex-shrink-0 flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  {/* Image section */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-96">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover rounded-xl"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content section */}
                  <div className="w-full md:w-1/2 space-y-6 text-black">
                    <h1 className="text-3xl md:text-5xl font-bold">
                      {item.title}
                    </h1>
                    <p className="text-lg md:text-xl">{item.desc}</p>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-white text-black rounded-lg hover:bg-black 
                      hover:text-white transition-colors"
                    >
                      See Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-12 items-center justify-center text-center">
        <h1 className="text-8xl">Do You Have A Project</h1>

        <div className="relative">
          <motion.svg
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[300px] md:h-[300px] "
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                • Front-end Developer • Software Developer • Analyst
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 absolute md:w-20 md:h-20 top-0 left-0 right-0 bottom-0 m-auto text-white bg-black rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
