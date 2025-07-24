import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Play, Star } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoTestimonials = [
    {
      id: '1',
      name: 'Maria Rodriguez',
      role: 'Virtual Assistant',
      thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'EHR completely changed my life. I went from struggling to find work to earning $3,000/month as a VA!',
      rating: 5,
      duration: '2:30'
    },
    {
      id: '2',
      name: 'Jessica Chen',
      role: 'Digital Marketer',
      thumbnail: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=300&fit=crop&crop=face',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'The mentorship program helped me land my dream remote job with a 40% salary increase.',
      rating: 5,
      duration: '3:15'
    },
    {
      id: '3',
      name: 'Amanda Thompson',
      role: 'Content Writer',
      thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'From zero experience to earning $50/hour writing. The community support is incredible!',
      rating: 5,
      duration: '4:02'
    },
    {
      id: '4',
      name: 'Lisa Garcia',
      role: 'Social Media Manager',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'I now work with 5 international clients and have the freedom to work from anywhere!',
      rating: 5,
      duration: '3:45'
    },
    {
      id: '5',
      name: 'Rachel Kim',
      role: 'Online Business Manager',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'The skills training gave me the confidence to start my own VA agency. Now I employ 12 people!',
      rating: 5,
      duration: '5:20'
    },
    {
      id: '6',
      name: 'Sophie Williams',
      role: 'Executive Assistant',
      thumbnail: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=300&fit=crop&crop=face',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'Working remotely allowed me to be present for my family while building a successful career.',
      rating: 5,
      duration: '2:55'
    }
  ];

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

      {/* Video Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-hover transition-all duration-300 hover:shadow-elegant animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  {activeVideo === testimonial.id ? (
                    <iframe
                      src={testimonial.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={testimonial.thumbnail}
                        alt={testimonial.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <button
                          onClick={() => setActiveVideo(testimonial.id)}
                          className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-all duration-300 transform hover:scale-110"
                        >
                          <Play className="w-6 h-6 ml-1" />
                        </button>
                      </div>
                      <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                        {testimonial.duration}
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-navy-dark mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {testimonial.role}
                  </p>
                  
                  <blockquote className="text-navy-medium italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
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