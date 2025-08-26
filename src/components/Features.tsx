'use client'

import Image from 'next/image'

export default function Features() {

  const features = [
    {
      image: "/Tag 1.png",
      text: "GET FASTER"
    },
    {
      image: "/Tag 2.png",
      text: "BEAT THE DEFENDER"
    },
    {
      image: "/Tag 3.png",
      text: "FOLLOW ALONG COURSES"
    },
    {
      image: "/Tag 4.png",
      text: "IMPROVED FOOTWORK"
    },
    {
      image: "/Tag 5.png",
      text: "LEARN STRATEGY"
    },
    {
      image: "/Tag 6.png",
      text: "IMPROVED FOOTWORK"
    },
    {
      image: "/Tag 7.png",
      text: "ELITE CONE DRILLS"
    },
    {
      image: "/Tag 8.png",
      text: "IMPROVED FOOTWORK"
    },
    {
      image: "/Tag 9.png",
      text: "ELITE CONE DRILLS"
    },
    {
      image: "/Tag 10.png",
      text: "24/7 PRO COACH FEEDBACK"
    },
    {
      image: "/Tag 11.png",
      text: "IMPROVE KICK UPS"
    },
    {
      image: "/Tag 12.png",
      text: "BETTER BALL CONTROL"
    }
  ]

  // Duplicate features for seamless loop
  const duplicatedFeatures = [...features, ...features, ...features]

  // Auto-scroll effect is now handled by CSS animations
  // The useEffect is removed for better performance

  return (
    <section className="relative max-w-8xl mx-auto overflow-hidden bg-transparent">
      {/* Features Grid - Two Parallel Rows */}
      <div className="relative z-10 max-w-8xl mx-auto w-full">
        {/* Top Row */}
        <div className="flex justify-between items-center gap-0 mb-0 w-full transform rotate-[-5deg] relative z-20 overflow-hidden">
          <div className="flex gap-0 animate-scroll" style={{ width: 'max-content' }}>
            {duplicatedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-transparent hover:scale-105 transition-all duration-300 flex-shrink-0"
                style={{ width: '350px' }}
              >
                {/* Card Content */}
                <div className="relative">
                  {/* Tag Image */}
                  <Image
                    src={feature.image}
                    alt={feature.text}
                    width={350}
                    height={250}
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-center gap-0 w-full transform rotate-[5deg] relative z-10 -mt-56 overflow-hidden">
          <div className="flex gap-0 animate-scroll-reverse" style={{ width: 'max-content' }}>
            {duplicatedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-transparent hover:scale-105 transition-all duration-300 flex-shrink-0"
                style={{ width: '350px' }}
              >
                {/* Card Content */}
                <div className="relative">
                  {/* Tag Image */}
                  <Image
                    src={feature.image}
                    alt={feature.text}
                    width={350}
                    height={250}
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 