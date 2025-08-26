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
    <section className="relative max-w-8xl mx-auto overflow-hidden bg-transparent py-16">
      {/* Top Row Carousel */}
      <div className="relative z-20 mb-8 transform rotate-[-5deg]">
        <div className="overflow-hidden">
          <div 
            className="flex gap-8 animate-scroll"
            style={{ width: 'max-content' }}
          >
            {duplicatedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-transparent hover:scale-105 transition-all duration-300 flex-shrink-0"
                style={{ width: '200px' }}
              >
                <div className="relative">
                  <Image
                    src={feature.image}
                    alt={feature.text}
                    width={200}
                    height={150}
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row Carousel */}
      <div className="relative z-10 transform rotate-[5deg]">
        <div className="overflow-hidden">
          <div 
            className="flex gap-8 animate-scroll-reverse"
            style={{ width: 'max-content' }}
          >
            {duplicatedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-transparent hover:scale-105 transition-all duration-300 flex-shrink-0"
                style={{ width: '200px' }}
              >
                <div className="relative">
                  <Image
                    src={feature.image}
                    alt={feature.text}
                    width={200}
                    height={150}
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