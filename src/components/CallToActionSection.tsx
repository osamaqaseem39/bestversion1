"use client";

import React from 'react';
import Image from 'next/image';

const CallToActionSection = () => {
  return (
    <div 
      className="relative overflow-hidden"
      style={{
        height: '500px'
      }}
    >
      <div className="h-[440px] flex items-center rounded-2xl p-10">
        <div 
          className="bg-blue-900/30 rounded-2xl p-30 h-[440px] relative w-full mx-4"
          style={{
            backgroundImage: 'url(/ctaimage.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Logo in top right corner */}
          <div className="absolute top-6 right-6">
            <Image 
              src="/bv1icon.png" 
              alt="BV1 Icon" 
              width={100}
              height={100}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          </div>

          {/* Heading and subheading in bottom left */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 space-y-2 sm:space-y-4 max-w-4xl">
            <h2 
              className="text-white"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 275,
                fontSize: 'clamp(24px, 6vw, 50px)',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              Start Training Smarter — Today
            </h2>
            <p 
              className="text-blue-100"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: 'clamp(14px, 3vw, 25px)',
                lineHeight: '124%',
                letterSpacing: '0%'
              }}
            >
              Choose your program, develop your Football IQ, and <span className="hidden sm:inline"><br/></span> start becoming the player coaches remember.
            </p>
          </div>

          {/* Text links in bottom right */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 space-y-2 text-right">
            <a 
              href="#" 
              className="block text-white font-semibold transition-all duration-300 hover:text-blue-200"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: 'clamp(14px, 3vw, 25px)',
                lineHeight: '124%',
                letterSpacing: '0%'
              }}
            >
              Explore Programs
            </a>
            <a 
              href="#" 
              className="block text-white font-semibold transition-all duration-300 hover:text-blue-200"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: 'clamp(14px, 3vw, 25px)',
                lineHeight: '124%',
                letterSpacing: '0%'
              }}
            >
              Watch Free Masterclass
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection; 