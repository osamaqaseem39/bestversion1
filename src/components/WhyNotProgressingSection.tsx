'use client'

import Image from 'next/image';

export default function WhyNotProgressingSection() {
  const reasons = [
    {
      icon: (
        <Image src="/wnp1.png" alt="Football IQ" width={80} height={80} className="w-20 h-20" />
      ),
                             title: "YOU&apos;VE NEVER BEEN TAUGHT FOOTBALL IQ",
      description: "MOST PLAYERS ARE ONLY SHOWN DRILLS NOT HOW TO SCAN, POSITION, OR MAKE BETTER DECISIONS ON THE PITCH. WITHOUT UNDERSTANDING THE WHY, YOUR PROGRESS HITS A CEILING."
    },
    {
      icon: (
        <Image src="/wpn2.png" alt="Coach Expectations" width={80} height={80} className="w-20 h-20" />
      ),
              title: "YOU DON&apos;T KNOW WHAT COACHES REALLY LOOK FOR",
        description: "YOU&apos;RE WORKING HARD, BUT NOT ON THE THINGS THAT MATTER MOST. COACHES WANT INTELLIGENT PLAYERS WHO READ THE GAME, REACT FAST, AND STAY COMPOSED UNDER PRESSURE NOT JUST FLASHY SKILLS."
    },
    {
      icon: (
        <Image src="/wpn3.png" alt="Real Guidance" width={80} height={80} className="w-20 h-20" />
      ),
              title: "YOU&apos;RE TRYING TO IMPROVE WITHOUT REAL GUIDANCE",
        description: "YOU&apos;RE TRAINING HARD — BUT WITHOUT EXPERT DIRECTION, YOU&apos;RE GUESSING. MOST PLAYERS FOCUS ON THE WRONG THINGS AND NEVER DEVELOP REAL FOOTBALL INTELLIGENCE. WITHOUT SOMEONE SHOWING YOU WHAT ACTUALLY MATTERS, PROGRESS STAYS SLOW"
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent min-h-screen">
      {/* Background with glow effects */}
      <div className="absolute inset-0">
        {/* Subtle glows in corners */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <h2 className="font-poppins font-extralight text-[45px] text-white uppercase leading-[132%] text-center whitespace-nowrap" style={{ fontWeight: 275 }}>
              WHY YOU&apos;RE NOT PROGRESSING - EVEN IF YOU TRAIN HARD
            </h2>
          </div>
          <p className="font-poppins font-extralight text-[25px] text-white/90 leading-[132%] text-center uppercase max-w-5xl mx-auto" style={{ fontWeight: 275, letterSpacing: '0%' }}>
            THOUSANDS OF PLAYERS TRAIN EVERY DAY — PUTTING IN THE HOURS, FOLLOWING DRILLS, AND GIVING THEIR ALL. BUT EVEN WITH ALL THAT EFFORT, MANY STILL FEEL STUCK. THEY&apos;RE NOT IMPROVING FAST ENOUGH, NOT GETTING NOTICED, OR JUST UNSURE WHAT&apos;S HOLDING THEM BACK.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="relative mb-16">
          {/* Generic glow behind entire cards section */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/15 to-blue-500/10 rounded-3xl blur-2xl opacity-60"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="p-8 relative overflow-hidden group transition-all duration-300 shadow-2xl shadow-black/50 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:bg-gray-800/50 hover:border-gray-600/50 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                {/* Background overlay for hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  {reason.icon}
                </div>
                
                {/* Horizontal line */}
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-px bg-white/30"></div>
                </div>
                
                {/* Title */}
                <h3 className="font-poppins font-extralight text-xl text-white uppercase mb-6 leading-tight" style={{ fontWeight: 275 }}>
                  {reason.title}
                </h3>
                
                {/* Description */}
                <p className="font-poppins font-extralight text-base text-white/80 leading-relaxed text-justify" style={{ fontWeight: 275 }}>
                  {reason.description}
                </p>
              </div>
            </div>
                      ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 group flex items-center gap-3 mx-auto">
            <span>START NOW</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
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