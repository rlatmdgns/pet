import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { IoArrowForwardOutline } from 'react-icons/io5'

export const GoogleSignInButton = () => {
  return (
    <button className="flex mt-5 justify-between items-center  bg-white w-80 text-left hover:bg-gray-100 text-gray-600 font-medium py-2 px-4 border border-gray-200 rounded ">
      <div className="flex items-center gap-2">
        <FcGoogle size={18} /> Google 계정으로 로그인
      </div>
      <IoArrowForwardOutline />
    </button>
  )
}
