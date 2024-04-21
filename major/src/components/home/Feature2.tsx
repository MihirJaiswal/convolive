'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CardHoverEffectDemo } from "@/components/home/Goat";

const Feature2 = () => {
  return (
    <div className='bg-ltob'> 
      <div className='text-center flex flex-col gap-4 items-center justify-center mb-10'>
        <motion.h1 
          initial={{ opacity: 0, y: -50, scale: 0.7 }} 
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ scale: 1.1, transition: { duration: 0.9 }, opacity: 1, y: -10 }}
          className="mb-12 text-3xl font-extrabold text-white dark:text-white md:text-5xl lg:text-6xl text-center mt-12 "
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-400 from-purple-600 text-center">Better Data  </span> 
           Scalable.
        </motion.h1>
       
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 50 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        whileInView={{ scale: 1.1, transition: { duration: 0.9 }, opacity: 1, y: 0 }}
      >
        <CardHoverEffectDemo />
      </motion.div>
    </div>
  );
}

export default Feature2;
