import React from 'react'
import { SignIn } from '@clerk/nextjs'

function SignInPage() {
  return (
    <main className='flex h-screen w-full items-center justify-center bg-gray-900'>
        <SignIn/>
    </main>
  )
}

export default SignInPage
