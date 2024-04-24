'use client'
import { User } from '@prisma/client'
import React from 'react'
import { useSidebar } from '../../../../store/use-sidebar';

interface recommendedProps {
    data: User[];
}

const Recommended = ({
    data,
}: recommendedProps) => {
    const { collapsed } = useSidebar((state) => state);

    const showLabel = data && !collapsed && data.length > 0
  return (
    <div>
        {
            showLabel && (
                <div className='pl-6 mb-4'>
                    <p className='text-sm text-muted-foreground'>
                        Reccomended
                    </p>
                </div>
            )
        }
        <ul className='space-y-2 px-4'>
           {data.map((user) => (
            <div key={user.username}>
                {user.username}
            </div>
           ))}
        </ul>
    </div>
  )
}

export default Recommended