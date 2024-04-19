import React from 'react'
import { GoogleSignInButton } from '@/src/features/sign-in/ui/GoogleSignInButton'

const SignInPage = () => {
  return (
    <section className="w-lvw h-lvh flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl">Sign In</h1>
        <GoogleSignInButton />
      </div>
    </section>
  )
}

export default SignInPage
