"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:flex-row h-full">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">
            Crafting Digital Experiences, Designing Tomorrow
          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge with a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse calculation of projects that reflect
            my commitment to excellence.
          </p>
          {/* BUTTON */}
          <div className="flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white w-full">
              View my work
            </button>
            <button>Contact me</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
