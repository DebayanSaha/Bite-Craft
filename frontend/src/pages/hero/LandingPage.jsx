import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const LandingPage = () => {
  const nav = useNavigate();

  return (
    <div className="relative bg-transparent w-full min-h-screen overflow-hidden">
      <video autoPlay muted loop className='absolute w-full h-full object-cover -z-10' src="/videos/bg/0221.mp4" />
      <div className='relative w-full h-30 p-3'>
        <h1 className='font-[font9] md:text-5xl md:ml-3 text-3xl text-[#E8E4D7] md:tracking-[2px] tracking-[1px] mt-2 md:mt-4'>Bitecraft.</h1>
        <div className='absolute right-0 top-5 md:w-70 w-45 font-[font2] text-[#E8E4D7] flex md:gap-10 gap-5'>
          <h1 onClick={()=>nav('/partner/login')} className='cursor-pointer font-[font5] md:text-xl md:mt-4 mt-2'>Partner with us</h1>
          <button onClick={()=>nav('/user/login')} className='cursor-pointer bg-yellow-500 font-[font5] font-semibold md:px-6 px-4 md:py-3 py-2 md:text-2xl text-zinc-800 rounded-2xl '>Sign in</button>
        </div>
      </div>
      <div className='absolute w-full h-45 md:h-80 bottom-0 p-4 md:px-8'>
        <h1 className='font-[font5] text-[#E8E4D7] text-7xl md:text-9xl '>"Your Feed</h1>
        <h1 className='font-[font6] text-[#E8E4D7] text-5xl md:text-8xl'>Just Got <span className='text-[#f4ca59]'>Delicious</span>."</h1>
      </div>
    </div>
  )
}

export default LandingPage
