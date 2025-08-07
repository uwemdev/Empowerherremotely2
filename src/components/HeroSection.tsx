import { useState, useEffect } from 'react';
import { ArrowRight, Users, MessageSquare } from 'lucide-react';
import TeamImg1 from '@/assets/Freepik-4.jpg';
import TeamImg2 from '@/assets/Happ pic.jpg';
import TeamImg3 from '@/assets/Sm-3.jpg';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Helping Men & Women Work Remotely—One Job at a Time.';

  const backgroundImages = [TeamImg1, TeamImg2, TeamImg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) index = 0;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Smooth background slider */}
      {backgroundImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Background ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            <span className="block">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto animate-slide-in-left">
            Join a vibrant community of men and women learning the skills, landing the roles,
            and rewriting the rules of work—from home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-right">
            {/* WhatsApp Button */}
            <a
              href="https://chat.whatsapp.com/BsBDt1B5CGbLMSsDkmui72"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group rounded-lg"
            >
              <Users className="w-5 h-5 mr-2" />
              Join Our WhatsApp Community
              <ArrowRight className="w-3 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Telegram Button */}
            <a
              href="https://t.me/empowerherremotely2024"
              target="_blank"
              rel="noopener noreferrer"
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
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/80">Women Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/80">Jobs Posted Daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/80">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


