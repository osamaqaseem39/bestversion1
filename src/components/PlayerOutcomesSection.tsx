"use client";

import React, { useState, useCallback } from 'react';
import Image from 'next/image';

const PlayerOutcomesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const allOutcomes = [
    // Single row with all 10 cards
    [
      { title: "Train With La Masia Methods", image: "/card1.png" },
      { title: "Structure Like a Pro", image: "/card2.png" },
      { title: "Build Mental Confidence", image: "/card3.png" },
      { title: "Understand What Coaches Want", image: "/card4.png" },
      { title: "Advanced Tactics", image: "/card5.png" },
      { title: "Leadership Skills", image: "/card6.png" },
      { title: "Game Intelligence", image: "/card7.png" },
      { title: "Professional Mindset", image: "/card8.png" }
    ]
  ];

  const currentOutcomes = allOutcomes[0];
  const cardsPerView = 4; // Show 4 cards at a time
  const totalSlides = Math.ceil(currentOutcomes.length / cardsPerView);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-white/10 rounded-3xl shadow-2xl p-12">
          <div className="text-center mb-16">
            <p className="text-white font-poppins uppercase tracking-normal mb-4" style={{ fontSize: 'clamp(20px, 4vw, 45px)', fontWeight: '275', lineHeight: '132%', letterSpacing: '0%' }}>
              PLAYER OUTCOMES
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Players that Jordi Roura Helped Succeed
            </h2>
          </div>

          {/* Carousel Controls - Only visible on larger screens */}
          <div className="flex justify-end items-center space-x-2 sm:space-x-3 mb-6 sm:mb-8 lg:block">
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

          {/* Outcomes Grid - Mobile: All cards, Desktop: Carousel */}
          <div className="relative max-w-7xl mx-auto">
            {/* Mobile: Show all cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:hidden">
              {currentOutcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden min-h-[150px] sm:min-h-[200px] md:min-h-[250px]"
                >
                  <Image
                    src={outcome.image}
                    alt={outcome.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-xl"
                    quality={100}
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Desktop: Carousel with 4 cards */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {Array.from({ length: cardsPerView }, (_, i) => {
                const outcomeIndex = (currentSlide * cardsPerView + i) % currentOutcomes.length;
                const outcome = currentOutcomes[outcomeIndex];
                return (
                  <div
                    key={`${currentSlide}-${i}`}
                    className="relative rounded-xl overflow-hidden min-h-[150px] sm:min-h-[200px] md:min-h-[250px]"
                  >
                    <Image
                      src={outcome.image}
                      alt={outcome.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover rounded-xl"
                      quality={100}
                      priority
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerOutcomesSection; 