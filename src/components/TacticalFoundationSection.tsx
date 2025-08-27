import React from 'react';
import Image from 'next/image';

const TacticalFoundationSection = () => {
  const foundations = [
    {
      title: "Positional IQ",
      icon: "/intelligence 1.png"
    },
    {
      title: "Scanning Habits",
      icon: "/repeat 1.png"
    },
    {
      title: "Decision Making",
      icon: "/leadership (1) 1.png"
    },
    {
      title: "Mental Resilience",
      icon: "/resilience 1.png"
    },
    {
      title: "Pro Habits & Routines",
      icon: "/routine 1.png"
    },
    {
      title: "Physical Durability",
      icon: "/physical-therapy 1.png"
    },
    {
      title: "Tactical Adaptation",
      icon: "/adapt.png"
    },
    {
      title: "Career & Strategy",
      icon: "/strategy 1.png"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-transparent">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-white font-poppins uppercase tracking-normal mb-3 sm:mb-4" style={{ fontSize: 'clamp(20px, 4vw, 45px)', fontWeight: '275', lineHeight: '132%', letterSpacing: '0%' }}>
            METHOD
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            The Tactical Foundation Every Serious Player Needs
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* First row: 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {foundations.slice(0, 3).map((foundation, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-full px-3 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] h-20 sm:h-24 md:h-28 w-full min-w-0 flex-shrink-0"
              >
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 h-full">
                  <div className="flex-shrink-0">
                    <Image
                      src={foundation.icon}
                      alt={foundation.title}
                      width={56}
                      height={56}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(200deg) brightness(104%) contrast(97%)' }}
                    />
                  </div>
                  <div className="flex-grow text-center">
                    <h3 className="text-white font-poppins leading-none tracking-normal" style={{ fontSize: 'clamp(12px, 2.5vw, 35px)', fontWeight: '275', lineHeight: '100%', letterSpacing: '0%' }}>
                      {foundation.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row: 3 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {foundations.slice(3, 6).map((foundation, index) => (
              <div
                key={index + 3}
                className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-full px-3 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] h-20 sm:h-24 md:h-28 w-full min-w-0 flex-shrink-0"
              >
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 h-full">
                  <div className="flex-shrink-0">
                    <Image
                      src={foundation.icon}
                      alt={foundation.title}
                      width={56}
                      height={56}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(200deg) brightness(104%) contrast(97%)' }}
                    />
                  </div>
                  <div className="flex-grow text-center">
                    <h3 className="text-white font-poppins leading-none tracking-normal" style={{ fontSize: 'clamp(12px, 2.5vw, 35px)', fontWeight: '275', lineHeight: '100%', letterSpacing: '0%' }}>
                      {foundation.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third row: 2 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 justify-items-center">
            {foundations.slice(6, 8).map((foundation, index) => (
              <div
                key={index + 6}
                className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-full px-3 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] h-20 sm:h-24 md:h-28 w-full min-w-0 flex-shrink-0 md:w-4/5 lg:w-3/4"
              >
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 h-full">
                  <div className="flex-shrink-0">
                    <Image
                      src={foundation.icon}
                      alt={foundation.title}
                      width={56}
                      height={56}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(200deg) brightness(104%) contrast(97%)' }}
                    />
                  </div>
                  <div className="flex-grow text-center">
                    <h3 className="text-white font-poppins leading-none tracking-normal" style={{ fontSize: 'clamp(12px, 2.5vw, 35px)', fontWeight: '275', lineHeight: '100%', letterSpacing: '0%' }}>
                      {foundation.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TacticalFoundationSection; 