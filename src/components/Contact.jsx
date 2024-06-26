import { CONTACT } from ".././constants/index"
import { motion } from 'framer-motion';


const Contact = () => {
  return (
    <div className="w-full h-max bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white">

    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <motion.h1 
    whileInView={{ opacity: 1, y: 0}}
    initial={{ opacity: 0, y: -100 }}
    transition={{duration: 0.5}}
    className="my-20 text-center text-4xl">Get in Touch</motion.h1>
    <div className="text-center tracking-tight">
        <motion.p 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 1}}
        className="my-4">{CONTACT.address}</motion.p>
        <motion.p 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100 }}
        transition={{duration: 1}}
        className="my-4">{CONTACT.phoneNo}</motion.p>
    </div>
    </div>
    </div>
  )
}

export default Contact
