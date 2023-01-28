import React from 'react';
import { motion } from 'framer-motion';
import img from "../asset/prf.jpg"
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    
    <section id='hero' className="bg-gray-900 py-16 ">
      <div className="container mx-auto px-4 flex items-center justify-between sm:flex-row flex-col mt-8">
        <div className="w-full sm:w-1/2">
          <motion.img
            src={img}
            alt="Portfolio Image"
            className="h-64 w-64 object-cover rounded-full sm: m-auto"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="w-full sm:w-1/2 pl-4 mt-4 sm:mt-0">
          <h1 className="font-bold text-3xl text-yellow-50">Hi, I am Ali Hussnain</h1>
          <div className="text-white text-lg "><Typewriter options={{
            strings: ["A Full Stack", "Web Developer", "A Mern Developer"],
            autoStart: true,
            loop: true,
            cursor: ""
          }} /></div>
            <p className="text-gray-400 mt-4">
            A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks            </p>
          </div>
        </div>
    </section>
    
  );
};

export default Hero;
