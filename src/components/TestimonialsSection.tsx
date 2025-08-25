import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      role: "PARENT",
      quote: "BVI FINALLY GAVE MY SON THE CLARITY AND CONFIDENCE TO PLAY HIS BEST"
    },
    {
      role: "COACH",
      quote: "THESE ARE THE SAME PRINCIPLES I USE AT THE PROFESSIONAL LEVEL"
    },
    {
      role: "PLAYER",
      quote: "I STARTED APPLYING WHAT I LEARNED AND IMMEDIATELY GOT NOTICED"
    },
    {
      role: "JORDI",
      quote: "WE BUILT BVI TO GIVE EVERY PLAYER ACCESS TO THE EDUCATION THEY DESERVE."
    }
  ];

  return (
    <section className="py-20 bg-transparent relative">
      {/* Background gradient overlay */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-white font-poppins uppercase tracking-normal mb-4" style={{ fontSize: '45px', fontWeight: '300', lineHeight: '132%', letterSpacing: '0%' }}>
          WHY COACHES, PARENTS, AND PLAYERS
          <span className="block">TRUST BEST VERSION 1</span>
          </p>
        
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-transparent rounded-xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ width: '480px', height: '380px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
            >
              <div className="h-full flex flex-col justify-center text-left">
                <h3 className="font-poppins text-white mb-4 uppercase" style={{ fontSize: '35px', fontWeight: '400', lineHeight: '100%', letterSpacing: '0%' }}>
                  {testimonial.role}
                </h3>
                <p className="font-poppins text-white" style={{ fontSize: '30px', fontWeight: '400', lineHeight: '100%', letterSpacing: '0%' }}>
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default TestimonialsSection; 