import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Banner from '@/components/Banner'
import Features from '@/components/Features'
import Coach from '@/components/Coach'
import TrainingSection from '@/components/TrainingSection'
import ProgramsSection from '@/components/ProgramsSection'
import WhyBV1Section from '@/components/WhyBV1Section'
import WhyNotProgressingSection from '@/components/WhyNotProgressingSection'
import WhoThisIsForSection from '@/components/WhoThisIsForSection'
import TacticalFoundationSection from '@/components/TacticalFoundationSection'
import MeetTheTeamSection from '@/components/MeetTheTeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PlayerOutcomesSection from '@/components/PlayerOutcomesSection'
import PressSection from '@/components/PressSection'
import FAQSection from '@/components/FAQSection'
import CallToActionSection from '@/components/CallToActionSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      {/* Multiple small glow circles */}
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
            background: 'radial-gradient(circle, #4652FF4D 0%, transparent 20%)',
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
        <Header />
        <Hero />
        <Banner />
        <Features />
        <Coach />
        <TrainingSection />
        <ProgramsSection />
        <WhyBV1Section />
        <WhyNotProgressingSection />
        <WhoThisIsForSection />
        <TacticalFoundationSection />
        <MeetTheTeamSection />
        <TestimonialsSection />
        <PlayerOutcomesSection />
        <PressSection />
        <FAQSection />
        <CallToActionSection />
        <Footer />
      </div>
    </main>
  )
} 