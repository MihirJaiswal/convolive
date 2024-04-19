import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import{ usePathname } from 'next/navigation'
import{ cn } from '@/lib/utils'
import { sidebarLinks } from '../../constant'
  

function MobileNav() {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px] z-50'>
<div className='flex flex-col md:hidden'>
    <Sheet>
      <SheetTrigger asChild>
        <Image 
        src="/icons/hamburger.svg"
        width={36}
        height={36}
        alt="hamburger"
        className='cursor-pointer sm:hidden' 
        />
      </SheetTrigger>
        <SheetContent side='right' className='bg-black border-gray-700'>
            
     <Link href='/' className='flex items-center gap-1'>
     <Image
      src='/icons/logo.svg'
      width={42}
      height={42}
      alt='logo'
      className='max-sm:size-10'
      />
      <p className='text-[21px] font-bold text-white px-2 mt-1'>ConvoLive</p>
     </Link>

     <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
        <SheetClose asChild>
            <section className='flex h-full flex-col gap-6 pt-16 text-white'>
            <div className='flex flex-1 flex-col gap-6'>
            {sidebarLinks.map((link) => {
                const isActive = pathname === link.route;

                return(
                    <SheetClose asChild key={link.route}>
                    <Link href={link.route} key={link.label} className={cn("flex gap-4 items-center p-4 rounded-lg w-full max-w-60", {'bg-purple-1' : isActive,})}>
                        <Image src={link.imgUrl} alt={link.label} width={20} height={20} />
                        <p className='font-semibold '>{link.label}</p>
                    </Link>
                    </SheetClose>
                )
            })}
        </div>
            </section>
        </SheetClose>
     </div>
        </SheetContent>
      </Sheet>
</div>
    </section>
  )
}

export default MobileNav
