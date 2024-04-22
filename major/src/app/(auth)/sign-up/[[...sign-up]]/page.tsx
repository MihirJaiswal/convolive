import React from 'react'
import { SignUp } from '@clerk/nextjs'

function SignUpPage() {
  return (
    <main className='flex h-screen w-full items-center justify-center bg-gray-900'>
        <SignUp/>
    </main>
  )
}

export default SignUpPage
