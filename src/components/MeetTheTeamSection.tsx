import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MeetTheTeamSection = () => {
  const coaches = [
    {
      name: "JORDI ROURA",
      image: "/jordi.jpg",
      description: "FORMER FC BARCELONA COACH AND LA MASIA DIRECTOR, HAS SPENT OVER 40 YEARS DEVELOPING SOME OF THE WORLD'S TOP TALENTS."
    },
    {
      name: "NICO CUEVAS", 
      image: "/nico.jpg",
      description: "A MODERN PLAYER FROM MIAMI TRAINING IN SPAIN, BRINGS THE PERSPECTIVE OF TODAY'S DRIVEN FOOTBALLER."
    }
  ];

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Background gradient overlay */}
       
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-white font-poppins uppercase tracking-normal mb-4" style={{ fontSize: '45px', fontWeight: '275', lineHeight: '132%', letterSpacing: '0%' }}>
            MEET THE TEAM
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            MEET THE TEAM BEHIND BEST VERSION 1
          </h2>
          <p className="font-poppins font-light text-[24px] text-white leading-[100%] text-center uppercase max-w-4xl mx-auto" style={{ fontWeight: 300, letterSpacing: '0%' }}>
            AT BEST VERSION 1, WE BELIEVE EVERY PLAYER DESERVES ACCESS TO ELITE FOOTBALL EDUCATION - 
            NOT JUST THOSE INSIDE THE TOP ACADEMIES.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {coaches.map((coach, index) => (
            <div key={index} className="relative group">
                             {/* Coach Image Card */}
               <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                 <Image
                   src={coach.image}
                   alt={coach.name}
                   width={800}
                   height={800}
                   className="w-full h-full object-cover object-center"
                   quality={100}
                   priority
                 />
                {/* Subtle gradient overlay */}
  </div>

              {/* Coach Info Card */}
              <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 overflow-hidden">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10">
                <h3 className="font-poppins font-thin text-[45px] text-white mb-4 leading-[100%] text-center uppercase" style={{ fontWeight: 250, letterSpacing: '0%' }}>
                  {coach.name}
                </h3>
                <p className="font-poppins font-light text-[15px] text-white leading-[132%] mb-8 text-center" style={{ letterSpacing: '0%' }}>
                  {coach.description}
                </p>
                
                {/* View More Button */}
                <Link href={coach.name === "JORDI ROURA" ? "/jordi" : "/nico"}>
                  <button className="w-full bg-transparent border border-white/30 hover:bg-white/10 text-white font-poppins font-medium py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                    VIEW MORE
                    <svg 
                      className="w-4 h-4" 
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
                </Link>
                </div>
               </div>
             </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default MeetTheTeamSection; 