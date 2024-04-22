import React, { ReactNode } from 'react'

function RootLayout({children} : {children : ReactNode}) {
  return (
    <main className='bg-mainb min-h-screen'>
      {children}
    </main>
  )
}

export default RootLayout
