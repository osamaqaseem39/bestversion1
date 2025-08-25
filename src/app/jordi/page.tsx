import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const JordiPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/jordi.jpg"
                  alt="Jordi Roura"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
            
            <div className="text-white">
              <h1 className="font-poppins font-thin text-6xl mb-6 leading-tight uppercase" style={{ fontWeight: 250, letterSpacing: '0%' }}>
                Jordi Roura
              </h1>
              <p className="font-poppins font-light text-2xl mb-8 leading-relaxed" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                Former FC Barcelona Coach and La Masia Director
              </p>
              <p className="font-poppins font-light text-lg leading-relaxed text-white/90" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                With over 40 years of experience developing some of the world&apos;s top talents, 
                Jordi Roura brings unparalleled expertise in youth development and elite football coaching.
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
            <h2 className="font-poppins font-thin text-4xl text-white mb-8 uppercase" style={{ fontWeight: 250, letterSpacing: '0%' }}>
              Professional Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-poppins font-medium text-xl text-white mb-4" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  FC Barcelona
                </h3>
                <ul className="space-y-3 text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  <li>• La Masia Director</li>
                  <li>• First Team Assistant Coach</li>
                  <li>• Youth Development Coordinator</li>
                  <li>• Technical Director</li>
                </ul>
              </div>
              <div>
                <h3 className="font-poppins font-medium text-xl text-white mb-4" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  Key Achievements
                </h3>
                <ul className="space-y-3 text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  <li>• Developed world-class talents</li>
                  <li>• 40+ years in football development</li>
                  <li>• Expert in youth coaching methodology</li>
                  <li>• International coaching experience</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
            <h2 className="font-poppins font-thin text-4xl text-white mb-8 uppercase" style={{ fontWeight: 250, letterSpacing: '0%' }}>
              Coaching Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-medium text-xl text-white mb-3" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  Innovation
                </h3>
                <p className="text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  Pioneering modern training methodologies that adapt to each player&apos;s unique potential
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-medium text-xl text-white mb-3" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  Individual Development
                </h3>
                <p className="text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  Personalized coaching approach that nurtures each player&apos;s strengths and addresses weaknesses
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-medium text-xl text-white mb-3" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  Excellence
                </h3>
                <p className="text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  Commitment to developing players who excel both technically and mentally on the pitch
                </p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
              <svg className="w-12 h-12 text-white/50 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="font-poppins font-light text-2xl text-white mb-6 italic" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                &ldquo;Every player has the potential to become their best version. My role is to unlock that potential through dedicated coaching and personalized development.&rdquo;
              </p>
              <p className="font-poppins font-medium text-lg text-white/80" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                - Jordi Roura
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JordiPage; 