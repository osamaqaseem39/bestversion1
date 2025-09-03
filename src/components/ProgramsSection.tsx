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
    
    // Get the container width to determine the middle point
    // We'll use a fixed value since we can't easily get the actual container width here
    const containerWidth = 800; // Approximate container width
    const middlePoint = containerWidth / 2;
    
    // Check if mouse is on the left or right half
    const isOnRightHalf = mousePosition.x > middlePoint;
    
    // Left half: less translation
    if (!isOnRightHalf) {
      return 'lg:transform lg:-translate-x-[25%] xl:-translate-x-[30%] 2xl:-translate-x-[35%] 4xl:-translate-x-[40%]';
    }
    
    // Right half: more translation
    return 'lg:transform lg:-translate-x-[40%] xl:-translate-x-[45%] 2xl:-translate-x-[50%] 4xl:-translate-x-[55%]';
  };

  return (
    <section 
      id="programs" 
      className="relative py-4 sm:py-6 md:py-8 lg:py-12 px-2 sm:px-3 md:px-6 lg:pl-8 lg:pr-0 overflow-hidden bg-transparent min-h-screen lg:h-screen"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-2 sm:px-3 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8 lg:mb-16 2xl:mb-20 4xl:mb-24">
          <h2 className="font-poppins font-light text-[20px] sm:text-[24px] md:text-[32px] lg:text-6xl 2xl:text-7xl 4xl:text-8xl text-white uppercase tracking-wider">
            PROGRAMS
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] 2xl:grid-cols-[562px_1fr] 4xl:grid-cols-[675px_1fr] gap-4 sm:gap-6 md:gap-8 lg:gap-0 items-center relative">
          {/* Left Panel - Products Information */}
          <div className={`relative w-full transition-all duration-700 ${isHovered ? 'lg:blur-sm' : ''}`}>
            {/* Panel Content */}
            <div className="relative rounded-2xl overflow-hidden w-full max-w-[450px] 2xl:max-w-[562px] 4xl:max-w-[675px] h-[225px] sm:h-[270px] md:h-[338px] lg:h-[506px] 2xl:h-[633px] 4xl:h-[760px] mx-auto lg:mx-0">
              {/* Background image */}
              <Image
                src="/Subtract.png"
                alt="Background Image"
                width={675}
                height={760}
                className="absolute inset-0 object-contain"
                priority
              />
              
              {/* Curved lines overlay */}
              <Image
                src="/Vector 59.png"
                alt="Curved Lines"
                width={675}
                height={760}
                className="absolute inset-0 object-contain"
                priority
              />
              
              {/* Content */}
              <div className="relative z-20 flex flex-col justify-center h-full px-3 sm:px-4 md:px-5 lg:px-13 2xl:px-18 4xl:px-22 pr-3 sm:pr-4 md:pr-8 lg:pr-27 2xl:pr-36 4xl:pr-43">
                <h3 className="font-poppins font-bold text-[13px] sm:text-[15px] md:text-[17px] lg:text-[26px] 2xl:text-[30px] 4xl:text-[34px] text-white uppercase mb-2 sm:mb-3 md:mb-4 lg:mb-6 2xl:mb-8 4xl:mb-10 tracking-[2%] leading-[132%]">
                  PRODUCTS
                </h3>
                
                <h4 className="font-poppins font-normal text-[11px] sm:text-[13px] md:text-[15px] lg:text-[26px] 2xl:text-[30px] 4xl:text-[34px] text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 2xl:mb-8 4xl:mb-10 tracking-[0%] leading-[132%] uppercase">
                  BV1 PRO + 14 INSTRUCTIONAL FOOTBALL VIDEO TUTORIALS BY JORDI ROURA
                </h4>
                
                <p className="text-white/80 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[13px] 2xl:text-[15px] 4xl:text-[17px] leading-[150%] max-w-[396px] 2xl:max-w-[495px] 4xl:max-w-[594px]">
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
            {/* Mobile Grid Layout - 2 cards per row, back sides only */}
            <div className="lg:hidden w-full px-2 sm:px-3 md:px-4 py-3 sm:py-4 md:py-6">
              <div className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-3 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                {products.map((product, index) => (
                  <div
                    key={`mobile-${index}`}
                    className="flex justify-center"
                  >
                    {/* Mobile Card - Back side only, fully responsive size */}
                    <div 
                      className="relative w-full max-w-[80px] sm:max-w-[100px] md:max-w-[120px] aspect-[2/3] cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg"
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
                        width={120}
                        height={180}
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
                    className={`relative w-[300px] h-[450px] 2xl:w-[350px] 2xl:h-[525px] 4xl:w-[400px] 4xl:h-[600px] cursor-pointer perspective-1000 transition-all duration-500 ${flippedCards[index] ? 'transform scale-110 -translate-y-4 shadow-2xl' : 'transform scale-100 shadow-lg'}`}
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