import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VideoAnalysisPage = () => {
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
      </div>

      {/* Content container */}
      <div className="relative z-10">
        {/* Header */}
        <Header />

        <div className="container mx-auto px-4 pb-20 pt-20">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-20">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                <span className="text-white font-poppins text-lg" style={{ fontWeight: 500 }}>
                  Video Analysis
                </span>
              </div>
              
              <h1 className="font-poppins font-bold text-white text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight" style={{ fontWeight: 700 }}>
                World-Class Tactical Feedback, Designed For You
              </h1>
              
              <p className="font-poppins text-white/80 text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed" style={{ fontWeight: 300 }}>
                Get a professional breakdown of your match footage by top analysts, supervised by Jordi Roura. Discover your strengths, fix your weaknesses, and become a smarter, more effective player.
              </p>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
                <p className="font-poppins text-white/90 text-base leading-relaxed" style={{ fontWeight: 300 }}>
                  <strong>Football Player Video Analysis service</strong> designed to help players refine their skills and reach their full potential on the field. Provides detailed, professional assessments of players' performances using game footage. By analyzing every movement, including passing, dribbling, positioning, and decision-making, players receive personalized feedback and actionable insights.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://bv1pro.com/complete-order-page-page-3165"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-poppins text-lg hover:bg-white/20 transition-all duration-300"
                  style={{ fontWeight: 600 }}
                >
                  🗾 Get One Report – $600
                </Link>
                <Link 
                  href="https://bv1pro.com/complete-order-page-page-3165"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-poppins text-lg hover:bg-white/20 transition-all duration-300"
                    style={{ fontWeight: 600 }}
                >
                  🗾 Get Four Reports – $2000
                </Link>
              </div>
            </div>
            
            {/* Video Analysis Image */}
            <div className="mb-20 text-center">
              <div className="max-w-6xl mx-auto">
                <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl">
                  <Image
                    src="/video analysis.png"
                    alt="Video Analysis Service"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover object-center"
                    quality={100}
                  />
                </div>
              </div>
            </div>

            {/* Service Description Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="font-poppins font-bold text-white text-3xl md:text-4xl mb-6" style={{ fontWeight: 700 }}>
                  Video Analysis Service
                </h2>
                <p className="font-poppins text-white/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
                  Our comprehensive analysis goes beyond basic highlights to provide you with the tactical intelligence that separates elite players from the rest. Every aspect of your game is examined through the lens of professional football methodology.
                </p>
              </div>
            </div>

            {/* Section 1: What You Get */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h2 className="font-poppins font-bold text-white text-4xl md:text-5xl mb-8" style={{ fontWeight: 700 }}>
                  A Personalized Tactical Report That Can Change Your Career
                </h2>
                
                              <div className="max-w-4xl mx-auto space-y-6">
                <p className="font-poppins text-white/80 text-lg md:text-xl leading-relaxed" style={{ fontWeight: 300 }}>
                  Our Player Video Analysis service is trusted by players across all levels — from academy to semi-pro. Using full-game footage, we deliver a professional-level breakdown of your performance: what you did well, what needs work, and exactly how to improve.
                </p>
                <p className="font-poppins text-white/80 text-lg md:text-xl leading-relaxed" style={{ fontWeight: 300 }}>
                  All reports are supervised by Jordi Roura (former FC Barcelona coach & La Masia director), and conducted by top analysts from our BV1 team. You'll walk away with a clearer understanding of your game than ever before.
                </p>
              </div>
              
              {/* Important Notes Box */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 mt-8 max-w-4xl mx-auto">
                <h4 className="font-poppins font-bold text-white text-xl mb-4 text-center" style={{ fontWeight: 600 }}>
                  Important Notes
                </h4>
                <ul className="space-y-2 text-left">
                  {[
                    "A complete game of the player is required.",
                    "BV1 Team analysts dedicate between 3-5 Hours to each report.",
                    "A 45 mins zoom session is booked to review the report with the player.",
                    "Report is done and reviewed by best version 1 team of analysts with tons of professional experience supervised by Jordi Roura",
                    "After making payment you have to send video by email to team@bestversion1.com using We Transfer."
                  ].map((note, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1 flex-shrink-0">•</span>
                      <span className="font-poppins text-white/90 text-sm" style={{ fontWeight: 300 }}>
                        {note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>

              {/* What's Included Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  "Full tactical & technical breakdown of your game",
                  "3–5 hours of in-depth analysis by BV1 team",
                  "Individual player report (PDF)",
                  "45-min Zoom session to review feedback",
                  "Actionable training advice and drills"
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl">✓</span>
                    </div>
                    <p className="font-poppins text-white/90 text-base" style={{ fontWeight: 400 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: What We Analyze */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h2 className="font-poppins font-bold text-white text-4xl md:text-5xl mb-8" style={{ fontWeight: 700 }}>
                  We Go Beyond the Surface — Here's What We Break Down
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Tactical Analysis */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <h3 className="font-poppins font-bold text-white text-2xl mb-6 text-center" style={{ fontWeight: 700 }}>
                    Tactical Analysis
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Positional Concepts: We will Analyze your key tactical responsibilities, such as positioning, body orientation, decision-making, attacking spaces, and defensive adjustments.",
                      "Five Phases of the Game: We will teach you how your behavior should adapt to each phase of the game.",
                      "Decision-Making: We will improve individual decision-making by identifying and correcting mistakes and reinforcing correct actions using video analysis.",
                      "Solutions to Common Errors: We offer practical solutions and exercises to address frequent mistakes.",
                      "Game Intelligence: We train players to anticipate opponents' actions, recognize patterns, and improve off-the-ball movements to better influence play.",
                      "Immediate Performance Tools: We provide actionable 'tips' players can apply during games to gain space and time, enabling improved performance.",
                      "Team Integration: We help players align better with their team's collective play, enhancing individual, positional, and group dynamics."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-white/60 mr-3 mt-1">•</span>
                        <span className="font-poppins text-white/80 text-sm" style={{ fontWeight: 300 }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Analysis */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <h3 className="font-poppins font-bold text-white text-2xl mb-6 text-center" style={{ fontWeight: 700 }}>
                    Technical Analysis
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Technical Gesture Correction: We will Improve your technical execution based on your position, field situation, team structure, opponent dynamics, and game phase.",
                      "Execution Improvement: Refine technical gestures and we will suggest methods for practical improvement.",
                      "New Technical Concepts: We will Introduce new technical ideas to help you solve problems encountered during matches.",
                      "Position-Specific Habits: Learn the distinct 'craft' of your position, as each role has unique demands and responsibilities.",
                      "Individual Player Profiles: Detailed reports highlighting each player's strengths, weaknesses, and progress over time.",
                      "Mentality: Develop a strong, focused mindset to enhance performance under pressure."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-white/60 mr-3 mt-1">•</span>
                        <span className="font-poppins text-white/80 text-sm" style={{ fontWeight: 300 }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Performance & Mindset */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <h3 className="font-poppins font-bold text-white text-2xl mb-6 text-center" style={{ fontWeight: 700 }}>
                    Performance & Mindset
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Mentality under pressure",
                      "Nutrition tips",
                      "Conditioning & recovery notes",
                      "Movement quality & biomechanics"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-white/60 mr-3 mt-1">•</span>
                        <span className="font-poppins text-white/80 text-sm" style={{ fontWeight: 300 }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>



            {/* Section 4: Choose Your Package */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h2 className="font-poppins font-bold text-white text-4xl md:text-5xl mb-8" style={{ fontWeight: 700 }}>
                  Two Ways to Level Up
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Single Report */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                  <div className="mb-6">
                    <span className="text-4xl">🗾</span>
                  </div>
                  <h3 className="font-poppins font-bold text-white text-2xl mb-4" style={{ fontWeight: 700 }}>
                    One (1) Video Analysis
                  </h3>
                  <p className="font-poppins text-white/70 text-base mb-6" style={{ fontWeight: 300 }}>
                    One full-game breakdown, custom report + Zoom session
                  </p>
                  <div className="text-3xl font-bold text-white mb-6">$600</div>
                  <Link 
                    href="https://bv1pro.com/complete-order-page-page-3165"
                    className="inline-block w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-4 text-white font-poppins text-lg hover:bg-white/20 transition-all duration-300"
                    style={{ fontWeight: 600 }}
                  >
                    Get One Report
                  </Link>
                </div>

                {/* Four Reports */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center relative">
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl">🗾</span>
                  </div>
                  <h3 className="font-poppins font-bold text-white text-2xl mb-4" style={{ fontWeight: 700 }}>
                    Four (4) Video Analyses
                  </h3>
                  <p className="font-poppins text-white/70 text-base mb-6" style={{ fontWeight: 300 }}>
                    One report every 3 months to track progress over time
                  </p>
                  <div className="text-3xl font-bold text-white mb-6">$2000</div>
                  <Link 
                    href="https://bv1pro.com/complete-order-page-page-3165"
                    className="inline-block w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full py-4 font-poppins text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                    style={{ fontWeight: 600 }}
                  >
                    Get 4-Pack
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 5: How It Works */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h2 className="font-poppins font-bold text-white text-4xl md:text-5xl mb-8" style={{ fontWeight: 700 }}>
                  Simple Process. Big Results.
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                                  {[
                  "Purchase your report (single or 4-pack)",
                  "Send full-game video via WeTransfer to: team@bestversion1.com",
                  "BV1 analysts complete a full review (3–5 hours of analysis)",
                  "You receive a written report + book a Zoom call",
                  "Leave with complete clarity on how to improve"
                ].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <p className="font-poppins text-white/80 text-lg" style={{ fontWeight: 400 }}>
                      {step}
                    </p>
                  </div>
                ))}
                
                {/* Email Information Box */}
                <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl text-center">
                  <p className="font-poppins text-white/90 text-base" style={{ fontWeight: 400 }}>
                    <strong>Email your video to:</strong> 
                    <span className="text-green-400 ml-2">team@bestversion1.com</span>
                  </p>
                  <p className="font-poppins text-white/70 text-sm mt-2" style={{ fontWeight: 300 }}>
                    Use WeTransfer for large video files
                  </p>
                </div>
                </div>
                
                <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center">
                  <p className="font-poppins text-white/90 text-base italic" style={{ fontWeight: 400 }}>
                    <strong>Note:</strong> This is not a basic highlight review. It's a professional breakdown designed to elevate your football IQ and decision-making.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: FAQ */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h2 className="font-poppins font-bold text-white text-4xl md:text-5xl mb-8" style={{ fontWeight: 700 }}>
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {[
                  {
                    question: "Can I buy this without enrolling in a course?",
                    answer: "Yes. This is available as a standalone service or as an optional add-on inside the Full Course."
                  },
                  {
                    question: "What kind of video do I need to send?",
                    answer: "A full 11v11 match recorded from a wide-angle, where you are visible throughout."
                  },
                  {
                    question: "How long does it take to receive the report?",
                    answer: "5–7 business days after receiving your video."
                  },
                  {
                    question: "Who creates the report?",
                    answer: "Our in-house analysts, with final review by our senior team under Jordi Roura's supervision."
                  },
                  {
                    question: "Will the Zoom call be in English or Spanish?",
                    answer: "You can choose your preferred language."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="font-poppins font-bold text-white text-lg mb-3" style={{ fontWeight: 600 }}>
                      Q: {faq.question}
                    </h3>
                    <p className="font-poppins text-white/70 text-base" style={{ fontWeight: 300 }}>
                      A: {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA Banner */}
            <div className="text-center p-12 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
              <h2 className="font-poppins font-bold text-white text-4xl md:text-5xl mb-6" style={{ fontWeight: 700 }}>
                Take Your Game Seriously? Prove It.
              </h2>
              <p className="font-poppins text-white/80 text-xl mb-8 max-w-3xl mx-auto" style={{ fontWeight: 300 }}>
                Get the tactical clarity that most players never receive. It's time to train smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://bv1pro.com/complete-order-page-page-3165"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-poppins text-lg hover:bg-white/20 transition-all duration-300"
                  style={{ fontWeight: 600 }}
                >
                  🗾 Get One Report – $600
                </Link>
                <Link 
                  href="https://bv1pro.com/complete-order-page-page-3165"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-poppins text-lg hover:bg-white/20 transition-all duration-300"
                  style={{ fontWeight: 600 }}
                >
                  🗾 Get Four Reports – $2000
                </Link>
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

export default VideoAnalysisPage; 