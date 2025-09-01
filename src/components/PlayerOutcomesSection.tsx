"use client";

import React from 'react';
import Image from 'next/image';

const PlayerOutcomesSection = () => {
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
      { title: "Professional Mindset", image: "/card8.png" },
      { title: "Mental Strength", image: "/card9.png" },
      { title: "Tactical Mastery", image: "/card10.png" }
    ]
  ];

  const currentOutcomes = allOutcomes[0];

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-white/10 rounded-3xl shadow-2xl p-12">
        <div className="text-center mb-16">
          <p className="text-white font-poppins uppercase tracking-normal mb-4" style={{ fontSize: 'clamp(20px, 4vw, 45px)', fontWeight: '275', lineHeight: '132%', letterSpacing: '0%' }}>
            PLAYER OUTCOMES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            How BV1 Helps Serious Players Succeed
          </h2>
        </div>



        {/* Outcomes Grid */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {currentOutcomes.slice(0, 4).map((outcome, index) => (
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

        </div>

        </div>
      </div>
    </section>
  );
};

export default PlayerOutcomesSection; 