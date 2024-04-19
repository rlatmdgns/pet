import React from 'react'
import { GoogleLoginButton } from '@/src/features/login/ui/GoogleLoginButton'

const LoginPage = () => {
  return (
    <section className="w-lvw h-lvh flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl">로그인</h1>
        <GoogleLoginButton />
      </div>
    </section>
  )
}

export default LoginPage
