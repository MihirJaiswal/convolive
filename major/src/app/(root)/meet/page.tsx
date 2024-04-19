import { MeetingTypeList } from '@/components/MeetingTypeList';
import React from 'react'

function Home() {
  const now = new Date();
  const time =  now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' })).format(now);
  return (
      <section className='flex size-full flex-col text-white'>
        <div className='h-[240px] w-full rounded-[20px] bg-black bg-cover border border-gray-700 '>
        <div className="h-full w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_left,transparent_40%,black)]"></div>
      <div className='flex h-hull flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
<h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base'>
  Next Meet at: 6:09 PM
</h2>
<div className='flex flex-col gap-2 mt-20 md:mt-8'>
  <h1 className='text-4xl font-extrabold lg:text-7xl'>
    {time}
  </h1>
  <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
</div>
</div>
    </div>
        </div> 
   
        <div className='mt-4'>
          <MeetingTypeList/>
        </div>
        
          

      </section>
  )
}

export default Home