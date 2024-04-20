import React, { ReactNode } from 'react'

function RootLayout({children} : {children : ReactNode}) {
  return (
    <main className='bg-gray-900'>
      {children}
    </main>
  )
}

export default RootLayout
