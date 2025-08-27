'use client'

export default function Banner() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background with gradient effect */}
      <div className="absolute inset-0 bg-transparent">
        {/* Gradient overlay from left */}
  

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto text-center px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Main Headline */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="font-poppins font-weight-275 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] leading-[120%] tracking-[0.20em] text-center uppercase text-white mb-2 sm:mb-3 md:mb-4">
            Elite Tactical Education for Ambitious Players
          </h1>
          <h2 className="font-poppins font-extrabold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px] leading-[120%] tracking-[0.05em] text-center uppercase text-white leading-tight">
            The Only Football Program Built With a Barça Coach 
          </h2>
        </div>

        {/* Body Text */}
        <p className="font-poppins font-weight-275 text-[18px] sm:text-[12px] md:text-[15px] leading-[120%] tracking-[0.45em] text-center uppercase text-white max-w-7xl mx-auto">
          BEST VERSION IS THE ELITE FOOTBALL EDUCATION PLATFORM FOR SERIOUS PLAYERS WHO WANT TO MASTER THE GAME ON A DEEPER LEVEL. BUILT BY FORMER FC BARCELONA COACH JORDI ROURA, BV1 HELPS YOU DEVELOP THE TACTICAL IQ, DECISION-MAKING, AND AWARENESS USED AT THE HIGHEST LEVELS OF FOOTBALL.
        </p>
      </div>
    </section>
  )
} 