import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FounderSection from '@/components/FounderSection';
import TeamSection from '@/components/TeamSection';
import CountdownSection from '@/components/CountdownSection';
import NewsletterSection from '@/components/NewsletterSection';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';
import MissionVisionValues from '@/components/MissionVisionValues';



const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <FounderSection />
      <TeamSection />
      <MissionVisionValues />
      <CountdownSection />
      <NewsletterSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Index;
