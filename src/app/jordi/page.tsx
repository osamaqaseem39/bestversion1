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
        <div className="max-w-4xl mx-auto">
          {/* Meet Jordi Roura Header */}
          <div className="text-center mb-8">
            <div className="inline-block border border-white rounded-lg px-6 py-2 mb-6">
              <h1 className="font-poppins font-light text-white text-xl uppercase" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                Meet Jordi Roura
              </h1>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative mb-12">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
              <Image
                src="/jordi.jpg"
                alt="Jordi Roura"
                width={800}
                height={600}
                className="w-full h-full object-cover object-center"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="font-poppins font-light text-2xl leading-tight" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                From La Masia Graduate to Architect of a $3 Billion Football Legacy
              </h2>
            </div>
          </div>

          {/* Elite Developer Section */}
          <div className="mb-12">
            <div className="border border-white rounded-lg p-4 mb-6">
              <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                Elite Developer of Football Intelligence
              </h3>
            </div>
            <p className="font-poppins font-light text-white/90 leading-relaxed" style={{ fontWeight: 300, letterSpacing: '0%' }}>
              Jordi Roura Sola is a world-class football professional with over 40 years of experience, 
              known for his leadership at La Masia, FC Barcelona&apos;s iconic academy. His ability to develop 
              players who succeed at the highest level reflects deep tactical knowledge and leadership under pressure.
            </p>
          </div>

          {/* Director of La Masia Section */}
          <div className="mb-12">
            <div className="border border-white rounded-lg p-4 mb-6">
              <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                Director of La Masia (2014-2021)
              </h3>
            </div>
            <div className="mb-6">
              <h4 className="font-poppins font-bold text-white text-2xl mb-4" style={{ fontWeight: 700, letterSpacing: '0%' }}>
                $3 Billion in Player Market Value Developed
              </h4>
            </div>
            <p className="font-poppins font-light text-white/90 leading-relaxed" style={{ fontWeight: 300, letterSpacing: '0%' }}>
              During his 7-year tenure as Director of La Masia, Jordi oversaw the scouting and development 
              of hundreds of young players, contributing to a talent pool valued at over $3 billion. 
              His leadership maintained La Masia&apos;s global reputation and ensured the production of 
              world-class players under his guidance.
            </p>
          </div>

          {/* From La Masia Player Section */}
          <div className="mb-12">
            <div className="border border-white rounded-lg p-4 mb-6">
              <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                From La Masia Player to FC Barcelona Coach
              </h3>
            </div>
            <p className="font-poppins font-light text-white/90 leading-relaxed" style={{ fontWeight: 300, letterSpacing: '0%' }}>
              Born in Llagostera, Girona, Jordi joined the original La Masia as a young player, 
              experiencing firsthand the transformative power of elite youth development. This unique 
              perspective, combined with his extensive coaching experience, allows him to understand 
              both the player&apos;s journey and the coach&apos;s responsibility in nurturing talent.
            </p>
          </div>

          {/* Additional Experience Section */}
          <div className="mb-12">
            <div className="border border-white rounded-lg p-4 mb-6">
              <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                Professional Achievements
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-poppins font-medium text-white text-lg mb-3" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  FC Barcelona Roles
                </h4>
                <ul className="space-y-2 text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  <li>• La Masia Director (2014-2021)</li>
                  <li>• First Team Assistant Coach</li>
                  <li>• Youth Development Coordinator</li>
                  <li>• Technical Director</li>
                </ul>
              </div>
              <div>
                <h4 className="font-poppins font-medium text-white text-lg mb-3" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  Key Contributions
                </h4>
                <ul className="space-y-2 text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  <li>• Developed world-class talents</li>
                  <li>• 40+ years in football development</li>
                  <li>• Expert in youth coaching methodology</li>
                  <li>• International coaching experience</li>
                </ul>
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