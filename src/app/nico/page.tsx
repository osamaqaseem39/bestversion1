import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NicoPage = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Multiple glow circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow circle 1 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '10%',
            left: '15%',
            zIndex: 0
          }}
        />
        {/* Glow circle 2 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '29%',
            right: '20%',
            zIndex: 0
          }}
        />
        {/* Glow circle 3 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '1000px',
            height: '1000px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '45%',
            left: '8%',
            zIndex: 0
          }}
        />
        {/* Glow circle 4 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(120px)',
            top: '60%',
            right: '12%',
            zIndex: 0
          }}
        />
        {/* Glow circle 5 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '900px',
            height: '900px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 100%)',
            filter: 'blur(120px)',
            top: '75%',
            left: '25%',
            zIndex: 0
          }}
        />
        {/* Glow circle 6 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '85%',
            right: '30%',
            zIndex: 0
          }}
        />
        {/* Glow circle 7 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '750px',
            height: '750px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '15%',
            left: '60%',
            zIndex: 0
          }}
        />
        {/* Glow circle 8 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '1200px',
            height: '1200px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '35%',
            right: '45%',
            zIndex: 0
          }}
        />
        {/* Glow circle 9 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '550px',
            height: '550px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '55%',
            left: '75%',
            zIndex: 0
          }}
        />
        {/* Glow circle 10 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '850px',
            height: '850px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '70%',
            right: '8%',
            zIndex: 0
          }}
        />
        {/* Glow circle 11 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '650px',
            height: '650px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '5%',
            left: '85%',
            zIndex: 0
          }}
        />
        {/* Glow circle 12 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '950px',
            height: '950px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '90%',
            left: '5%',
            zIndex: 0
          }}
        />
        {/* Glow circle 13 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '1400px',
            height: '1400px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '21%',
            left: '28%',
            zIndex: 0
          }}
        />
        {/* Glow circle 14 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '1100px',
            height: '1100px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(70px)',
            top: '50%',
            right: '25%',
            zIndex: 0
          }}
        />
        {/* Glow circle 15 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(42px)',
            top: '26%',
            right: '60%',
            zIndex: 0
          }}
        />
        {/* Glow circle 16 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '1300px',
            height: '1300px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(52px)',
            top: '30%',
            left: '90%',
            zIndex: 0
          }}
        />
        {/* Glow circle 17 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '720px',
            height: '720px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(58px)',
            top: '65%',
            left: '35%',
            zIndex: 0
          }}
        />
        {/* Glow circle 18 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '480px',
            height: '480px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(42px)',
            top: '40%',
            right: '60%',
            zIndex: 0
          }}
        />
        {/* Glow circle 19 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '1050px',
            height: '1050px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(60px)',
            top: '95%',
            right: '15%',
            zIndex: 0
          }}
        />
        {/* Glow circle 20 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '680px',
            height: '680px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(50px)',
            top: '10%',
            left: '70%',
            zIndex: 0
          }}
        />
        {/* Glow circle 21 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '1150px',
            height: '1150px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '43%',
            left: '10%',
            zIndex: 0
          }}
        />
        {/* Glow circle 22 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '15%',
            left: '45%',
            zIndex: 0
          }}
        />
        {/* Glow circle 23 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '1250px',
            height: '1250px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '80%',
            left: '5%',
            zIndex: 0
          }}
        />
        {/* Glow circle 24 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '580px',
            height: '580px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(90px)',
            top: '25%',
            right: '5%',
            zIndex: 0
          }}
        />
        {/* Glow circle 25 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '1350px',
            height: '1350px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '60%',
            left: '15%',
            zIndex: 0
          }}
        />
        {/* Glow circle 26 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '520px',
            height: '520px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(85px)',
            top: '45%',
            right: '35%',
            zIndex: 0
          }}
        />
        {/* Glow circle 27 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '980px',
            height: '980px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '70%',
            left: '55%',
            zIndex: 0
          }}
        />
        {/* Glow circle 28 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '420px',
            height: '420px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(75px)',
            top: '85%',
            left: '80%',
            zIndex: 0
          }}
        />
        {/* Glow circle 29 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '1120px',
            height: '1120px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '5%',
            left: '25%',
            zIndex: 0
          }}
        />
        {/* Glow circle 30 */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '780px',
            height: '780px',
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 70%)',
            filter: 'blur(95px)',
            top: '35%',
            left: '85%',
            zIndex: 0
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10">
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
    </div>
  );
};

export default NicoPage; 