'use client'

import Image from 'next/image'

export default function Coach() {
  return (
    <section id="about" className="relative h-[1600px] px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent flex items-center justify-center">
      {/* Background with subtle lighting effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Coach Portrait */}
        <div className="relative mb-0">
          <div className="mx-auto">
            {/* Coach Image */}
            <Image
              src="/coach.png"
              alt="Jordi Roura Sola"
              width={800}
              height={1050}
              className="w-[800px] h-[1050px] object-contain"
            />
          </div>
        </div>

        {/* Top Divider Line */}
        <div className="w-[700px] h-px bg-white mx-auto mb-4"></div>

        {/* Coach Name */}
        <h2 className="font-poppins font-black text-[45px] leading-[132%] tracking-[0%] text-center capitalize text-white mb-4">
          Jordi Roura Sola
        </h2>

        {/* Bottom Divider Line */}
        <div className="w-[400px] h-px bg-white mx-auto mb-8"></div>

        {/* Coach Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="font-poppins font-weight-275 text-[13px] leading-[120%] tracking-[0.45em] text-center uppercase text-white max-w-4xl mx-auto">
            For over 40 years, Jordi Roura worked inside one of the most prestigious academies in world football — scouting, coaching, and developing players now worth over $3B. As Sporting Director of La Masia, he was directly responsible for signing top talents like Lamine Yamal, Gavi, and Pau Cubarsí. Earlier in his career, he coached legends like Messi, Xavi, Iniesta, and Neymar, giving him a rare perspective on what separates the good from the great. Best Version 1 distills these principles into a modern program accessible to players everywhere.
          </p>
        </div>

        {/* Show More Button */}
        <button className="bg-black border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 group flex items-center gap-3 mx-auto">
          <span>Show More</span>
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
    </section>
  )
} 