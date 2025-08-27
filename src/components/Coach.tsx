'use client'

import Image from 'next/image'

export default function Coach() {
  return (
    <section id="about" className="relative h-auto px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden bg-transparent flex items-center justify-center py-4 sm:py-6 md:py-8 lg:py-12">

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Coach Portrait */}
        <div className="relative mb-0 flex justify-center">
          <div className="mx-auto flex justify-center">
            {/* Coach Image */}
            <Image
              src="/coach.png"
              alt="Jordi Roura Sola"
              width={800}
              height={1050}
              className="w-[200px] h-[262px] sm:w-[300px] sm:h-[393px] md:w-[500px] md:h-[656px] lg:w-[700px] lg:h-[918px] xl:w-[800px] xl:h-[1050px] object-contain"
            />
          </div>
        </div>

        {/* Top Divider Line */}
        <div className="w-[150px] sm:w-[250px] md:w-[400px] lg:w-[500px] xl:w-[700px] h-px bg-white mx-auto mb-2 sm:mb-3 md:mb-4"></div>

        {/* Coach Name */}
        <h2 className="font-poppins font-black text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[45px] leading-[132%] tracking-[0%] text-center capitalize text-white mb-2 sm:mb-3 md:mb-4">
          Jordi Roura Sola
        </h2>

        {/* Bottom Divider Line */}
        <div className="w-[100px] sm:w-[150px] md:w-[250px] lg:w-[300px] xl:w-[400px] h-px bg-white mx-auto mb-4 sm:mb-6 md:mb-8"></div>

        {/* Coach Description */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-3 sm:px-4 md:px-6 lg:px-8 flex justify-center">
          <p className="font-poppins font-weight-275 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] leading-[120%] tracking-[0.45em] text-center uppercase text-white max-w-4xl">
            For over 40 years, Jordi Roura worked inside one of the most prestigious academies in world football — scouting, coaching, and developing players now worth over $3B. As Sporting Director of La Masia, he was directly responsible for signing top talents like Lamine Yamal, Gavi, and Pau Cubarsí. Earlier in his career, he coached legends like Messi, Xavi, Iniesta, and Neymar, giving him a rare perspective on what separates the good from the great. Best Version 1 distills these principles into a modern program accessible to players everywhere.
          </p>
        </div>

        {/* Show More Button */}
        <button className="bg-black border border-white text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 group flex items-center gap-2 sm:gap-3 mx-auto text-sm sm:text-base">
          <span>Show More</span>
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
    </section>
  )
} 