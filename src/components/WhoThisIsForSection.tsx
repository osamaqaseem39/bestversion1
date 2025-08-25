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
        <div className="text-center mb-16">
          {/* Centered text */}
          <div className="flex justify-center mb-6">
            <h3 className="font-poppins font-extralight text-[45px] text-white leading-[132%] text-center uppercase" style={{ fontWeight: 275, letterSpacing: '0%' }}>
              WHO THIS IS FOR
            </h3>
          </div>
          <h2 className="font-poppins font-semibold text-[45px] text-white leading-[132%] text-center whitespace-nowrap mb-8" style={{ fontWeight: 600, letterSpacing: '0%' }}>
            Built For Players Who Want More
          </h2>
          
          {/* Navigation Controls - positioned below headings on the right */}
          <div className="flex justify-end gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center hover:border-white/60 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center hover:border-white/60 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Player Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {playerCategories.map((category, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer"
            >
              {/* Card with actual image */}
              <div className="w-full min-h-[470px] rounded-2xl relative overflow-hidden">
                {/* Background image */}
                <Image 
                  src={category.image} 
                  alt={category.category}
                  fill
                  className="object-cover"
                />
                
                                 {/* Category Tag with Action Icon */}
                 <div className="absolute bottom-6 left-6 bg-black/30 backdrop-blur-sm text-white px-6 py-3 rounded-full text-base font-medium flex items-center gap-3 cursor-pointer group/tag hover:bg-black/50 transition-colors">
                   <span>{category.category}</span>
                   <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover/tag:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 17 9.2-9.2M17 17V7H7" />
                   </svg>
                 </div>
              </div>
              
              {/* Description and CTA */}
              <div className="mt-2 flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg">
                <p className="font-poppins font-normal text-[18px] text-white leading-[132%]">
                  {category.description}
                </p>
                <button className="font-poppins font-normal text-[18px] text-white leading-[132%] hover:text-blue-400 transition-colors underline">
                  See
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 