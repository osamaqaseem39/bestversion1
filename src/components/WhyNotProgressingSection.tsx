'use client'

import Image from 'next/image';

export default function WhyNotProgressingSection() {
  const reasons = [
    {
      icon: (
        <Image src="/wnp1.png" alt="Football IQ" width={80} height={80} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
      ),
      title: "YOU'VE NEVER BEEN TAUGHT FOOTBALL IQ",
      description: "MOST PLAYERS ARE ONLY SHOWN DRILLS NOT HOW TO SCAN, POSITION, OR MAKE BETTER DECISIONS ON THE PITCH. WITHOUT UNDERSTANDING THE WHY, YOUR PROGRESS HITS A CEILING."
    },
    {
      icon: (
        <Image src="/wpn2.png" alt="Coach Expectations" width={80} height={80} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
      ),
      title: "YOU DON'T KNOW WHAT COACHES REALLY LOOK FOR",
      description: "YOU'RE WORKING HARD, BUT NOT ON THE THINGS THAT MATTER MOST. COACHES WANT INTELLIGENT PLAYERS WHO READ THE GAME, REACT FAST, AND STAY COMPOSED UNDER PRESSURE NOT JUST FLASHY SKILLS."
    },
    {
      icon: (
        <Image src="/wpn3.png" alt="Real Guidance" width={80} height={80} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
      ),
      title: "YOU'RE TRYING TO IMPROVE WITHOUT REAL GUIDANCE",
      description: "YOU'RE TRAINING HARD — BUT WITHOUT EXPERT DIRECTION, YOU'RE GUESSING. MOST PLAYERS FOCUS ON THE WRONG THINGS AND NEVER DEVELOP REAL FOOTBALL INTELLIGENCE. WITHOUT SOMEONE SHOWING YOU WHAT ACTUALLY MATTERS, PROGRESS STAYS SLOW"
    }
  ]

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden bg-transparent min-h-screen">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <h2 className="font-poppins font-extralight text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[45px] text-white uppercase leading-[132%] text-center" style={{ fontWeight: 275 }}>
              WHY YOU'RE NOT PROGRESSING - EVEN IF YOU TRAIN HARD
            </h2>
          </div>
          <p className="font-poppins font-extralight text-[12px] sm:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[25px] text-white/90 leading-[132%] text-center uppercase max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8" style={{ fontWeight: 275, letterSpacing: '0%' }}>
            THOUSANDS OF PLAYERS TRAIN EVERY DAY — PUTTING IN THE HOURS, FOLLOWING DRILLS, AND GIVING THEIR ALL. BUT EVEN WITH ALL THAT EFFORT, MANY STILL FEEL STUCK. THEY'RE NOT IMPROVING FAST ENOUGH, NOT GETTING NOTICED, OR JUST UNSURE WHAT'S HOLDING THEM BACK.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="relative mb-8 sm:mb-12 md:mb-16">
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="p-4 sm:p-6 md:p-8 relative overflow-hidden group transition-all duration-300 shadow-2xl shadow-black/50 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:bg-gray-800/50 hover:border-gray-600/50 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                {/* Background overlay for hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    {reason.icon}
                  </div>
                  
                  {/* Horizontal line */}
                  <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                    <div className="w-16 sm:w-20 md:w-24 h-px bg-white/30"></div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-poppins font-extralight text-[14px] sm:text-[16px] md:text-[18px] lg:text-xl text-white uppercase mb-4 sm:mb-6 leading-tight" style={{ fontWeight: 275 }}>
                    {reason.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-poppins font-extralight text-[10px] sm:text-[11px] md:text-[13px] lg:text-base text-white/80 leading-relaxed text-justify" style={{ fontWeight: 275 }}>
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="bg-gray-800 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 group flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base">
            <span>START NOW</span>
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
} 