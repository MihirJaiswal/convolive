'use client'
import React from 'react'
import { sidebarLinks } from '../../../constant'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

function Sidebar() {

    const pathname = usePathname();
    
  return (
    <div>
      <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-n-8/90 border-r border-gray-700 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
        <div className='flex flex-1 flex-col gap-6'>
            {sidebarLinks.map((link) => {
                const isActive = pathname === link.route;

                return(
                    <Link href={link.route} key={link.label} className={cn("flex gap-4 items-center rounded-lg justify-start relative bg-transparent py-2.5 px-5 text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100", {'bg-purple-1' : isActive,})}>
                        <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
                        <p className='text-lg font-semibold max-lg:hidden'>{link.label}</p>
                    </Link>
                )
            })}
        </div>
      </section>
    </div>
  )
}

export default Sidebar
