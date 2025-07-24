import { useState, useEffect } from 'react';
import { ArrowRight, Users, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Helping Men & Women Work Remotely—One Job at a Time.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-hero min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-dark mb-6">
            <span className="block">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-navy-medium mb-8 max-w-3xl mx-auto animate-slide-in-left">
            Join a vibrant community of women learning the skills, landing the roles, 
            and rewriting the rules of work—from home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-right">
            <a 
              href="#" 
              className="btn-primary group"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Our WhatsApp Community
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a 
              href="#" 
              className="btn-secondary group"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Join Our Telegram Community
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Floating animated elements */}
          <div className="relative animate-pulse-glow">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full animate-float opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/30 rounded-full animate-float animation-delay-2000 opacity-50"></div>
            <div className="absolute top-10 right-20 w-24 h-24 bg-accent/25 rounded-full animate-float animation-delay-4000 opacity-50"></div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-up animation-delay-1000">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Women Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Jobs Posted Daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;