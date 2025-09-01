"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const PressSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pressQuotes = [
    {
      quote: "Jordi Roura is the new Director of Youth Football",
      source: "FC Barcelona",
      logo: "/barca.png",
      link: "https://www.fcbarcelona.fr/fr/actualites/1103811/jordi-roura-is-the-new-director-of-youth-football"
    },
    {
      quote: "Jordi Roura, another Tito from La Masia",
      source: "Mundo Deportivo",
      logo: "/goal.png",
      link: "https://www.mundodeportivo.com/20120614/fc-barcelona/jordi-roura-segundo-entrenador-tito-vilanova_54311128616.html"
    },
    {
      quote: "FC Barcelona plants roots in USA with growing youth academy presence, motives",
      source: "Sports Illustrated",
      logo: "/espn.png",
      link: "https://www.si.com/soccer/2017/06/27/barcelona-youth-academy-usa-la-masia-jordi-roura"
    },
    {
      quote: "What Jordi Roura saw in Marc Guiu at age 7",
      source: "Mundo Deportivo",
      logo: "/goal.png",
      link: "https://www.mundodeportivo.com/futbol/fc-barcelona/20231023/1002092163/roura.html"
    },
    {
      quote: "Barcelona appoint Jordi Roura as new director of youth football",
      source: "ESPN",
      logo: "/espn.png",
      link: "https://www.espn.com/soccer/story/_/id/37400089/barcelona-appoint-jordi-roura-new-director-youth-football"
    },
    {
      quote: "Former Barcelona youth director urges club not to sell Chelsea-linked star – 'I would ask for €120 million'",
      source: "Barca Universal",
      logo: "/goal.png",
      link: "https://barcauniversal.com/former-barcelona-youth-director-urges-club-not-to-sell-chelsea-linked-star-i-would-ask-for-e120-million/"
    },
    {
      quote: "Ex-La Masia chiefs reveal the two players that have surprised them most at Barcelona",
      source: "Barca Blaugranes",
      logo: "/espn.png",
      link: "https://www.barcablaugranes.com/2024/11/2/24284358/ex-la-masia-chiefs-reveal-the-two-players-that-have-surprised-them-most-at-barcelona"
    },
    {
      quote: "Barcelona hero vs Real Madrid almost left La Masia for Man United – 'It was a done deal'",
      source: "Yahoo Sports",
      logo: "/goal.png",
      link: "https://sports.yahoo.com/barcelona-hero-vs-real-madrid-103600772.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAALgwekt2Q_JCbOCwMmmn2_jaR4pOCa152-y50HU50FT--9A87DN3J_kphsz5bdCppbNQVDw4isylKIf2eaQLtbhmWvRYYnpmFfQK2c3-1OgM0dblBsuoDRqrwJdNUbyoM-rcDWz0ED0zHQ_xfBNx_pilACTSZ6hH7NdiOTC9kC0-"
    },
    {
      quote: "Jordi Roura: 'I look at the players and I'm optimistic'",
      source: "FC Barcelona",
      logo: "/barca.png",
      link: "https://www.fcbarcelona.fr/fr/actualites/1144078/jordi-roura-i-look-at-the-players-and-im-optimistic"
    },
    {
      quote: "Ex-Barcelona academy chiefs reveal early impressions of teenage prodigy – 'Wow, this kid is different!'",
      source: "Barca Universal",
      logo: "/goal.png",
      link: "https://barcauniversal.com/ex-barcelona-academy-chiefs-reveal-early-impressions-of-teenage-prodigy-wow-this-kid-is-different/"
    },
    {
      quote: "Barcelona coach Vilanova to undergo surgery, chemotherapy",
      source: "France 24",
      logo: "/espn.png",
      link: "https://www.france24.com/en/20121219-spain-barcelona-coach-vilanova-cancer-surgery"
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
              {pressQuotes[currentIndex % pressQuotes.length].link ? (
                <a 
                  href={pressQuotes[currentIndex % pressQuotes.length].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white/10 p-4 h-[300px] rounded-xl flex flex-col justify-between hover:bg-white/15 transition-all duration-300 cursor-pointer"
                >
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
                </a>
              ) : (
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
              )}
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
                    {item.link ? (
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col justify-between h-full hover:bg-white/15 transition-all duration-300 cursor-pointer"
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
                      </a>
                    ) : (
                      <>
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
                      </>
                    )}
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