import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NicoPage = () => {
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
                  src="/nico.jpg"
                  alt="Nico Cuevas"
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
                Nico Cuevas
              </h1>
              <p className="font-poppins font-light text-2xl mb-8 leading-relaxed" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                Modern Player from Miami Training in Spain
              </p>
              <p className="font-poppins font-light text-lg leading-relaxed text-white/90" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                A driven footballer who brings the perspective of today&apos;s modern player, 
                combining international experience with cutting-edge training methodologies.
              </p>
            </div>
          </div>

          {/* Background Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
            <h2 className="font-poppins font-thin text-4xl text-white mb-8 uppercase" style={{ fontWeight: 250, letterSpacing: '0%' }}>
              Player Background
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-poppins font-medium text-xl text-white mb-4" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  International Experience
                </h3>
                <ul className="space-y-3 text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  <li>• Miami-based player</li>
                  <li>• Training in Spain</li>
                  <li>• International exposure</li>
                  <li>• Modern football perspective</li>
                </ul>
              </div>
              <div>
                <h3 className="font-poppins font-medium text-xl text-white mb-4" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  Key Strengths
                </h3>
                <ul className="space-y-3 text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  <li>• Contemporary training methods</li>
                  <li>• Player development insights</li>
                  <li>• Cross-cultural experience</li>
                  <li>• Driven mentality</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Modern Approach Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
            <h2 className="font-poppins font-thin text-4xl text-white mb-8 uppercase" style={{ fontWeight: 250, letterSpacing: '0%' }}>
              Modern Training Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-medium text-xl text-white mb-3" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  Innovation
                </h3>
                <p className="text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  Implementing cutting-edge training techniques and modern football methodologies
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-medium text-xl text-white mb-3" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  Player Perspective
                </h3>
                <p className="text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  Understanding the modern player&apos;s mindset and challenges in today&apos;s competitive environment
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-medium text-xl text-white mb-3" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  Global Experience
                </h3>
                <p className="text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  Combining American drive with European football culture and training standards
                </p>
              </div>
            </div>
          </div>

          {/* Training Philosophy */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
            <h2 className="font-poppins font-thin text-4xl text-white mb-8 uppercase" style={{ fontWeight: 250, letterSpacing: '0%' }}>
              Training Philosophy
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-poppins font-medium text-xl text-white mb-2" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                    Modern Methodology
                  </h3>
                  <p className="text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                    Implementing contemporary training approaches that reflect the current state of professional football
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-poppins font-medium text-xl text-white mb-2" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                    Player-Centric Approach
                  </h3>
                  <p className="text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                    Understanding the modern player&apos;s needs, challenges, and aspirations in today&apos;s competitive landscape
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-poppins font-medium text-xl text-white mb-2" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                    International Standards
                  </h3>
                  <p className="text-white/90 font-poppins font-light" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                    Bringing European football culture and training standards to create world-class development programs
                  </p>
                </div>
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
                &ldquo;As a modern player, I understand the challenges and opportunities that today&apos;s footballers face. My goal is to bridge the gap between traditional coaching and contemporary player needs.&rdquo;
              </p>
              <p className="font-poppins font-medium text-lg text-white/80" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                - Nico Cuevas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NicoPage; 