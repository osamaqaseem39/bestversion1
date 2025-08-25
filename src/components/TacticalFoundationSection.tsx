import React from 'react';
import Image from 'next/image';

const TacticalFoundationSection = () => {
  const foundations = [
    {
      title: "Positional IQ",
      icon: "/intelligence 1.png"
    },
    {
      title: "Scanning habits",
      icon: "/repeat 1.png"
    },
    {
      title: "Decision making",
      icon: "/leadership (1) 1.png"
    },
    {
      title: "Mental resilience",
      icon: "/resilience 1.png"
    },
    {
      title: "Pro habits & routines",
      icon: "/routine 1.png"
    },
    {
      title: "Physical durability",
      icon: "/physical-therapy 1.png"
    },
    {
      title: "tactical adaptation",
      icon: "/adapt.png"
    },
    {
      title: "Career & strategy",
      icon: "/strategy 1.png"
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-white font-poppins uppercase tracking-normal mb-4" style={{ fontSize: '45px', fontWeight: '275', lineHeight: '132%', letterSpacing: '0%' }}>
            METHOD
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The Tactical Foundation Every Serious Player Needs
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* First row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {foundations.slice(0, 3).map((foundation, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-full px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] h-28 w-full min-w-0 flex-shrink-0"
              >
                <div className="flex items-center justify-center space-x-4 h-full">
                  <div className="flex-shrink-0">
                    <Image
                      src={foundation.icon}
                      alt={foundation.title}
                      width={56}
                      height={56}
                      className="w-14 h-14 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(200deg) brightness(104%) contrast(97%)' }}
                    />
                  </div>
                  <div className="flex-grow text-center">
                    <h3 className="text-white font-poppins leading-none tracking-normal" style={{ fontSize: '35px', fontWeight: '275', lineHeight: '100%', letterSpacing: '0%' }}>
                      {foundation.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {foundations.slice(3, 6).map((foundation, index) => (
              <div
                key={index + 3}
                className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-full px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] h-28 w-full min-w-0 flex-shrink-0"
              >
                <div className="flex items-center justify-center space-x-4 h-full">
                  <div className="flex-shrink-0">
                    <Image
                      src={foundation.icon}
                      alt={foundation.title}
                      width={56}
                      height={56}
                      className="w-14 h-14 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(200deg) brightness(104%) contrast(97%)' }}
                    />
                  </div>
                  <div className="flex-grow text-center">
                    <h3 className="text-white font-poppins leading-none tracking-normal" style={{ fontSize: '35px', fontWeight: '275', lineHeight: '100%', letterSpacing: '0%' }}>
                      {foundation.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third row - 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {foundations.slice(6, 8).map((foundation, index) => (
              <div
                key={index + 6}
                className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-full px-8 py-6 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] h-28 w-full min-w-0 flex-shrink-0"
              >
                <div className="flex items-center justify-center space-x-4 h-full">
                  <div className="flex-shrink-0">
                    <Image
                      src={foundation.icon}
                      alt={foundation.title}
                      width={56}
                      height={56}
                      className="w-14 h-14 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(200deg) brightness(104%) contrast(97%)' }}
                    />
                  </div>
                  <div className="flex-grow text-center">
                    <h3 className="text-white font-poppins leading-none tracking-normal" style={{ fontSize: '35px', fontWeight: '275', lineHeight: '100%', letterSpacing: '0%' }}>
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