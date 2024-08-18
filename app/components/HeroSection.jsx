"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='mt-20 py-20'>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-8 ml-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.1 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className='col-span-7 place-self-center text-center sm:text-left'
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5 xl lg:text-8xl font-extrabold">
            <div className='text-transparent bg-clip-text bg-gradient-to-r  from-red-500 via-orange-500 to-yellow-500'>
              Hello, I am{" "}
            </div>
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'App Developer',
                1000,
                'Ethical Hacker',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className=''>
            <a 
              href="/resume1.pdf" 
              download="Anirudh_P_Nayak_Resume.pdf" 
              className='inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 border-white mt-3' // Maintain button styling
            >
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download Resume
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.1 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] mt-11 relative'
        >
          <div className='col-span-5 place-self-center mt-3 lg:mt-0  '>
            <Image
              src="/images/Pfp.jpg"
              alt='hero image'
              className='absolute object-cover w-full h-full rounded-full'
              width={300} height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
