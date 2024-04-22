import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

interface MeetingModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    className?: string
    children?: React.ReactNode
    buttonText?: string
    handleClick?: () => void
    image?: string
    buttonIcon?: string
}
export const MeetingModal = ({isOpen, onClose, title, className, children, buttonText, handleClick, image, buttonIcon} : MeetingModalProps ) => {
  return (
<div>
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-2 border-gray-700 bg-black px-6 py-9 text-white'>
            <div className='flex flex-col gap-6'>
                {image &&(
                    <div className='flex justify-center'>
                        <Image
                        src={image}
                        width={72}
                        height={72}
                        alt="Image"
                        className='rounded-full'
                        />
                    </div>
                )}
                
                <h1 className={cn("text-2xl font-bold leading-[42px]", className)}>{title}</h1>
                {children}
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={handleClick}>
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-purple-1 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        {buttonIcon && <Image src={buttonIcon} width={13} height={13} alt="buttonIcon"/>} &nbsp;
                        {buttonText || 'Start Meeting'}
                    </span>
                </button>
            </div>
        </DialogContent>
    </Dialog>
</div>
  )
}
