import Image from 'next/image'
import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'


const Header = () => {
  return (
    <div className='fixed w-full top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-gray-600 lg:bg-n-8/90 lg:backdrop-blur-sm h-20 '>
        <div className='flex justify-between items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <Link href="/" className='flex items-center w-[12rem] xl:mr-8 md:mt-2'>
            <Image
            alt='logo'
            src='/brainwave-symbol.svg'
            width={52}
            height={42}
            className='max-sm:size-10 m-2 '
            />
            <p className='text-n-1 font-bold text-2xl max-lg:hidden uppercase'>ConvoLive</p>
        </Link>

        <SignedIn>
          <nav className='md:flex-between hidden w-full max-w-xs'>
          <NavItems/>
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3 mt-2">
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <MobileNav/>
          </SignedIn>
        <SignedOut>
        <button className="relative inline-flex h-12 w-24 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <Link href="sign-in">
          Login
          </Link>
          </span>
        </button>
        </SignedOut>       
      </div>
       </div>
      
   </div>
  )
}

export default Header