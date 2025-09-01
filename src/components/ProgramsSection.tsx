'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ProgramsSection() {
  const router = useRouter();
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
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

  // Single translation to center of screen
  const getTranslationClass = () => {
    if (!isHovered) return 'relative lg:-ml-20';
    
    // Single translation to center
    return 'lg:transform lg:-translate-x-[30%]';
  };

  return (
    <section 
      id="programs" 
      className="relative py-4 sm:py-6 md:py-8 lg:py-12 px-2 sm:px-3 md:px-6 lg:pl-8 lg:pr-0 overflow-hidden bg-transparent min-h-[100vh] sm:min-h-[100vh] md:min-h-[100vh] lg:h-screen"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-2 sm:px-3 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8 lg:mb-16">
          <h2 className="font-poppins font-light text-[20px] sm:text-[24px] md:text-[32px] lg:text-6xl text-white uppercase tracking-wider">
            PROGRAMS
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-4 sm:gap-6 md:gap-8 lg:gap-0 items-center relative">
          {/* Left Panel - Products Information */}
          <div className={`relative w-full transition-all duration-700 ${isHovered ? 'lg:blur-sm' : ''}`}>
            {/* Panel Content */}
            <div className="relative rounded-2xl overflow-hidden w-full max-w-[400px] h-[250px] sm:h-[300px] md:h-[380px] lg:h-[500px] mx-auto lg:mx-0">
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
              <div className="relative z-20 flex flex-col justify-center h-full px-3 sm:px-4 md:px-6 lg:px-16 pr-3 sm:pr-4 md:pr-8 lg:pr-32">
                <h3 className="font-poppins font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[24px] text-white uppercase mb-1 sm:mb-2 md:mb-3 lg:mb-6 tracking-[2%] leading-[132%]">
                  PRODUCTS
                </h3>
                
                <h4 className="font-poppins font-normal text-[10px] sm:text-[12px] md:text-[14px] lg:text-[20px] text-white mb-1 sm:mb-2 md:mb-3 lg:mb-6 tracking-[0%] leading-[132%] uppercase">
                  BV1 PRO + 14 INSTRUCTIONAL FOOTBALL VIDEO TUTORIALS BY JORDI ROURA
                </h4>
                
                <p className="text-white/80 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[12px] leading-[150%] max-w-[460px]">
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
          >
            {/* Mobile Grid Layout - 2 cards per row, back sides only */}
            <div className="lg:hidden w-full px-2 sm:px-4 py-4 sm:py-6 md:py-8">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
                {products.map((product, index) => (
                  <div
                    key={`mobile-${index}`}
                    className="flex justify-center"
                  >
                    {/* Mobile Card - Back side only, fully responsive size */}
                    <div 
                      className="relative w-full max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[150px] aspect-[2/3] cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg"
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
                        width={180}
                        height={270}
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
                    className={`relative w-[300px] h-[450px] cursor-pointer perspective-1000 transition-all duration-500 ${flippedCards[index] ? 'transform scale-110 -translate-y-4 shadow-2xl' : 'transform scale-100 shadow-lg'}`}
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