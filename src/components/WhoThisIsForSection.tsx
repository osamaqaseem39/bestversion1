'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function WhoThisIsForSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  const playerCategories = [
    {
      category: "Grassroots",
      description: "Players With Big Goals",
      image: "/wtif1.png"
    },
    {
      category: "Academy", 
      description: "Players Trying To Stand Out",
      image: "/wtif2.png"
    },
    {
      category: "Trialists",
      description: "Trialists Who Never Get Picked",
      image: "/wtif3.png"
    }
  ]

  return (
    <section className="relative py-6 sm:py-8 md:py-12 lg:py-15 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden bg-transparent min-h-screen">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          {/* Centered text */}
          <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
            <h3 className="font-poppins font-extralight text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px] xl:text-[45px] text-white leading-[132%] text-center uppercase" style={{ fontWeight: 275, letterSpacing: '0%' }}>
              WHO THIS IS FOR
            </h3>
          </div>
          <h2 className="font-poppins font-semibold text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px] xl:text-[45px] text-white leading-[132%] text-center mb-4 sm:mb-6 md:mb-8" style={{ fontWeight: 600, letterSpacing: '0%' }}>
          Built For Players Who Want To Achieve More
          </h2>
          
                </div>

        {/* Player Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {playerCategories.map((category, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer"
            >
              {/* Card with actual image */}
              <div className="w-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px] xl:min-h-[470px] rounded-2xl relative overflow-hidden">
                {/* Background image */}
                <Image 
                  src={category.image} 
                  alt={category.category}
                  fill
                  className="object-cover"
                />
                
                {/* Category Tag */}
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 bg-black/30 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium">
                  {category.category}
                </div>
              </div>
              
              {/* Description */}
              <div className="mt-2 p-2 sm:p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg">
                <p className="font-poppins font-normal text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-white leading-[132%]">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>  
      </div>
    </section>
  )
} 