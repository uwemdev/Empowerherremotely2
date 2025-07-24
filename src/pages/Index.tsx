import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FounderSection from '@/components/FounderSection';
import CountdownSection from '@/components/CountdownSection';
import NewsletterSection from '@/components/NewsletterSection';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <FounderSection />
      <CountdownSection />
      <NewsletterSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Index;
