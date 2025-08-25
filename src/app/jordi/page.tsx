import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const JordiPage = () => {
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
            {/* Meet Jordi Roura Header */}
            <div className="text-center mb-2">
              <div className="inline-block bg-transparent rounded-xl px-6 py-2 shadow-[0_0_30px_#4652FF69]">
                <h1 className="font-poppins font-light text-white text-4xl uppercase drop-shadow-[0_0_20px_#4652FF69]" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  Meet Jordi Roura
                </h1>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative mb-10">
              <div className="relative w-full">
                <Image
                  src="/jordi about.png"
                  alt="Jordi Roura"
                  width={1600}
                  height={1000}
                  className="w-full h-auto object-contain"
                  quality={100}
                  priority
                />
              </div>
              <div className=" text-center">
                <h2 className="font-poppins text-white" style={{ fontWeight: 275, fontSize: '30px', lineHeight: '100%', letterSpacing: '0%' }}>
                  From La Masia Graduate to Architect of a $3 Billion Football Legacy
                </h2>
              </div>
            </div>

            {/* Elite Developer Section */}
            <div className="mb-12">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  Elite Developer of Football Intelligence
                </h3>
              </div>
              <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                Jordi Roura Sola is a world-class football professional with over 40 years of experience, 
                known for his leadership at La Masia, FC Barcelona&apos;s iconic academy. His ability to 
                <strong>develop players who succeed at the highest level</strong> reflects deep tactical knowledge and leadership under pressure.
              </p>
            </div>

            {/* Director of La Masia Section */}
            <div className="mb-12">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  Director of La Masia (2014-2021)
                </h3>
              </div>
              <div className="mb-6">
                <h4 className="font-poppins font-bold text-white text-2xl mb-4" style={{ fontWeight: 700, letterSpacing: '0%' }}>
                  $3 Billion in Player Market Value Developed
                </h4>
              </div>
              <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                As the Director of La Masia for 7 years, Jordi oversaw the scouting and development of hundreds 
                of young players, contributing directly to a talent pool now valued at over $3 billion. His 
                leadership helped maintain La Masia&apos;s global reputation as the gold standard in youth development.
              </p>
              <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                Under his tenure, the academy produced world-class players who now lead in both domestic and international football.
              </p>
            </div>

            {/* From La Masia Player Section */}
            <div className="mb-12">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  From La Masia Player to FC Barcelona Coach
                </h3>
              </div>
              <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                Born in Llagostera, Girona, Jordi joined the original La Masia residence at age 15 in 1982. 
                He lived and trained alongside names like Pep Guardiola, Tito Vilanova, Guillermo Amor, and 
                Aureli Altimira, embedding himself in the DNA of FC Barcelona&apos;s most iconic era.
              </p>
                              <ul className="space-y-2 text-white/90 font-poppins mt-4" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                    <li>• Made his senior debut for FC Barcelona B in a 4-0 win over Real Madrid Castilla</li>
                    <li>• Debuted in La Liga under Johan Cruyff in 1988</li>
                    <li>• Played in the 1989 European Super Cup before a serious knee injury halted his trajectory</li>
                  </ul>
              <p className="font-poppins text-white/90 mt-4" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                Despite the premature end to his playing career, Jordi&apos;s transition into coaching made an even bigger impact.
              </p>
            </div>

            {/* Coaching & Tactical Expertise Section */}
            <div className="mb-12">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  Coaching & Tactical Expertise
                </h3>
              </div>
              <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                Jordi went on to serve FC Barcelona in multiple roles.
              </p>
                              <ul className="space-y-2 text-white/90 font-poppins mt-4" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                    <li>• Tactical analyst under Pep Guardiola</li>
                    <li>• Assistant coach under Tito Vilanova during the 2012–13 season</li>
                    <li>• Interim head coach during Vilanova&apos;s illness, guiding Barça through a high-pressure campaign at the top level</li>
                  </ul>
              <p className="font-poppins text-white/90 mt-4" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                He also coached across all age levels at La Masia and held leadership roles in talent development, training methodology, and club identity building.
              </p>
            </div>

            {/* A Complete Football Professional Section */}
            <div className="mb-12">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  A Complete Football Professional
                </h3>
              </div>
              <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '30px', lineHeight: '120%', letterSpacing: '10%' }}>
                Jordi Roura&apos;s journey is a rare one — he has held nearly every role in football.
              </p>
              <div className="my-12">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10" style={{ top: '2rem', bottom: '2rem' }}></div>
                  
                  {/* Career path items */}
                  <div className="space-y-8">
                    {/* Youth Player */}
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                          <p className="font-poppins text-white" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                            Youth Player
                          </p>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-white/10 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="w-1/2 pl-8"></div>
                    </div>

                    {/* Professional Player */}
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right"></div>
                      <div className="w-4 h-4 bg-white/10 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="w-1/2 pl-8">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                          <p className="font-poppins text-white" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                            Professional Player
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Youth Coach */}
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                          <p className="font-poppins text-white" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                            Youth Coach
                          </p>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-white/10 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="w-1/2 pl-8"></div>
                    </div>

                    {/* Professional Coach */}
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right"></div>
                      <div className="w-4 h-4 bg-white/10 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="w-1/2 pl-8">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                          <p className="font-poppins text-white" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                            Professional Coach
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tactical Analyst */}
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                          <p className="font-poppins text-white" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                            Tactical Analyst
                          </p>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-white/10 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="w-1/2 pl-8"></div>
                    </div>

                    {/* Scout & Recruiter */}
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right"></div>
                      <div className="w-4 h-4 bg-white/10 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="w-1/2 pl-8">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                          <p className="font-poppins text-white" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                            Scout & Recruiter
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Academy Director */}
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                          <p className="font-poppins text-white" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                            Academy Director
                          </p>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-white/10 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="w-1/2 pl-8"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-poppins text-white/90 text-center" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                This full-circle perspective gives him unmatched insight into player development — from identifying talent to preparing them for elite-level competition.
              </p>
            </div>

            {/* Why He Built Best Version 1 Section */}
            <div className="text-center mb-12">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <h3 className="font-poppins font-medium text-white text-xl" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  Why He Built Best Version 1
                </h3>
              </div>
              <p className="font-poppins text-white/90 mb-6" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                Jordi created BVI to bring professional-level football education to players who otherwise wouldn&apos;t have access to it.
              </p>
              <p className="font-poppins text-white/90 mb-8" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                Through his exclusive Football IQ course and BVI&apos;s broader platform, he shares the foundational knowledge that most players never receive, no matter how hard they train.
              </p>
              <div className="inline-block bg-transparent rounded-xl px-6 py-2 shadow-[0_0_30px_#4652FF69]">
                <p className="font-poppins font-light text-white text-4xl uppercase drop-shadow-[0_0_20px_#4652FF69]" style={{ fontWeight: 300, letterSpacing: '0%' }}>
                  Jordi Roura
                </p>
              </div>
              <p className="font-poppins text-white/90" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                Understanding the game is what separates good players from great ones.
              </p>
            </div>

            {/* Quote Section */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
                <svg className="w-12 h-12 text-white/50 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="font-poppins text-white mb-6 italic" style={{ fontWeight: 275, fontSize: '25px', lineHeight: '120%', letterSpacing: '0%' }}>
                  &ldquo;Every player has the potential to become their best version. My role is to unlock that potential through dedicated coaching and personalized development.&rdquo;
                </p>
                <p className="font-poppins font-medium text-lg text-white/80" style={{ fontWeight: 500, letterSpacing: '0%' }}>
                  - Jordi Roura
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default JordiPage; 