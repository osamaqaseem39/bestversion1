import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToActionSection from '@/components/CallToActionSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 pb-20 pt-20">
        <div className="max-w-6xl mx-auto">
       

          {/* Hero Image Section */}
          <div className="relative mb-10">
            <div className="grid lg:grid-cols-5  items-center gap-10">
              {/* Left Side - Text Content */}
              <div className="text-white text-center lg:col-span-3">
                <h2 className="font-poppins font-bold text-white text-[55px] mb-8 leading-tight" style={{ fontWeight: 700, letterSpacing: '0%' }}>
                  Jordi Roura
                </h2>
                <div className="font-poppins text-white/90" style={{ fontWeight: 250  , fontSize: '35px', lineHeight: '120%', letterSpacing: '0%' }}>
                  <p className="mb-2">Most players train hard.</p>
                  <p className="mb-2">But the ones who go far...understand</p>
                  <p>the game.</p>
                </div>
              </div>
              
              {/* Right Side - Portrait with Blue Glow */}
              <div className="relative flex justify-end lg:col-span-2">
                <div className="relative w-[412px] h-[623px] overflow-hidden">
                  <Image
                    src="/jordi aboutpage.png"
                    alt="Jordi Roura"
                    width={600}
                    height={1000}
                    className="w-full h-full object-cover object-center"
                    quality={100}
                    priority
                  />
                  {/* Blue glow effect */}
                  <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_#4652FF69] pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="mb-12 text-center lg:col-span-5 max-w-[800px] mx-auto">
               <h3 className="font-poppins font-medium text-white text-[45px]" style={{ fontWeight: 275, letterSpacing: '0%' }}>
                Our Mission
              </h3>
       
            <h4 className="font-poppins font-bold text-white text-[55px] mb-8" style={{ fontWeight: 700, letterSpacing: '0%' }}>
              At Best Version 1
            </h4>
            <p className="font-poppins text-white/90 mb-6" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              We believe that football isn&apos;t just about how hard you train — it&apos;s about how well you understand the game.
            </p>
            <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
              Most players are working nonstop. But few are ever taught how to think the game. How to scan. How to position. How to make better decisions. These are the foundations that separate professionals from everyone else — and they&apos;re rarely taught outside elite academies.
            </p>
          </div>

        </div>
      </div>

      {/* Who We Are Section - Full Width & Height */}
      <div className="text-center w-full min-h-screen flex flex-col justify-center px-4 mb-20 ">
        <div className="max-w-[800px] mx-auto ">
             <h3 className="font-poppins font-medium text-white text-[45px]" style={{ fontWeight: 275, letterSpacing: '0%' }}>
              Who We Are
            </h3>
          <h4 className="font-poppins font-bold text-white text-[55px] mb-8" style={{ fontWeight: 700, letterSpacing: '0%' }}>
            Jordi Roura
          </h4>
          <p className="font-poppins text-white/90 mb-12" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
            A former FC Barcelona first-team coach and Director of La Masia, Jordi Roura is one of the most respected figures in youth development. He helped scout and develop talents now worth over $3 billion — including Gavi, Yamal, Cubarsí, and Balde. He&apos;s seen the game at every level — and now he&apos;s bringing that knowledge to players everywhere.
          </p>
        </div>
        
        {/* Three Images Section - Full Width */}
        <div className="w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-7 mb-8 items-start">
            {/* Left Image */}
            <div className="text-center md:col-span-2">
              <div className="relative overflow-hidden mb-4">
                <Image
                  src="/jordi-bench.png"
                  alt="Jordi on the bench at FC Barcelona"
                  width={400}
                  height={450}
                  className="w-full h-full object-cover object-center"
                  quality={100}
                />
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_#4652FF69] pointer-events-none"></div>
              </div>
              <p className="font-poppins text-white/90 text-sm" style={{ fontWeight: 275, letterSpacing: '0%' }}>
                Jordi on the bench at FC Barcelona
              </p>
            </div>

            {/* Middle Image - Larger */}
            <div className="text-center md:col-span-3">
              <div className="relative overflow-hidden mb-4">
                <Image
                  src="/jordi-messi.png"
                  alt="Jordi walking with Messi or during match prep"
                  width={480}
                  height={570}
                  className="w-full h-full object-cover object-center"
                  quality={100}
                />
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_#4652FF69] pointer-events-none"></div>
              </div>
              <p className="font-poppins text-white/90 text-sm" style={{ fontWeight: 275, letterSpacing: '0%' }}>
                Jordi walking with Messi or during match prep
              </p>
            </div>

            {/* Right Image */}
            <div className="text-center md:col-span-2 pt-[230px]">
              <div className="relative overflow-hidden mb-4">
                <Image
                  src="/jordi-training.png"
                  alt="La Masia youth training session"
                  width={400}
                  height={450}
                  className="w-full h-full object-cover object-center"
                  quality={100}
                />
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_#4652FF69] pointer-events-none"></div>
              </div>
              <p className="font-poppins text-white/90 text-sm" style={{ fontWeight: 275, letterSpacing: '0%' }}>
                La Masia youth training session
              </p>
            </div>
          </div>

          <p className="font-poppins text-white/90 text-[30px]" style={{ fontWeight: 500, letterSpacing: '0%' }}>
            40+ years at the heart of elite football development
          </p>
        </div>
      </div>

      {/* Nico Cuevas Section - Full Width & Height */}
      <div className="text-center w-full min-h-screen flex flex-col justify-center px-4">
        <div className="max-w-[800px] mx-auto mb-12">
          
          <h4 className="font-poppins font-bold text-white text-[55px] mb-8" style={{ fontWeight: 700, letterSpacing: '0%' }}>
            Nico Cuevas
          </h4>
          <p className="font-poppins text-white/90 mb-6" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
            Born in Miami and raised in Spain, Nico built his career from the bottom — starting at small regional teams and earning spots at the academies of RCD Espanyol and Getafe CF. After years of training without clear guidance, he realized what most players were missing, Football IQ
          </p>
          <p className="font-poppins text-white/90 mb-12" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
            Now, he leads BV1&apos;s player education and mentorship content — translating elite concepts into clear, relatable lessons for the next generation.
          </p>
        </div>
        
        {/* Three Images Section - Full Width */}
        <div className="w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-7 mb-8 items-start">
            {/* Left Image */}
            <div className="text-center md:col-span-2">
              <div className="relative overflow-hidden mb-4">
                <Image
                  src="/nico.png"
                  alt="Nico in action at Getafe training"
                  width={400}
                  height={450}
                  className="w-full h-full object-cover object-center"
                  quality={100}
                />
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_#4652FF69] pointer-events-none"></div>
              </div>
              <p className="font-poppins text-white/90 text-sm" style={{ fontWeight: 275, letterSpacing: '0%' }}>
                Nico in action at Getafe training
              </p>
            </div>

            {/* Middle Image - Larger */}
            <div className="text-center md:col-span-3">
              <div className="relative overflow-hidden mb-4">
                <Image
                  src="/nico playing.png"
                  alt="Nico training alone on pitch"
                  width={480}
                  height={570}
                  className="w-full h-full object-cover object-center"
                  quality={100}
                />
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_#4652FF69] pointer-events-none"></div>
              </div>
              <p className="font-poppins text-white/90 text-sm" style={{ fontWeight: 275, letterSpacing: '0%' }}>
                Nico training alone on pitch
              </p>
            </div>

            {/* Right Image */}
            <div className="text-center md:col-span-2 h-[570px] pt-[230px]">
              <div className="relative overflow-hidden mb-4 flex items-end  justify-center ">
                <Image
                  src="/nico about.png"
                  alt="Nico leading a filming session or video breakdown"
                  width={400}
                  height={450}
                  className="w-full h-full object-cover object-center"
                  quality={100}
                />
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_#4652FF69] pointer-events-none"></div>
              </div>
              <p className="font-poppins text-white/90 text-sm" style={{ fontWeight: 275, letterSpacing: '0%' }}>
                Nico leading a filming session or video breakdown
              </p>
            </div>
          </div>

          <p className="font-poppins text-white/90 text-[30px]" style={{ fontWeight: 500, letterSpacing: '0%' }}>
            From Miami to Spain: a real journey, rebuilt into a roadmap
          </p>
        </div>
      </div>

      {/* Why We Built This Section */}
      <div className="text-center w-full min-h-screen flex flex-col justify-center px-4">
        <div className="max-w-[800px] mx-auto mb-12">
          <h3 className="font-poppins font-bold text-white text-[45px] mb-8" style={{ fontWeight: 275, letterSpacing: '0%' }}>
            Why We Built This
          </h3>
          <p className="font-poppins text-white/90 " style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
            We didn&apos;t create Best Version 1 to be another course. We built it because we saw a gap that needed to be filled.
          </p>
        </div>
        
        {/* Two Cards Section */}
        <div className="w-[1200px] mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Card - Jordi Roura */}
            <div className="">
              <div className="relative overflow-hidden mb-6">
                <Image
                  src="/jordi-coaching.png"
                  alt="Jordi Roura coaching on the field"
                  width={500}
                  height={580}
                  className="w-full h-full object-cover object-center"
                  quality={100}
                />
                <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_#4652FF69] pointer-events-none"></div>
              </div>
              <h4 className="font-poppins font-bold text-white text-3xl mb-4" style={{ fontWeight: 700, letterSpacing: '0%' }}>
                Jordi Roura
              </h4>
              <p className="font-poppins text-white/90 italic" style={{ fontWeight: 275, fontSize: '20px', lineHeight: '120%', letterSpacing: '0%' }}>
                &ldquo;Football is a thinking sport. Once you learn how to see it, everything changes&rdquo;
              </p>
            </div>

            {/* Right Card - Nico Cuevas */}
            <div className="">
              <div className="relative overflow-hidden mb-6">
                <Image
                  src="/nico-portrait.png"
                  alt="Nico Cuevas portrait"
                  width={500}
                  height={580}
                  className="w-full h-full object-cover object-center"
                  quality={100}
                />
                <div className="absolute inset-0 rounded-xl shadow-[0_0_30px_#4652FF69] pointer-events-none"></div>
              </div>
              <h4 className="font-poppins font-bold text-white text-3xl mb-4" style={{ fontWeight: 700, letterSpacing: '0%' }}>
                Nico Cuevas
              </h4>
              <p className="font-poppins text-white/90 italic" style={{ fontWeight: 275, fontSize: '20px', lineHeight: '120%', letterSpacing: '0%' }}>
                &ldquo;I was tired of training hard and getting nowhere because no one ever explained the game to me.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage; 