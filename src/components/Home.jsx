import React from 'react';
import CircleImg from '../assets/CircleImg-black.png';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const container= (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay},
    },
});

const Home = () => {
  return (
    <div name="home" 
    className="h-screen w-full  bg-gradient-to-b from-black  via-black to-gray-800">
        
        <div className="max-w-screen-lg mx-auto flex flex-col items-center 
        justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <motion.h2 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-6xl font-bold text-violet-500">
                    Hi, I'm Full Stack Developer
                </motion.h2>
                <motion.p 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="text-gray-100 py-4 max-w-md">
                    I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results.
                </motion.p>

                <div>
                    <motion.button 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="group text-white w-fit px-6 py-3 my-3 flex item-center rounded-md
                    bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Project 
                        <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                    </motion.button>
                </div>
            </div>

            <div>
                <motion.img 
                initial={{x: 100, opacity: 0 }}
                animate={{ x:0, opacity: 1}}
                transition={{ duration: 1, delay: 1.2}}
                src={CircleImg} alt="my profile" className="rounded-2xl mx-auto w-900" />
            </div>
        </div>
    </div>
)
}

export default Home;
