import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const nav = useNavigate();
  return (
    <div className='absolute right-0 z-100 h-full w-15 flex items-center justify-center'>
      <div className='absolute h-10 w-10 items-center justify-center flex top-5 bg-amber-500 backdrop-blur-lg rounded-full'>
        <i onClick={()=>nav('/user/profile')} className="ri-user-6-line text-2xl"></i>
      </div>
      <i className="ri-shopping-cart-2-fill absolute top-20 text-3xl text-red-500"></i>
      <i className="ri-settings-3-fill absolute top-35 text-3xl text-red-600"></i>
      <div className='absolute flex-col gap-5 items-center justify-center flex bottom-75'>
        <i className="ri-thumb-up-fill text-3xl text-blue-600"></i>
        <i className="ri-thumb-down-fill text-3xl text-red-600"></i>
      </div>
    </div>
  )
}

export default Navbar