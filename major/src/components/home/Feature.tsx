'use client';
import { motion } from 'framer-motion';
import Para from './para';
import { HeroScrollDemo } from './scroll';

const Feature = () => {
  // Define your content items
  const contentItems = [
    {
      title: 'Video Confrencing',
      description: (
        <>
          <p className='px-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus natus blanditiis nemo? Iure molestias, repellat architecto enim minima libero dolore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique quisquam sapiente.
          </p>
        </>
      ),
      badge: 'React',
      image:
        'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Video Confrencing',
      description: (
        <>
          <p className='px-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus natus blanditiis nemo? Iure molestias, repellat architecto enim minima libero dolore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique quisquam sapiente.
          </p>
        </>
      ),
      badge: 'React',
      image:
        'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Video Confrencing',
      description: (
        <>
          <p className='px-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus natus blanditiis nemo? Iure molestias, repellat architecto enim minima libero dolore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit similique quisquam sapiente.
          </p>
        </>
      ),
      badge: 'React',
      image:
        'https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
   
    // Add more content items as needed
  ];

  return (
    <motion.div className="bg-feat h-[100rem] " initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="flex flex-col items-center md:items-start gap-20 md:flex-row justify-center" initial={{ y: -100 }} animate={{ y: 0 }} exit={{ y: -100 }}>
        <div className='hidden md:flex'>
          <HeroScrollDemo/>
        </div>
        <div className="">
          <Para content={contentItems} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Feature;
