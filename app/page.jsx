"use client";
import Image from "next/image";
// import { useRouter } from "next";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col px-2 sm:px-4 md:px-20 lg:px-32 2xl:px-40 lg:flex-row">
        {/* IMAGE CONTAINER */}
        <div className=" h-1/2 lg:h-full lg:w-1/2  relative rounded-full">
          <Image
            src="/profile.jpg"
            alt="profile pic"
            fill
            className="object-cover "
          ></Image>
        </div>

        {/* TITLE */}
        <div
          className="h-1/2 relative flex flex-col items-center justify-center gap-5 lg:h-full lg:w-1/2
      lg:flex-col relative rounded-full lg:text-center"
        >
          <div className="text-2xl font-bold tracking-widest lg:text-3xl">
            <h1>FullStack Web Developer</h1>
          </div>
          <div className="text-md lg:text-center ">
            <p>
              Motivated Computer Science student (CGPA: 7.34) with strong
              foundations in Java, JavaScript, and Fullstack Development
              (Next.js, React, MongoDB). Passionate about problem-solving, Agile
              methodologies, and building scalable web applications. Seeking
              opportunities to contribute to TCS’s innovative projects.
            </p>
          </div>

          {/* <button> */}
          <div className="flex gap-4">
            <button className="p-2 rounded-lg ring-1 ring-black bg-black text-white cursor-pointer">
              My Work
            </button>
            <button
              className="p-2 rounded-lg ring-1 ring-black cursor-pointer "
              onClick={handleClick}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
