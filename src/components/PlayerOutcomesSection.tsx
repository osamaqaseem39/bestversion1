"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const PlayerOutcomesSection = () => {
  const [currentSet, setCurrentSet] = useState(0);

  const allOutcomes = [
    // Set 1
    [
      { title: "Train With La Masia Methods", image: "/card1.png" },
      { title: "Structure Like a Pro", image: "/card2.png" },
      { title: "Build Mental Confidence", image: "/card3.png" },
      { title: "Understand What Coaches Want", image: "/card4.png" }
    ],
    // Set 2 (you can add more card images here)
    [
      { title: "Advanced Tactics", image: "/card1.png" },
      { title: "Leadership Skills", image: "/card2.png" },
      { title: "Game Intelligence", image: "/card3.png" },
      { title: "Professional Mindset", image: "/card4.png" }
    ]
  ];

  const currentOutcomes = allOutcomes[currentSet];

  const nextSlide = () => {
    setCurrentSet((prev) => (prev + 1) % allOutcomes.length);
  };

  const prevSlide = () => {
    setCurrentSet((prev) => (prev - 1 + allOutcomes.length) % allOutcomes.length);
  };

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-white/10 rounded-3xl shadow-2xl p-12">
        <div className="text-center mb-16">
          <p className="text-white font-poppins uppercase tracking-normal mb-4" style={{ fontSize: '45px', fontWeight: '275', lineHeight: '132%', letterSpacing: '0%' }}>
            PLAYER OUTCOMES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            How BV1 Helps Serious Players Succeed
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end mb-8">
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-blue-500 transition-all duration-300 flex items-center justify-center"
            >
              <svg 
                className="w-5 h-5 text-white" 
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
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 border border
              -gray-600 hover:border-blue-500 transition-all duration-300 flex items-center justify-center"
            >
              <svg 
                className="w-5 h-5 text-white" 
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
          </div>
        </div>

        {/* Outcomes Grid */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {currentOutcomes.map((outcome, index) => (
              <div
                key={`${currentSet}-${index}`}
                className="relative rounded-xl overflow-hidden"
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

        </div>

        </div>
      </div>
    </section>
  );
};

export default PlayerOutcomesSection; 