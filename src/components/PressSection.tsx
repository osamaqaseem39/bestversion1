"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const PressSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pressQuotes = [
    {
      quote: "Jordi Roura, another Tito that surged from la Masia.",
      source: "Mundo Deportivo",
      logo: "/goal.png"
    },
    {
      quote: "Who are the prodigies allowing Barca to keep pace in La Liga?",
      source: "ESPN",
      logo: "/espn.png"
    },
    {
      quote: "Jordi Roura is the new Director of Youth Football",
      source: "FCB",
      logo: "/barca.png"
    },
    {
      quote: "Oral history: When Barcelona, Real Madrid played four Clasicos in 18 days.",
      source: "ESPN",
      logo: "/espn.png"
    },
    {
      quote: "Jordi Roura La Masia the best",
      source: "GOAL",
      logo: "/goal.png"
    },
    {
      quote: "Best Version 1 revolutionizes football education for serious players.",
      source: "Football Weekly",
      logo: "/goal.png"
    },
    {
      quote: "La Masia methods now accessible to players worldwide through BV1.",
      source: "Sport",
      logo: "/espn.png"
    },
    {
      quote: "The secret behind Barcelona's youth development success revealed.",
      source: "The Guardian",
      logo: "/goal.png"
    },
    {
      quote: "Jordi Roura's coaching philosophy transforms young talents into stars.",
      source: "Sky Sports",
      logo: "/espn.png"
    },
    {
      quote: "From La Masia to the world: How BV1 is democratizing elite football training.",
      source: "BBC Sport",
      logo: "/goal.png"
    },
    {
      quote: "Revolutionary approach to football development gains global recognition.",
      source: "ESPN FC",
      logo: "/espn.png"
    },
    {
      quote: "The man who shaped Messi's early career now helps players worldwide.",
      source: "Marca",
      logo: "/goal.png"
    },
    {
      quote: "Best Version 1: The digital academy changing football education forever.",
      source: "Goal.com",
      logo: "/goal.png"
    },
    {
      quote: "Jordi Roura's innovative methods reach players across continents.",
      source: "ESPN Deportes",
      logo: "/espn.png"
    },
    {
      quote: "La Masia's legendary coach brings his expertise to the digital age.",
      source: "Sport.es",
      logo: "/espn.png"
    },
    {
      quote: "The future of football coaching is here, and it's called Best Version 1.",
      source: "Football Insider",
      logo: "/goal.png"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === pressQuotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? pressQuotes.length - 1 : prevIndex - 1
    );
  };

  // Create infinite loop by duplicating the array
  const infiniteQuotes = [...pressQuotes, ...pressQuotes, ...pressQuotes];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset to beginning of middle set when reaching end
        if (nextIndex >= pressQuotes.length * 2) {
          return pressQuotes.length;
        }
        return nextIndex;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [pressQuotes.length]);

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex justify-between items-center mb-16">
          <h2 className="font-poppins font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-wider">
            PRESS
          </h2>
        </div>
      </div>

      {/* Press Quotes Carousel - Full Width */}
      <div className="relative w-full">
                 {/* Left Gradient Overlay */}
         <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none hidden md:block"></div>
         
         {/* Right Gradient Overlay */}
         <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none hidden md:block"></div>

                 {/* Navigation Arrows */}
         <button
           onClick={prevSlide}
           className="absolute left-16 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hidden md:flex"
         >
          <svg 
            className="w-5 h-5 text-gray-800" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>

                 <button
           onClick={nextSlide}
           className="absolute right-16 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg hidden md:flex"
         >
          <svg 
            className="w-5 h-5 text-gray-800" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>

                                   {/* Quotes Container */}
          <div className="overflow-hidden px-4 sm:px-8 md:px-16 lg:px-32">
            {/* Mobile: Single card view */}
            <div className="block sm:hidden">
              <div className="w-full bg-white/10 p-4 h-[300px] rounded-xl flex flex-col justify-between">
                <div className="text-white text-sm leading-relaxed text-center flex-grow flex flex-col items-center justify-center">
                  <div className="self-start">
                    <Image
                      src="/Quote Mark.png"
                      alt="Quote Mark"
                      width={40}
                      height={40}
                      className="transform rotate-180 mb-2 w-6 h-6"
                    />
                  </div>
                  <p>{pressQuotes[currentIndex % pressQuotes.length].quote}</p>
                  <div className="self-end">
                    <Image
                      src="/Quote Mark.png"
                      alt="Quote Mark"
                      width={40}
                      height={40}
                      className="mt-2 w-6 h-6"
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                    <Image
                      src={pressQuotes[currentIndex % pressQuotes.length].logo}
                      alt={pressQuotes[currentIndex % pressQuotes.length].source}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white font-medium">— {pressQuotes[currentIndex % pressQuotes.length].source}</span>
                </div>
              </div>
            </div>

            {/* Desktop: Carousel view */}
            <div className="hidden sm:block">
              <div 
                className="flex gap-6 transition-transform duration-[1400ms] ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (290 + 24)}px)`,
                  width: `${infiniteQuotes.length * (290 + 24)}px`
                }}
              >
                {infiniteQuotes.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[290px] h-[400px] bg-white/10 p-8 transition-all duration-500 flex flex-col justify-between"
                  >
                    {/* Quote Text */}
                    <div className="text-white text-lg leading-relaxed text-center flex-grow flex flex-col items-center justify-center">
                      <div className="self-start">
                        <Image
                          src="/Quote Mark.png"
                          alt="Quote Mark"
                          width={40}
                          height={40}
                          className="transform rotate-180 mb-4 w-10 h-10"
                        />
                      </div>
                      <p>{item.quote}</p>
                      <div className="self-end">
                        <Image
                          src="/Quote Mark.png"
                          alt="Quote Mark"
                          width={40}
                          height={40}
                          className="mt-4 w-10 h-10"
                        />
                      </div>
                    </div>
                    
                    {/* Source */}
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                        <Image
                          src={item.logo}
                          alt={item.source}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-white font-medium">— {item.source}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>

      
    </section>
  );
};

export default PressSection; 