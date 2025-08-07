import { useState } from 'react';
import { Mail, Instagram, Send, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const TikTokIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-6 h-6 fill-white"
    >
      <path d="M168.5 0H129v172.8c0 14.6-11.9 26.5-26.5 26.5S76 187.4 76 172.8s11.9-26.5 26.5-26.5c1.5 0 3 .1 4.5.4V109c-1.5-.2-3-.2-4.5-.2-35.1 0-63.6 28.5-63.6 63.6s28.5 63.6 63.6 63.6 63.6-28.5 63.6-63.6V95.5c11.4 8.5 25.5 13.5 40.7 13.5V68.8c-8.6 0-17-2.7-23.8-7.7-6.9-5.1-11.9-12.2-14.3-20.3-1.4-4.8-2.1-9.8-2.1-14.8V0z" />
    </svg>
  );

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/empowerherremotely',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'TikTok',
      icon: TikTokIcon,
      url: 'https://www.tiktok.com/@uduakdorathynwosu?_t=ZM-8yNLWvf7kIv&_r=1',
      color: 'from-black to-gray-800'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hello@empowerherremotely.com',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <div>
      <Navigation />
      <section className="bg-hero py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-6 animate-fade-up">
            Get in Touch
          </h1>
          <p className="text-xl text-navy-medium mb-8 animate-slide-in-left">
            Have questions about our programs? Ready to start your remote work journey? We're here to help!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-navy-dark mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'subject'].map((field) => (
                  <div className="floating-label" key={field}>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleInputChange}
                      placeholder=" "
                      className="w-full px-4 py-4 bg-card border-2 border-muted focus:border-primary rounded-xl transition-all duration-300"
                      required
                    />
                    <label htmlFor={field}>{field === 'email' ? 'Email Address' : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}</label>
                  </div>
                ))}

                <div className="floating-label">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder=" "
                    rows={6}
                    className="w-full px-4 py-4 bg-card border-2 border-muted focus:border-primary rounded-xl transition-all duration-300 resize-none"
                    required
                  />
                  <label htmlFor="message">Your Message</label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full group ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <Send className="w-5 h-9 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  )}
                </button>
              </form>
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-navy-dark mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-dark mb-2">Email Us</h3>
                    <a href="mailto:hello@empowerherremotely.com" className="text-primary hover:underline">
                      hello@empowerherremotely.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-dark mb-2">Response Time</h3>
                    <p className="text-muted-foreground">
                      We typically respond within 24 hours during business days
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-dark mb-2">Global Community</h3>
                    <p className="text-muted-foreground">
                      Supporting women worldwide in their remote work journey
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-navy-dark mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-full bg-gradient-to-r ${social.color} text-white hover:scale-110 transition-all duration-300 animate-fade-up`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section and CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-dark mb-8 animate-fade-up">Quick Answers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'How quickly can I start earning?',
                content:
                  'Most of our students land their first remote job within 30-60 days of completing our training.'
              },
              {
                title: 'Do you offer payment plans?',
                content:
                  'Yes! We offer flexible payment plans to make our programs accessible to everyone.'
              },
              {
                title: 'Is there ongoing support?',
                content:
                  'Absolutely! Our Slack community provides 24/7 support and networking opportunities.'
              },
              {
                title: "What if I'm a complete beginner?",
                content:
                  'Perfect! Our programs are designed for beginners and we guide you every step of the way.'
              }
            ].map((faq, i) => (
              <div key={i} className={`card-gradient p-6 rounded-2xl card-hover animate-fade-up animation-delay-${i * 200}`}>
                <h3 className="font-semibold text-navy-dark mb-3">{faq.title}</h3>
                <p className="text-muted-foreground">{faq.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Contact;



