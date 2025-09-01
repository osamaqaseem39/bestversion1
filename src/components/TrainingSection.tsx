'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function TrainingSection() {
  const [scrollStep, setScrollStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, isVisible: false })
  const cardRef1 = useRef<HTMLDivElement>(null)
  const cardRef2 = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setScrollStep(3) // Show all cards immediately
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // No need to prevent scrolling since cards are shown immediately
  useEffect(() => {
    const currentRef = sectionRef.current
    return () => {
      // Cleanup: re-enable scrolling when component unmounts
      if (currentRef) {
        currentRef.style.overflow = ''
      }
    }
  }, [])

  // No need for complex wheel handling since cards are shown immediately
  useEffect(() => {
    return () => {
      // Cleanup if needed
    }
  }, [])

  // No need for complex scroll handling since cards are shown immediately
  useEffect(() => {
    return () => {
      // Cleanup if needed
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardRef: React.RefObject<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Calculate distance from center for magnetic repulsion effect
    const distanceX = x - centerX
    const distanceY = y - centerY
    
    // Magnetic repulsion: tilt away from cursor (like magnets repelling)
    const repulsionStrength = 4.0 // Increased for more dramatic tilt effect
    
    // Calculate rotation based on cursor position relative to center
    // The further from center, the more the card tilts away
    const rotateX = -(distanceY / centerY) * repulsionStrength
    const rotateY = (distanceX / centerX) * repulsionStrength
    
    // Clamp rotation values to prevent extreme tilting
    const clampedRotateX = Math.max(-25, Math.min(25, rotateX))
    const clampedRotateY = Math.max(-25, Math.min(25, rotateY))
    
    // Add smooth transition for mouse move
    cardRef.current.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    
    // Apply the transform
    cardRef.current.style.transform = `perspective(1000px) rotateX(${clampedRotateX}deg) rotateY(${clampedRotateY}deg)`
    
    // Update cursor position for tracking
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
      isVisible: true
    })
  }

  const handleMouseLeave = (cardRef: React.RefObject<HTMLDivElement>) => {
    if (cardRef.current) {
      // Add smooth transition for mouse leave
      cardRef.current.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
      
      // Remove transition after animation completes to keep mouse move responsive
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.style.transition = ''
        }
      }, 600)
    }
    setCursorPosition(prev => ({ ...prev, isVisible: false }))
  }

  return (
    <section ref={sectionRef}  className="relative py-6 sm:py-8 md:py-12 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden bg-transparent min-h-screen flex items-center justify-center">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main Headline */}
        <h2 className={`font-poppins font-light text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[45px] leading-[132%] tracking-[0%] text-center capitalize text-white mb-4 sm:mb-6 md:mb-8 transition-all duration-1000 ${
          scrollStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Are You Training Hard...
          <br />
          But Still Not Standing Out?
        </h2>

        {/* Explanatory Text */}
        <p className={`text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] xl:text-[30px] text-white font-extralight mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-7xl mx-auto leading-[132%] tracking-[0%] text-center transition-all duration-1000 delay-300 ${
          scrollStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          You're Not Alone. Many Talented Players Work Hard, But Never
          <br />
          Get The Right Guidance. That's Exactly Why This Program Was Created
        </p>

        {/* Two Cards Stacked Vertically - Jordi and Nico */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-6xl mx-auto">
          {/* Jordi's Card */}
          <div 
            ref={cardRef1}
            className={`bg-white/5 backdrop-blur-md rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[32px] p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl w-full max-w-[700px] mx-auto cursor-pointer transform hover:scale-105 transition-transform duration-300 ${
              isVisible ? 'opacity-100 scale-110 translate-y-0' : 'opacity-0 scale-95 translate-y-20'
            }`}
            onMouseMove={(e) => handleMouseMove(e, cardRef1)}
            onMouseLeave={() => handleMouseLeave(cardRef1)}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/jordi.jpg"
                  alt="Jordi Roura"
                  width={256}
                  height={256}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full object-cover"
                  quality={95}
                />
              </div>
              
              {/* Content */}
              <div className="text-left flex-1">
                <h3 className="font-poppins font-light text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] leading-[132%] tracking-[0%] text-white mb-2 sm:mb-3 md:mb-4 text-left">
                  Jordi
                </h3>
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="text-white text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-extralight leading-relaxed">
                    <span>&ldquo;I've spent 40+ years coaching, scouting, and directing the development of players now worth over $3 billion.&rdquo;</span>
                  </div>

                  <div className="text-white text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-extralight text-left">
                    – Jordi Roura, Ex-FC Barcelona Coach
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nico's Card */}
          <div ref={cardRef2}
            className={`bg-white/5 backdrop-blur-md rounded-[16px] sm:rounded-[20px] md:rounded-[24px] lg:rounded-[32px] p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl w-full max-w-[700px] mx-auto cursor-pointer transform hover:scale-105 transition-transform duration-300 ${
              isVisible ? 'opacity-100 scale-110 translate-y-0' : 'opacity-0 scale-95 translate-y-20'
            }`}
            onMouseMove={(e) => handleMouseMove(e, cardRef2)}
            onMouseLeave={() => handleMouseLeave(cardRef2)}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/nico.jpg"
                  alt="Nico Cuevas"
                  width={256}
                  height={256}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full object-cover"
                  quality={95}
                />
              </div>
              
              {/* Content */}
              <div className="text-left flex-1">
                <h3 className="font-poppins font-light text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] leading-[132%] tracking-[0%] text-white mb-2 sm:mb-3 md:mb-4 text-left">
                  Nico
                </h3>
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="text-white text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-extralight leading-relaxed">
                    <span>&ldquo;I moved from Miami to Spain at 12, fought my way up to Getafe CF, and saw first-hand what most players miss.&rdquo;</span>
                  </div>
                  <div className="text-white text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-extralight text-left">
                    – Nico Cuevas, Pro Player & Co-Founder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Concluding Statement */}
        <p className={`text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[25px] text-white font-light leading-relaxed transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Together, They Created BV1 - A Step-By-Step Roadmap Based On What Actually Works
        </p>
      </div>

    </section>
  )
} 