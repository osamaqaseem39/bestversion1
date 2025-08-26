'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProgramsSection() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const products = [
    {
      title: "MINI-COURSE",
      price: "$37",
      frontImage: "/37 front.png",
      backImage: "/37 back.png"
    },
    {
      title: "FULL COURSE", 
      price: "$449",
      frontImage: "/449 front.png",
      backImage: "/449 back.png"
    },
    {
      title: "VIDEO ANALYSIS",
      price: "$60",
      frontImage: "/600 front.png",
      backImage: "/600 back.png"
    }
  ]

  const [flippedCards, setFlippedCards] = useState([false, false, false])

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % products.length)
  }

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section id="programs" className="relative py-20 px-4 sm:px-6 lg:pl-8 lg:pr-0 overflow-hidden bg-transparent min-h-screen">


      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="font-poppins font-light text-6xl text-white uppercase tracking-wider">
            PROGRAMS
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[519px_1fr] gap-0 items-center relative">
          {/* Left Panel - Products Information */}
          <div className="relative w-full ">
            {/* Panel Content */}
            <div className="relative rounded-2xl overflow-hidden w-[519px] h-[661px]">
              {/* Background image */}
              <Image
                src="/Subtract.png"
                alt="Background Image"
                width={519}
                height={661}
                className="absolute inset-0  object-contain"
                priority
              />
              
              {/* Curved lines overlay */}
              <Image
                src="/Vector 59.png"
                alt="Curved Lines"
                width={519}
                height={661}
                className="absolute inset-0  object-contain"
                priority
              />
              
              {/* Content */}
              <div className="relative z-20 flex flex-col justify-center h-full px-16 pr-32">
                <h3 className="font-poppins font-bold text-[30px] text-white uppercase mb-8 tracking-[2%] leading-[132%]">
                  PRODUCTS
                </h3>
                
                <h4 className="font-poppins font-normal text-[30px] text-white mb-8 tracking-[0%] leading-[132%] uppercase">
                  BV1 PRO + 14 INSTRUCTIONAL FOOTBALL VIDEO TUTORIALS BY JORDI ROURA
                </h4>
                
                <p className="text-white/80 text-[13px] leading-[150%] max-w-[460px]">
                  Best Version 1 Pro is a set of premium instructional football video content that Jordi has been implementing successfully throughout his career in La Masia, it is a set of fundamental concepts that worked to shape the football game of hundreds of pro players in the best leagues throughout the world.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Product Cards */}
          <div className="relative flex justify-center items-center">
            <div className="flex gap-0 -ml-32">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                >
                  {/* Product Card using front and back images */}
                  <div 
                    className="relative w-[400px] h-[600px] cursor-pointer perspective-1000" 
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
                        className="w-full h-full object-cover"
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
                        className="w-full h-full object-cover"
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