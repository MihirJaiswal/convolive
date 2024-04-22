'use client'
import { cn } from "@/lib/utils"
import { useSidebar } from "../../../../store/use-sidebar"

interface WrapperProps {
    children: React.ReactNode
  }

const Wrapper = ({children} : WrapperProps) => {
    const { collapsed } = useSidebar()
  return (
    <aside className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-n-8/90 border-r border-gray-600 mt-20",
    collapsed && "w-[0px] md:w-[70px]"
    )}
    >
        {children}
    </aside>
  )
}


export default Wrapper