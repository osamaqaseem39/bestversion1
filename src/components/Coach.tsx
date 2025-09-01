'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Coach() {
  const router = useRouter();

  const goToJordiPage = () => {
    router.push('/jordi')
  }

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
              className="w-[150px] h-[197px] sm:w-[200px] sm:h-[262px] md:w-[350px] md:h-[459px] lg:w-[500px] lg:h-[656px] xl:w-[600px] xl:h-[787px] object-contain"
            />
          </div>
        </div>

        {/* Top Divider Line */}
        <div className="w-[100px] sm:w-[150px] md:w-[250px] lg:w-[300px] xl:w-[400px] h-px bg-white mx-auto mb-2 sm:mb-3 md:mb-4"></div>

        {/* Coach Name */}
        <h2 className="font-poppins font-black text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[45px] leading-[132%] tracking-[0%] text-center capitalize text-white mb-2 sm:mb-3 md:mb-4">
          Jordi Roura Sola
        </h2>

        {/* Bottom Divider Line */}
        <div className="w-[75px] sm:w-[100px] md:w-[150px] lg:w-[200px] xl:w-[250px] h-px bg-white mx-auto mb-4 sm:mb-6 md:mb-8"></div>

        {/* Coach Description */}
        
        {/* Show More Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <button 
            onClick={goToJordiPage}
            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-poppins text-sm sm:text-base hover:bg-white/20 transition-all duration-300"
          >
            Show More
            <svg 
              className={`ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 rotate-180`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* La Masia Principles Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h3 className="font-poppins font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 leading-tight" style={{ fontWeight: 700 }}>
              Built on the La Masia Principles — For Players Everywhere
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <p className="font-poppins font-light text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[140%] text-justify sm:text-center text-white/70">
              For over 40 years, Jordi Roura worked inside one of the most prestigious academies in world football — scouting, coaching, and developing players now worth over $3B. As Sporting Director of La Masia, he was directly responsible for signing top talents like Lamine Yamal, Gavi, and Pau Cubarsí. Earlier in his career, he coached legends like Messi, Xavi, Iniesta, and Neymar, giving him a rare perspective on what separates the good from the great. Best Version 1 distills these principles into a modern program accessible to players everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 