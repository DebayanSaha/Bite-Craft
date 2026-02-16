import React from 'react'

const LandingPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/images/background/1771174341548.png"
        alt="Food Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Middle Content */}
      <div className="absolute bottom-60 w-full px-6 pb-10 text-center text-white">
        
        {/* Website Name */}
        <h1 className="text-3xl font-[Font2] tracking-wide mb-4">
          Bitecraft
        </h1>

        {/* Get Started Button */}
        <button className="w-40 bg-yellow-400 text-black text-xl font-[Font1] py-5 rounded-full shadow-lg active:scale-95 transition-transform duration-150">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default LandingPage