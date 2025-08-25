'use client'

import { useState, useEffect } from 'react'

export default function WhyBV1Section() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      title: "Football<br/>IQ First",
      description: "We train your brain, not just your body. Develop tactical intelligence that separates good players from great ones."
    },
    {
      title: "Built by a<br/>Barca Coach",
      description: "Jordi Roura brings 40+ years of elite football experience from the highest levels of the game."
    },
    {
      title: "Video-Based<br/>Learning",
      description: "Watch & apply instantly with tactical clarity. See exactly what top players do in real game situations."
    },
    {
      title: "Modern Player<br/>Mentorship",
      description: "Nico understands what players today actually need. Get guidance from someone who's been where you want to go."
    },
    {
      title: "Proven<br/>Methods",
      description: "Time-tested training techniques used by professional clubs worldwide. No guesswork, just results."
    },
    {
      title: "Personalized<br/>Training",
      description: "Customized programs that adapt to your position, style, and goals. Train smarter, not just harder."
    },
    {
      title: "Mental<br/>Strength",
      description: "Build the psychological resilience needed to perform under pressure and bounce back from setbacks."
    },
    {
      title: "Game<br/>Intelligence",
      description: "Learn to read the game like a pro. Anticipate plays, make better decisions, and stay one step ahead."
    }
  ]

  const cardsPerView = 4 // Show 4 cards at a time
  const totalSlides = Math.ceil(features.length / cardsPerView) // Move all 4 cards at once
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000) // Change slide every 6 seconds
    
    return () => clearInterval(interval)
  }, [currentSlide])

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent min-h-screen">
      {/* Background with glow effects */}
      <div className="absolute inset-0">
        {/* Left side glow */}
        <div className="absolute left-0 top-0 w-96 h-full bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-3xl"></div>
        {/* Additional subtle glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex-1 max-w-6xl">
            <h3 className="font-poppins font-extralight text-[45px] text-white uppercase tracking-wider mb-4 leading-[132%]">
              WHY BEST VERSION 1 IS DIFFERENT
            </h3>
            <h2 className="font-poppins font-semibold text-[64px] text-white leading-[132%] max-w-5xl">
              Why Most Players Train<br/> Wrong — and How BV1 Fixes It
            </h2>
          </div>
          
          {/* Buy Now Button */}
          <button className="text-white bg-gray-700/50 px-5 py-2.5 rounded-full hover:bg-gray-700 transition-colors text-base ml-8">
            Buy Now
          </button>
        </div>

        {/* Features Section */}
        <div className="relative">
          {/* Carousel Controls */}
          <div className="absolute -top-20 right-0 flex items-center space-x-3">
            {/* Navigation Arrows */}
            <div className="flex items-center space-x-2">
              {/* Back Arrow */}
              <button 
                onClick={prevSlide}
                className="p-3 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <svg className="w-6 h-6 text-white transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Forward Arrow */}
              <button 
                onClick={nextSlide}
                className="p-3 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <svg className="w-6 h-6 text-white transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
          {Array.from({ length: cardsPerView }, (_, i) => {
            const featureIndex = (currentSlide * cardsPerView + i) % features.length;
            const feature = features[featureIndex];
            return (
                         <div 
               key={`${currentSlide}-${i}`}
               className="p-6 transition-all duration-300 ease-out bg-gray-700/30 backdrop-blur-sm shadow-[0_8px_25px_-5px_rgba(0,0,0,0.6)] hover:bg-gray-700/50 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] hover:scale-105 hover:-translate-y-2 cursor-pointer group relative overflow-hidden animate-slide-in"
               style={{
                 animationDelay: `${i * 150}ms`,
                 opacity: 0
               }}
             >
              {/* First background overlay layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Second background overlay layer */}
              <div className="absolute inset-0 bg-gradient-to-tl from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 
                  className="font-poppins font-normal text-[26px] text-white mb-3 leading-[132%]"
                  dangerouslySetInnerHTML={{ __html: feature.title }}
                ></h3>
                
                {/* Dashed circular icon - visible on hover */}
                <div className="mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 border-2 border-white/60 border-dashed rounded-full"></div>
                </div>
                
                <p className="font-poppins font-normal text-[20px] text-white/80 leading-[132%]">
                  {feature.description}
                </p>
              </div>
            </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  )
} 