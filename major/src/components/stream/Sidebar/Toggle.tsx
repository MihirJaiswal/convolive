'use client'
import { useSidebar } from '../../../../store/use-sidebar'
import { Button } from '@/components/ui/button'
import { ArrowLeftFromLine, ArrowRightFromLineIcon, Ghost } from 'lucide-react'
import { Hint } from '../Hint'

const Toggle = () => {
    const {
        collapsed,
        onExpand,
        onCollapse
    } = useSidebar((state) => state)

    const label = collapsed ? 'Expand' : 'Collapse'

  return (
    <>
    {
        collapsed && (
        <div className='hidden lg:flex h-auto p-2 ml-auto items-center'>
            <Hint label={label} side='right' asChild>
            <Button 
            onClick={onExpand}
            className='h-auto p-2 ml-auto' variant='ghost'>
            <ArrowRightFromLineIcon className='h-4 w-4'/>
            </Button>
            </Hint>
        </div>
        )
    }
    {!collapsed && (
        <div className='h-auto p-2 ml-auto flex items-center'>
        <p className='font-semibold text-white mr-28'>
            For you
        </p>
        <Hint label={label} side='right' asChild>
        <Button 
        onClick={onCollapse}
        className='h-auto p-2 ml-auto' variant='ghost'>
            <ArrowLeftFromLine className='h-4 w-4'/>
        </Button>
        </Hint>
    </div>
    )
    }
    </>
  )
}

export default Toggle