import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NicoPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

        <div className="container mx-auto px-4 pb-20 pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Meet Nico Cuevas Header */}
          <div className="text-center mb-2">
            <div className="inline-block bg-transparent rounded-xl px-6 py-2 shadow-[0_0_30px_#4652FF69]">
              <h1 className="font-poppins font-light text-white text-4xl uppercase drop-shadow-[0_0_20px_#4652FF69]" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                Meet Nico Cuevas
              </h1>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative mb-10">
            <div className="relative w-full">
              <Image
                src="/nico about.png"
                alt="Nico Cuevas"
                width={1600}
                height={1000}
                className="w-full h-auto object-contain"
                quality={100}
                priority
              />
            </div>
            <div className=" text-center">
              <h2 className="font-poppins text-white" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '100%', letterSpacing: '0%' }}>
                From Miami to Spain: The Modern Player&apos;s Journey to Elite Development
              </h2>
            </div>
          </div>

          {/* Modern Player Development Section */}
          <div className="mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                A Player Who Lived the Struggle
              </h3>
            </div>
            <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              Nico Cuevas is a professional player who built his football career from the ground up — starting in 
              <strong> local Miami clubs</strong> and eventually earning spots at the 
              <strong> academies of RCD Espanyol and Getafe CF.</strong>
            </p>
            <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              His path wasn&apos;t gifted. It wasn&apos;t handed down through scouts or big-name connections. It was carved out with persistence, setbacks, and a constant hunger to improve.
            </p>
            <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              Now, through Best Version 1, Nico is helping players who are just like he was — hungry, coachable, and tired of being overlooked — finally get the football education they deserve.
            </p>
          </div>

          {/* From Local Pitches to Spanish Academies Section */}
          <div className="mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                From Local Pitches to Spanish Academies
              </h3>
            </div>
            <div className="mb-6">
              <h4 className="font-poppins font-bold text-white text-2xl mb-4" style={{ fontWeight: 700, letterSpacing: '0%' }}>
                The Real Journey of a Modern Player
              </h4>
            </div>
            <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              Growing up in Miami, Nico played for grassroots clubs, always dreaming of reaching the professional level — but without a roadmap.
            </p>
            <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              At just 12 years old, he moved to Spain with his family and began the long, unglamorous climb:
            </p>
            <ul className="space-y-2 text-white/90 font-poppins mt-4" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '100%', letterSpacing: '0%' }}>
              <li>• Played for small regional teams in Catalonia</li>
              <li>• Earned a trial and contract with RCD Espanyol&apos;s academy</li>
              <li>• Continued rising, eventually signing with the academy of Getafe CF</li>
            </ul>
            <p className="font-poppins text-white/90 mt-4" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              He experienced the full reality of chasing football in Europe — the silent rejections, the uncertainty, and the moments when effort alone wasn&apos;t enough.
            </p>
          </div>

          {/* From Player to Coach Section */}
          <div className="mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                From Modern Player to Development Coach
              </h3>
            </div>
            <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              Nico&apos;s playing career gave him firsthand experience with the evolution of modern football training and methodology. 
              He trained alongside international players and experienced the cutting-edge approaches used in European academies, 
              giving him insights that traditional coaches often lack.
            </p>
            <ul className="space-y-2 text-white/90 font-poppins mt-4" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '100%', letterSpacing: '0%' }}>
              <li>• Miami-based player with international aspirations</li>
              <li>• Trained in Spanish football methodology</li>
              <li>• Experienced modern training techniques firsthand</li>
              <li>• Understands contemporary player psychology and needs</li>
            </ul>
            <p className="font-poppins text-white/90 mt-4" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              This unique background allows him to connect with today&apos;s players on a level that traditional coaches cannot.
            </p>
          </div>

          {/* Modern Training Expertise Section */}
          <div className="mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                The Problem No One Talks About
              </h3>
            </div>
            <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              Nico realized something most players never admit
            </p>
            <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              It&apos;s not just about how hard you train — it&apos;s about how well you understand the game.
            </p>
            <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              Every step of the way, he noticed players with less talent advancing faster. Why? Because they had better football IQ — taught by coaches who knew what to look for
            </p>
            <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              Most players are never taught the game this way. That became his mission.
            </p>
          </div>

          {/* Why He Co-Founded Best Version 1 Section */}
          <div className="mb-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
              <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                Why He Co-Founded Best Version 1
              </h3>
            </div>
            <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              Nico teamed up with former FC Barcelona and La Masia coach Jordi Roura to create Best Version 1 — a platform that finally teaches the tactical, positional, and mental side of the game in a way that young players can actually understand.
            </p>
            <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              At BVI, Nico leads:
            </p>
            <ul className="space-y-2 text-white/90 font-poppins mt-4" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '100%', letterSpacing: '0%' }}>
              <li>• All player-facing course content and delivery</li>
              <li>• The mentorship experience and community guidance</li>
              <li>• New product development, including position-specific training and career support tools</li>
            </ul>
            <p className="font-poppins text-white/90 mt-4" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              He combines his real journey through the system with elite football knowledge to deliver something truly unique.
            </p>
          </div>

          {/* Central Highlight Section */}
          <div className="text-center mb-12">
            <p className="font-poppins text-white/90 mb-2" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '100%', letterSpacing: '0%' }}>
              in
            </p>
            <div className="inline-block bg-transparent rounded-xl px-6 py-2 shadow-[0_0_30px_#4652FF69]">
              <p className="font-poppins font-light text-white text-4xl uppercase drop-shadow-[0_0_20px_#4652FF69]" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                Nico Cuevas
              </p>
            </div>
            <p className="font-poppins text-white/90 mt-2" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '100%', letterSpacing: '0%' }}>
              Words
            </p>
            <div className="mt-8">
              <p className="font-poppins text-white/90 italic" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                &ldquo;I built BVI to be the program I wish someone had given me when I was 13. I was lost, doing the work, but not seeing results. This is the clarity I never had — and now I&apos;m giving it to players who are ready to take control of their future.&rdquo;
              </p>
            </div>
          </div>        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NicoPage; 