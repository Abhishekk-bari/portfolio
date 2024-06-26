import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name="about" 
    className="w-full h-min bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
            </p>
        </div>

        <motion.p 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{duration: 0.5}}
        className="text-xl mt-20">
      I am always with a passionate to learn new languages.
        My journey began with a curiosity for creating visually appealing and responsive websites that seamlessly blend design with functionality. 
            I have a solid foundation in HTML, CSS,and JavaScript,and I am constantly exploring new technologies to stay on the cutting edge of frontend development. During my academic journey, I had the opportunity to work on projects that honed my skills in building modern and intuitive user interfaces. 
            am particularly enthusiastic about creating seamless and engaging user experiences, and I am eager to contribute my skills to real-world projects.
      </motion.p>
        
    </div>
    </div>
  )
}

export default About;
