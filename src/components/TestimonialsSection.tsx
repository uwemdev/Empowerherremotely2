import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Virtual Assistant",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: "EHR changed my life! I went from unemployed to earning $50k/year as a VA within 6 months.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Digital Marketer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "The community support is incredible. I found my dream remote job through their daily listings!",
      rating: 5
    },
    {
      name: "Emily Chen",
      role: "Content Writer",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      quote: "The mentorship program helped me negotiate a 40% salary increase. Forever grateful!",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <section className="relative py-20 bg-gradient-primary">
        {/* Decorative Background Shadow Layer */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/20 to-background/10 blur-3xl rounded-3xl shadow-2xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-navy-dark mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-navy-medium">
              Real women, real transformations
            </p>
          </div>

          <div className="relative">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl shadow-navy-dark/20 animate-fade-up transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full mb-6 md:mb-0 md:mr-8 object-cover animate-pulse-glow"
                />

                <div className="flex-1">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-navy-dark mb-4 italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  <div>
                    <div className="font-semibold text-navy-dark">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-primary scale-125' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
