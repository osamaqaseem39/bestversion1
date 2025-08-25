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
    <main className="min-h-screen bg-black">
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
    </main>
  )
} 