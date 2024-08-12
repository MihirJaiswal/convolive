import Image from 'next/image'
import React from 'react'
import HomeNav from './HomeNav'
import HomeMobileNav from './HomeMobileNav'
import img from '../../../public/brainwave-symbol.svg'

const HomeHeader = () => {
  return (
    <div className='fixed w-full top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm'>
        <div className='flex justify-between items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <a href="#hero" className='flex items-center w-[12rem] xl:mr-8'>
            <Image
            alt='logo'
            src={img}
            width={52}
            height={42}
            loading='lazy'
            className='max-sm:size-10 m-2'
            />
            <p className='text-n-1 font-bold text-2xl max-lg:hidden uppercase'>ConvoLive</p>
        </a>
        <div>
        <HomeNav/>
        </div>
        
      <div className='flex-between gap-5'>
         <HomeMobileNav/>
      </div>
        </div>
       
    
    </div>
  )
}

export default HomeHeader