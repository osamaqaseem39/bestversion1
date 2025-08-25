'use client'

export default function Banner() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with gradient effect */}
      <div className="absolute inset-0 bg-transparent">
        {/* Gradient overlay from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-transparent"></div>
        

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto text-center px-8 sm:px-12 lg:px-16">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="font-poppins font-weight-275 text-[50px] leading-[120%] tracking-[0.20em] text-center uppercase text-white mb-4">
            Elite Tactical Education for Ambitious Players
          </h1>
          <h2 className="font-poppins font-extrabold text-[50px] leading-[120%] tracking-[0.05em] text-center uppercase text-white leading-tight">
            The Only Football Program Built With a Barça Coach 
          </h2>
        </div>

        {/* Body Text */}
        <p className="font-poppins font-weight-275 text-[10px] leading-[120%] tracking-[0.45em] text-center uppercase text-white max-w-4xl mx-auto">
          BEST VERSION IS THE ELITE FOOTBALL EDUCATION PLATFORM FOR SERIOUS PLAYERS WHO WANT TO MASTER THE GAME ON A DEEPER LEVEL. BUILT BY FORMER FC BARCELONA COACH JORDI ROURA, BVI HELPS YOU DEVELOP THE TACTICAL IQ, DECISION-MAKING, AND AWARENESS USED AT THE HIGHEST LEVELS OF FOOTBALL.
        </p>
      </div>
    </section>
  )
} 