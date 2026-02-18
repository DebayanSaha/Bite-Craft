import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const nav = useNavigate();

  return (
    <div className="relative bg-black h-screen w-full flex items-center justify-center">
      <div className="bg-[url('/images/background/387624.png')] bg-cover bg-center h-full w-full md:w-1/2 p-4">
        <div className='absolute left-1/2 -translate-x-1/2 top-60 h-20 w-[90%] flex items-center justify-center'>
          <h1 className=' mt-0 text-[18vw] font-[font4] font-medium uppercase'>Bite<span className='text-orange-800'>craft</span></h1>
        </div>
        <button onClick={()=>nav('/user/register')} className='absolute h-10 w-36 bottom-70 left-1/2 -translate-x-1/2 font-[font1] text-[15px] text-red-900 bg-white/20 border border-white/10 backdrop-blur-[2px] rounded-full shadow-lg shadow-amber-600 active:scale-95 transition-transform duration-150'>Get Started</button>
      </div>
    </div>
  )
}

export default LandingPage
