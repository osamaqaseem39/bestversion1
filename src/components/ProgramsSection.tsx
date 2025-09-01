'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ProgramsSection() {
  const router = useRouter();
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);

  const products = [
    {
      title: "FULL COURSE", 
      price: "$449",
      frontImage: "/449 front.png",
      backImage: "/449 back.png"
    },
    {
      title: "VIDEO ANALYSIS",
      price: "$600",
      frontImage: "/600 front.png",
      backImage: "/600 back.png"
    },
    {
      title: "MINI-COURSE",
      price: "$37",
      frontImage: "/37 front coming soon.png",
      backImage: "/37 back coming soon.png"
    },
    {
      title: "BASIC COURSE", 
      price: "$49",
      frontImage: "/49 front coming soon.png",
      backImage: "/49 back coming soon.png"
    },
    {
      title: "STANDARD COURSE",
      price: "$97",
      frontImage: "/97 front coming soon.png",
      backImage: "/97 back coming soon.png"
    }
  ]

  const [flippedCards, setFlippedCards] = useState([false, false, false, false, false])

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % products.length)
  }

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
    
    // Calculate scroll based on mouse position
    const containerWidth = rect.width;
    const scrollThreshold = containerWidth * 0.7; // Start scrolling when mouse is 70% to the right
    
    if (x > scrollThreshold && !isScrolling) {
      setIsScrolling(true);
      // Scroll to next card
      setTimeout(() => {
        nextCard();
        setIsScrolling(false);
      }, 300);
    }
  };

  // Calculate translation based on mouse position for better card visibility
  const getTranslationClass = () => {
    if (!isHovered) return 'relative lg:-ml-20';
    
    // Check if mouse is on the left or right half
    const isOnRightHalf = mousePosition.x > (mousePosition.x / 2);
    
    // Left half: less translation
    if (!isOnRightHalf) {
      return 'lg:transform lg:-translate-x-[25%]';
    }
    
    // Right half: more translation
    return 'lg:transform lg:-translate-x-[40%]';
  };

  return (
    <section 
      id="programs" 
      className="relative py-4 sm:py-6 md:py-8 lg:py-12 px-3 sm:px-4 md:px-6 lg:pl-8 lg:pr-0 overflow-hidden bg-transparent min-h-screen lg:h-screen"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-poppins font-light text-[24px] sm:text-[32px] md:text-[40px] lg:text-6xl text-white uppercase tracking-wider">
            PROGRAMS
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[519px_1fr] gap-6 sm:gap-8 lg:gap-0 items-center relative">
          {/* Left Panel - Products Information */}
          <div className={`relative w-full transition-all duration-700 ${isHovered ? 'lg:blur-sm' : ''}`}>
            {/* Panel Content */}
            <div className="relative rounded-2xl overflow-hidden w-full max-w-[519px] h-[320px] sm:h-[400px] md:h-[480px] lg:h-[580px] mx-auto lg:mx-0">
              {/* Background image */}
              <Image
                src="/Subtract.png"
                alt="Background Image"
                width={519}
                height={661}
                className="absolute inset-0 object-contain"
                priority
              />
              
              {/* Curved lines overlay */}
              <Image
                src="/Vector 59.png"
                alt="Curved Lines"
                width={519}
                height={661}
                className="absolute inset-0 object-contain"
                priority
              />
              
              {/* Content */}
              <div className="relative z-20 flex flex-col justify-center h-full px-4 sm:px-6 md:px-12 lg:px-16 pr-4 sm:pr-8 md:pr-16 lg:pr-32">
                <h3 className="font-poppins font-bold text-[16px] sm:text-[20px] md:text-[26px] lg:text-[30px] text-white uppercase mb-3 sm:mb-4 md:mb-6 lg:mb-8 tracking-[2%] leading-[132%]">
                  PRODUCTS
                </h3>
                
                <h4 className="font-poppins font-normal text-[14px] sm:text-[18px] md:text-[24px] lg:text-[30px] text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 tracking-[0%] leading-[132%] uppercase">
                  BV1 PRO + 14 INSTRUCTIONAL FOOTBALL VIDEO TUTORIALS BY JORDI ROURA
                </h4>
                
                <p className="text-white/80 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] leading-[150%] max-w-[460px]">
                  Best Version 1 Pro is a set of premium instructional football video content that Jordi has been implementing successfully throughout his career in La Masia, it is a set of fundamental concepts that worked to shape the football game of hundreds of pro players in the best leagues throughout the world.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Product Cards */}
          <div 
            className="relative flex justify-center items-start lg:items-center w-full mt-2 sm:mt-4 lg:mt-0 h-auto lg:h-full overflow-visible"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Navigation Buttons - Always visible but enhanced on hover */}
            <div className="absolute top-4 right-4 z-30 flex gap-2">
              <button
                onClick={prevCard}
                className={`${isHovered ? 'bg-white/30 scale-110' : 'bg-white/10'} text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-125 hover:bg-white/40`}
                aria-label="Previous program"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextCard}
                className={`${isHovered ? 'bg-white/30 scale-110' : 'bg-white/10'} text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-125 hover:bg-white/40`}
                aria-label="Next program"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              

            </div>
            
            {/* Mobile Grid Layout - 2 cards per row, back sides only */}
            <div className="lg:hidden w-full px-4 py-8">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm mx-auto">
                {products.map((product, index) => (
                  <div
                    key={`mobile-${index}`}
                    className="flex justify-center"
                  >
                    {/* Mobile Card - Back side only, smaller size */}
                    <div 
                      className="relative w-[140px] h-[210px] sm:w-[160px] sm:h-[240px] cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg"
                      onClick={() => {
                        if (product.title === "FULL COURSE") {
                          window.open("https://bv1pro.com/bestversion1", "_blank");
                        } else if (product.title === "VIDEO ANALYSIS") {
                          router.push("/video-analysis");
                        }
                      }}
                    >
                      <Image
                        src={product.backImage}
                        alt={`${product.title} - Back`}
                        width={160}
                        height={240}
                        className="w-full h-full object-contain"
                        priority
                        onError={(e) => {
                          console.error(`Failed to load back image for ${product.title}:`, product.backImage)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Debug info - remove this later */}
             
            </div>

            {/* Desktop Carousel Layout - Original flip functionality */}
            <div className={`hidden lg:flex flex-row gap-0 transition-all duration-700 ease-in-out justify-center ${getTranslationClass()}`}>
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex justify-center"
                >
                  {/* Product Card using front and back images */}
                  <div 
                    className={`relative w-[360px] h-[540px] cursor-pointer perspective-1000 transition-all duration-500 ${flippedCards[index] ? 'transform scale-110 -translate-y-4 shadow-2xl' : 'transform scale-100 shadow-lg'}`}
                    style={{
                      filter: flippedCards[index] ? 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))' : 'none'
                    }}
                    onMouseEnter={() => setFlippedCards(prev => {
                      const newFlipped = [...prev]
                      newFlipped[index] = true
                      return newFlipped
                    })}
                    onMouseLeave={() => setFlippedCards(prev => {
                      const newFlipped = [...prev]
                      newFlipped[index] = false
                      return newFlipped
                    })}
                    onClick={() => {
                      if (product.title === "FULL COURSE") {
                        window.open("https://bv1pro.com/bestversion1", "_blank");
                      } else if (product.title === "VIDEO ANALYSIS") {
                        router.push("/video-analysis");
                      }
                    }}
                  >
                    {/* Front of card */}
                    <div 
                      className="absolute inset-0 transition-transform duration-700 backface-hidden"
                      style={{
                        transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <Image
                        src={product.frontImage}
                        alt={`${product.title} - Front`}
                        width={400}
                        height={600}
                        className="w-full h-full object-contain"
                        priority
                        onError={(e) => {
                          console.error(`Failed to load front image for ${product.title}:`, product.frontImage)
                        }}
                      />
                    </div>
                    
                    {/* Back of card */}
                    <div 
                      className="absolute inset-0 transition-transform duration-700 backface-hidden"
                      style={{
                        transform: flippedCards[index] ? 'rotateY(0deg)' : 'rotateY(-180deg)',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <Image
                        src={product.backImage}
                        alt={`${product.title} - Back`}
                        width={400}
                        height={600}
                        className="w-full h-full object-contain"
                        priority
                        onError={(e) => {
                          console.error(`Failed to load back image for ${product.title}:`, product.backImage)
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 