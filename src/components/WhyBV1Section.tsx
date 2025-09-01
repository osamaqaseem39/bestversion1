'use client'

import { useState, useEffect, useCallback } from 'react'

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

  const cardsPerView = 4 // Show 4 cards at a time on desktop
  const totalSlides = Math.ceil(features.length / cardsPerView) // Move all 4 cards at once
  
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])
  
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000) // Change slide every 6 seconds
    
    return () => clearInterval(interval)
  }, [currentSlide, nextSlide])

  return (
    <section className="relative py-6 sm:py-8 md:py-12 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden bg-transparent min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[50vh]">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 gap-4 lg:gap-0">
          <div className="flex-1 max-w-6xl">
            <h3 className="font-poppins font-extralight text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px] xl:text-[45px] text-white uppercase tracking-wider mb-2 sm:mb-3 md:mb-4 leading-[132%]">
              WHY BEST VERSION 1 IS DIFFERENT
            </h3>
            <h2 className="font-poppins font-semibold text-[20px] sm:text-[24px] md:text-[32px] lg:text-[48px] xl:text-[64px] text-white leading-[132%] max-w-5xl">
              Why Most Players Train<br/> Wrong — and How BV1 Fixes It
            </h2>
          </div>
          
          {/* Buy Now Button */}
          <button className="text-white bg-gray-700/50 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 rounded-full hover:bg-gray-700 transition-colors text-xs sm:text-sm md:text-base lg:ml-8 w-full sm:w-auto">
            Buy Now
          </button>
        </div>

        {/* Features Section */}
        <div className="relative">
          {/* Carousel Controls */}
          <div className="flex justify-end items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8">
            {/* Navigation Arrows */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Back Arrow */}
              <button 
                onClick={prevSlide}
                className="p-1.5 sm:p-2 md:p-3 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Forward Arrow */}
              <button 
                onClick={nextSlide}
                className="p-1.5 sm:p-2 md:p-3 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Features Grid - Mobile: All cards, Desktop: Carousel */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 transition-all duration-500 ease-in-out">
            {/* Mobile: Show all features */}
            <div className="lg:hidden grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={`mobile-${index}`}
                  className="p-4 sm:p-5 md:p-6 transition-all duration-300 ease-out bg-gray-700/30 backdrop-blur-sm shadow-[0_8px_25px_-5px_rgba(0,0,0,0.6)] hover:bg-gray-700/50 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] hover:scale-105 hover:-translate-y-2 cursor-pointer group relative overflow-hidden min-h-[200px] sm:min-h-[250px] md:min-h-[300px]"
                >
                  {/* First background overlay layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Second background overlay layer */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 
                      className="font-poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[26px] text-white mb-3 sm:mb-4 leading-[132%]"
                      dangerouslySetInnerHTML={{ __html: feature.title }}
                    ></h3>
                    
                    {/* Dashed circular icon - visible on hover */}
                    <div className="mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 border-2 border-white/60 border-dashed rounded-full"></div>
                    </div>
                    
                    <p className="font-poppins font-normal text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-white/80 leading-[132%]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Carousel with 4 cards */}
            <div className="hidden lg:block">
              {Array.from({ length: cardsPerView }, (_, i) => {
                const featureIndex = (currentSlide * cardsPerView + i) % features.length;
                const feature = features[featureIndex];
                return (
                  <div 
                    key={`${currentSlide}-${i}`}
                    className="p-3 sm:p-4 md:p-6 transition-all duration-300 ease-out bg-gray-700/30 backdrop-blur-sm shadow-[0_8px_25px_-5px_rgba(0,0,0,0.6)] hover:bg-gray-700/50 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] hover:scale-105 hover:-translate-y-2 cursor-pointer group relative overflow-hidden animate-slide-in"
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
                        className="font-poppins font-normal text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[26px] text-white mb-2 sm:mb-3 leading-[132%]"
                        dangerouslySetInnerHTML={{ __html: feature.title }}
                      ></h3>
                      
                      {/* Dashed circular icon - visible on hover */}
                      <div className="mb-2 sm:mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-2 border-white/60 border-dashed rounded-full"></div>
                      </div>
                      
                      <p className="font-poppins font-normal text-[11px] sm:text-[13px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-white/80 leading-[132%]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 