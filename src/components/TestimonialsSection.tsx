"use client";

import React, { useEffect, useRef, useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      role: "Marcus Chen, Academy Player",
      quote: "Before BV1, I was just running around the pitch hoping something would happen. Now I see the game completely differently - I know where to look, when to move, and how to position myself like the pros do. My coach says I went from being reactive to being two steps ahead of everyone else. The scanning drills alone changed my entire game.",
      image: "/proplayer.jpg",
      stars: 5
    },
    {
      role: "Alessandro Rodriguez, Midfielder",
      quote: "Having played at the professional level for 8 years, I thought I knew everything about football intelligence. Jordi's methods opened my eyes to details I'd been missing my entire career. The positional awareness techniques and decision-making frameworks are exactly what separated Barcelona's golden generation from everyone else. I wish I'd had access to this 15 years ago.",
      image: "/orangeplayer.jpg",
      stars: 5
    },
    {
      role: "James McKenna, Director",
      quote: "We've implemented several concepts from the BV1 program across our academy, and the transformation in our players' tactical understanding has been remarkable. What Jordi teaches isn't just theory - it's the exact methodology that produced Messi, Xavi, and the greatest generation of footballers we've ever seen. Our coaches are learning alongside the players, and everyone's game IQ has elevated dramatically.",
      image: "/director.png",
      stars: 5
    },
    {
      role: "John Thompson, Father of Academy Player",
      quote: "As a parent, you're always looking for programs that actually deliver results, not just empty promises. Within 3 months of my son starting BV1, his club coach pulled me aside to ask what had changed - his game awareness and decision-making had improved dramatically. When I told him about Jordi's program, he said 'That explains everything - your son is now playing with La Masia intelligence.' Worth every penny.",
      image: "/parent.png",
      stars: 5
    },
    {
      role: "David Martinez, Youth Coach",
      quote: "I've been coaching youth football for 12 years, and I thought I understood tactics until I experienced BV1. Jordi's approach to teaching positional play and game reading is completely different from anything else out there. My players are now asking better questions, making smarter runs, and understanding the 'why' behind every movement. It's not just improved their play - it's made me a better coach.",
      image: "/coach.png",
      stars: 5
    },
    {
      role: "Emma Rodriguez, Youth Player",
      quote: "I used to get frustrated because I had good skills but never got picked for trials. BV1 taught me it's not about fancy tricks - it's about making smart decisions and reading the game. Now scouts are calling my coach asking about me.",
      image: "/juniorplayer.jpg",
      stars: 5
    },
    {
      role: "Carlos Mendez, Professional Midfielder",
      quote: "The mental side of Jordi's training is incredible. Learning how Barcelona's legends think about the game has made me a more complete player even at 28. My positioning and timing have improved more in 6 months than in my previous 3 seasons.",
      image: "/clubplayer.png",
      stars: 5
    },
    {
      role: "Michael O'Connor, Academy Director",
      quote: "We've tried many development programs, but nothing comes close to the depth and authenticity of what BV1 offers. Having La Masia's actual methods taught by someone who lived it is invaluable for serious player development.",
      image: "/young.jpeg",
      stars: 5
    }
  ];

  const marqueeRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId: number;
    let scrollPosition = 0;
    const normalSpeed = 0.6; // Slower normal speed
    const hoverSpeed = 0.2; // Even slower on hover

    const animate = () => {
      const currentSpeed = isHoveredRef.current ? hoverSpeed : normalSpeed;
      scrollPosition += currentSpeed;
      
      // Reset position when it reaches the end to create seamless loop
      const marqueeHeight = marquee.scrollHeight / 2; // Since we duplicated the content
      if (scrollPosition >= marqueeHeight) {
        scrollPosition = 0;
      }
      
      if (marquee) {
        marquee.style.transform = `translateY(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []); // Remove isHovered dependency to prevent resets

  // Update ref when state changes
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <svg
        key={i}
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  // Create pairs of testimonials for two-column layout
  const testimonialPairs = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialPairs.push([
      testimonials[i],
      testimonials[i + 1] || null
    ]);
  }

  // Duplicate pairs for seamless loop
  const duplicatedPairs = [...testimonialPairs, ...testimonialPairs];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-transparent relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-transparent via-transparent to-black/60 z-5" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/95 via-black/85 via-black/70 via-black/50 via-black/30 to-transparent z-5" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-5" />
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-white font-poppins tracking-normal mb-3 sm:mb-4" style={{ fontSize: 'clamp(20px, 4vw, 45px)', fontWeight: '300', lineHeight: '132%', letterSpacing: '0%' }}>
            Why Coaches, Parents, and Players
            <span className="block">Trust Best Version 1</span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Marquee Container */}
          <div 
            className="relative overflow-hidden h-[800px] w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            <div 
              ref={marqueeRef}
              className="w-full"
              style={{ 
                willChange: 'transform'
              }}
            >
              {duplicatedPairs.map((pair, pairIndex) => (
                <div 
                  key={pairIndex}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16"
                >
                  {/* First testimonial in pair */}
                  <div
                    className="bg-transparent rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700/30 transition-all duration-300 min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] w-full"
                  >
                    <div className="h-full flex flex-col justify-center text-center">
                      {/* Images Section */}
                      <div className="mb-4 sm:mb-6 flex justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-600/50">
                          <img
                            src={pair[0]?.image}
                            alt={pair[0]?.role}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Stars Section */}
                      <div className="mb-3 sm:mb-4 flex justify-center">
                        <div className="flex space-x-1">
                          {renderStars(pair[0]?.stars || 0)}
                        </div>
                      </div>

                      <h3 className="font-poppins text-white mb-3 sm:mb-4" style={{ fontSize: 'clamp(16px, 3vw, 35px)', fontWeight: '400', lineHeight: '100%', letterSpacing: '0%' }}>
                        {pair[0]?.role}
                      </h3>
                      <p className="font-poppins text-white text-sm" style={{ fontWeight: '400', lineHeight: '120%', letterSpacing: '0%' }}>
                        {pair[0]?.quote}
                      </p>
                    </div>
                  </div>

                  {/* Second testimonial in pair (if exists) */}
                  {pair[1] && (
                    <div
                      className="bg-transparent rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700/30 transition-all duration-300 min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] w-full"
                    >
                      <div className="h-full flex flex-col justify-center text-center">
                        {/* Images Section */}
                        <div className="mb-4 sm:mb-6 flex justify-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-600/50">
                            <img
                              src={pair[1]?.image}
                              alt={pair[1]?.role}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Stars Section */}
                        <div className="mb-3 sm:mb-4 flex justify-center">
                          <div className="flex space-x-1">
                            {renderStars(pair[1]?.stars || 0)}
                          </div>
                        </div>

                        <h3 className="font-poppins text-white mb-3 sm:mb-4" style={{ fontSize: 'clamp(16px, 3vw, 35px)', fontWeight: '400', lineHeight: '100%', letterSpacing: '0%' }}>
                          {pair[1]?.role}
                        </h3>
                        <p className="font-poppins text-white text-sm" style={{ fontWeight: '400', lineHeight: '120%', letterSpacing: '0%' }}>
                          {pair[1]?.quote}
                        </p>
                      </div>
                    </div>
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

export default TestimonialsSection; 