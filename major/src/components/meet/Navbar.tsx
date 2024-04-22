'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

function Navbar() {

  const pathname = usePathname();

  return (
    <nav className='flex flex-between fixed z-50 w-full bg-black px-6 py-4 lg:px-10 border-b border-gray-700'>
     <Link href='/' className='flex items-center gap-1'>
     <Image
      src='/icons/logo.svg'
      width={42}
      height={42}
      alt='logo'
      className='max-sm:size-10'
      />
      <p className='text-[21px] font-bold text-white max-sm:hidden px-2 mt-1'>ConvoLive</p>
     </Link>

      <div className='flex-between gap-5'>
        <SignedIn>
          <UserButton/>
        </SignedIn>

         <MobileNav/>
      </div>

    </nav>
  )
}

export default Navbar
