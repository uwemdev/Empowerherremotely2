import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CountdownSection from '@/components/CountdownSection';
import NewsletterSection from '@/components/NewsletterSection';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CountdownSection />
      <NewsletterSection />
      <FloatingCTA />
    </div>
  );
};

export default Index;
