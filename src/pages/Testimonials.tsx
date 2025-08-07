import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

// Import all 15 images
import image1 from '@/assets/images/Testimonial-1.jpg';
import image2 from '@/assets/images/Testimonial-2.jpg';
import image3 from '@/assets/images/Testimonial3.jpg';
import image4 from '@/assets/images/testimonial-4.jpg';
import image5 from '@/assets/images/testimonial-5.jpg';
import image6 from '@/assets/images/testimonial-6.jpg';
import image7 from '@/assets/images/testimonial-7.jpg';
import image8 from '@/assets/images/testimonial-8.jpg';
import image9 from '@/assets/images/testimonial-9.jpg';
import image10 from '@/assets/images/testimonial-10.jpg';
import image11 from '@/assets/images/testimonial-11.jpg';
import image12 from '@/assets/images/testimonial-12.jpg';
import image13 from '@/assets/images/Testimonial-14.jpg';
import image14 from '@/assets/images/Testimonial-15.jpg';
import image15 from '@/assets/images/Testimonial-16.jpg';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderImages = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11, image12,
    image13, image14, image15,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-navy-dark mb-6 animate-fade-up">
            Real Success Stories
          </h1>
          <p className="text-xl text-navy-medium max-w-3xl mx-auto animate-fade-up">
            Watch how our community members transformed their careers and achieved financial freedom through remote work
          </p>
        </div>
      </section>

      {/* Image Slider Section */}
      <section className="bg-background py-12">
        <div className="max-w-xl mx-auto relative text-center">
          <div className="relative overflow-hidden rounded-2xl shadow-xl bg-black">
            <img
              src={sliderImages[activeSlide]}
              alt={`Slide ${activeSlide + 1}`}
              className="w-[600px] h-[650px] object-cover rounded-2xl"
            />
            <div className="p-6 text-left text-white bg-gradient-to-t from-black to-black/60 absolute bottom-0 w-full">
              <div className="mt-4 text-center text-xs uppercase tracking-widest text-white font-medium">
                STUDENTS TESTIMONIAL
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={() =>
                    setActiveSlide((prev) => (prev + 1) % sliderImages.length)
                  }
                  className="text-white p-2 hover:scale-110 transition"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="mt-6 flex justify-center space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeSlide ? 'bg-gray-900' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-navy-dark mb-6 animate-fade-up">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-navy-medium mb-8 animate-fade-up">
            Join thousands of women who have transformed their careers with our community and training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Join WhatsApp Community
            </button>
            <button className="bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-full font-semibold border-2 border-primary transition-all duration-300 transform hover:scale-105">
              View Our Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;


