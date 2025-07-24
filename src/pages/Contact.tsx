import { useState } from 'react';
import { Mail, Instagram, Youtube, Send, MapPin, Clock } from 'lucide-react';
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
    
    // Simulate form submission
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

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: '#',
      color: 'from-red-500 to-red-600'
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
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-6 animate-fade-up">
            Get in Touch
          </h1>
          <p className="text-xl text-navy-medium mb-8 animate-slide-in-left">
            Have questions about our programs? Ready to start your remote work journey? 
            We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold text-navy-dark mb-8">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="floating-label">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full px-4 py-4 bg-card border-2 border-muted focus:border-primary rounded-xl transition-all duration-300"
                    required
                  />
                  <label htmlFor="name">Your Name</label>
                </div>

                <div className="floating-label">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full px-4 py-4 bg-card border-2 border-muted focus:border-primary rounded-xl transition-all duration-300"
                    required
                  />
                  <label htmlFor="email">Email Address</label>
                </div>

                <div className="floating-label">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="w-full px-4 py-4 bg-card border-2 border-muted focus:border-primary rounded-xl transition-all duration-300"
                    required
                  />
                  <label htmlFor="subject">Subject</label>
                </div>

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
                  className={`btn-primary w-full group ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-navy-dark mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-dark mb-2">Email Us</h3>
                    <a 
                      href="mailto:hello@empowerherremotely.com"
                      className="text-primary hover:underline"
                    >
                      hello@empowerherremotely.com
                    </a>
                  </div>
                </div>

                {/* Response Time */}
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

                {/* Location */}
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
                <h3 className="text-xl font-bold text-navy-dark mb-6">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        className={`p-4 rounded-full bg-gradient-to-r ${social.color} text-white hover:scale-110 transition-all duration-300 animate-fade-up`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-dark mb-8 animate-fade-up">
            Quick Answers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-gradient p-6 rounded-2xl card-hover animate-fade-up">
              <h3 className="font-semibold text-navy-dark mb-3">
                How quickly can I start earning?
              </h3>
              <p className="text-muted-foreground">
                Most of our students land their first remote job within 30-60 days of completing our training.
              </p>
            </div>
            
            <div className="card-gradient p-6 rounded-2xl card-hover animate-fade-up animation-delay-200">
              <h3 className="font-semibold text-navy-dark mb-3">
                Do you offer payment plans?
              </h3>
              <p className="text-muted-foreground">
                Yes! We offer flexible payment plans to make our programs accessible to everyone.
              </p>
            </div>
            
            <div className="card-gradient p-6 rounded-2xl card-hover animate-fade-up animation-delay-400">
              <h3 className="font-semibold text-navy-dark mb-3">
                Is there ongoing support?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! Our Slack community provides 24/7 support and networking opportunities.
              </p>
            </div>
            
            <div className="card-gradient p-6 rounded-2xl card-hover animate-fade-up animation-delay-600">
              <h3 className="font-semibold text-navy-dark mb-3">
                What if I'm a complete beginner?
              </h3>
              <p className="text-muted-foreground">
                Perfect! Our programs are designed for beginners and we'll guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FloatingCTA />
    </div>
  );
};

export default Contact;