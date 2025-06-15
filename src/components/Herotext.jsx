import React from 'react';
import { FlipWords } from './FlipWords';

import { motion } from 'motion/react';
 // Assuming Rocket is a component that renders the rocket animation

export default function Herotext() {
  const variantes = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      
      <div className=" flex-col md:flex hidden c-space">
        <motion.h1 className="text-white font-medium text-4xl "
        variants={variantes}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        >Hi, I'm <b>Saran Kumar</b></motion.h1>
        <div className="flex flex-col items-start">
          <motion.p className="text-4xl text-neutral-300"
          variants={variantes}
        initial="hidden"
        animate="visible"
        transition={{  delay: 0.7 }}>
            B.Tech Student at <b> GVP - Rushikonda </b>
          </motion.p>
          <motion.div className="text-3xl font-bold text-white"
            variants={variantes}
        initial="hidden"
        animate="visible"
        transition={{  delay: 0.9 }}>
            <FlipWords words={["Focused", "Determined", "Learner", "Future Entrepreneur"]} />
          </motion.div>
        </div>
        <motion.p className="text-4xl font-medium text-neutral-300"  variants={variantes}
        initial="hidden"
        animate="visible"
        transition={{  delay: 1.1 }}>
          Passionate about Web Development & Innovation
        </motion.p>
      </div>

      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p className="text-4xl font-medium "
          variants={variantes}
        initial="hidden"
        animate="visible"
        transition={{  delay: 1}}
        >Hi, I'm Saran Kumar<br />B.Tech Student at GVP - Rushikonda</motion.p>
        <div>
          <motion.p className="text-xl text-neutral-300"
            variants={variantes}
        initial="hidden"
        animate="visible"
        transition={{  delay: 1.2 }}>B.Tech Student at GVP - Rushikonda</motion.p>
          
          <motion.p className="text-xl text-neutral-300"
            variants={variantes}
        initial="hidden"
        animate="visible"
        transition={{  delay: 1.4 }}
        >Learning, Building & Chasing Big Dreams</motion.p>
        <motion.div className="text-white font-black text-3xl"
            variants={variantes}
        initial="hidden"
        animate="visible"
        transition={{  delay: 1.6 }}>
            <FlipWords words={["Coding", "Creating", "Entrepreneurship"]} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
