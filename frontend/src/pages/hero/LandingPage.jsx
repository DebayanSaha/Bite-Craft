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

      {/* Bottom Content */}
      <div className="absolute bottom-0 w-full px-6 pb-10 text-center text-white">
        
        {/* Website Name */}
        <h1 className="text-3xl font-bold tracking-wide mb-4">
          FlavorVerse
        </h1>

        {/* Get Started Button */}
        <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-full shadow-lg active:scale-95 transition-transform duration-150">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default LandingPage