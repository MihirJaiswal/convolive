import Sidebar from '@/components/stream/Sidebar'
import {Container} from '@/components/stream/Container'
import Navbar from '@/components/stream/Navbar'
import React, { ReactNode } from 'react'

function RootLayout({children} : {children : ReactNode}) {
  return (
    <main className='bg-mainb min-h-screen'>
      <Navbar/>
      <Sidebar/>
      <Container>
      {children}
      </Container>
    </main>
  )
}

export default RootLayout
