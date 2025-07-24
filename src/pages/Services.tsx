import { Monitor, BookOpen, Users, DollarSign, Video, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import FloatingCTA from '@/components/FloatingCTA';

const Services = () => {
  const mainServices = [
    {
      icon: Monitor,
      title: "Virtual Assistant Training Program",
      description: "Comprehensive 4-week program covering all aspects of VA work",
      features: ["Client Communication", "Task Management", "Tools & Software", "Pricing Strategies"],
      price: "$297",
      popular: true
    },
    {
      icon: BookOpen,
      title: "Upwork Getting Paid Guide",
      description: "Master the art of landing high-paying clients on Upwork",
      features: ["Profile Optimization", "Proposal Writing", "Client Acquisition", "Rate Negotiation"],
      price: "$97",
      popular: false
    },
    {
      icon: Users,
      title: "2-Day Mentorship Session",
      description: "Personal guidance from successful remote work veterans",
      features: ["Career Planning", "Skill Assessment", "Goal Setting", "Action Plan"],
      price: "$497",
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: DollarSign,
      title: "VA Companies Recruiting Info",
      description: "Access to companies offering $500k-$1M annual positions",
      link: "#"
    },
    {
      icon: Video,
      title: "Daily Job Listings",
      description: "Fresh remote opportunities delivered daily",
      link: "#"
    },
    {
      icon: Zap,
      title: "Slack Community Access",
      description: "24/7 support and networking with successful remote workers",
      link: "#"
    }
  ];

  return (
    <div>
      <Navigation />
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-6 animate-fade-up">
            Empower Her Training Hub
          </h1>
          <p className="text-xl text-navy-medium mb-8 max-w-3xl mx-auto animate-slide-in-left">
            Transform your career with our proven training programs and support systems
          </p>
          <div className="animate-float">
            <Monitor className="w-24 h-24 mx-auto text-primary" />
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-navy-dark mb-16 animate-fade-up">
            Our Training Programs
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`relative card-gradient rounded-3xl p-8 card-hover animate-fade-up ${
                    service.popular ? 'ring-2 ring-primary' : ''
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="bg-gradient-primary p-4 rounded-full w-fit mb-6 animate-pulse-glow">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy-dark mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-navy-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-4">
                      {service.price}
                    </div>
                    <button className="btn-primary w-full">
                      Enroll Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-navy-dark mb-16 animate-fade-up">
            Additional Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="card-gradient rounded-2xl p-8 text-center card-hover animate-fade-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-6 animate-pulse-glow">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy-dark mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <a href={service.link} className="btn-secondary">
                    Learn More
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Remote Work Package CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl font-bold text-navy-dark mb-6">
              Complete Remote Work Package
            </h2>
            <p className="text-xl text-navy-medium mb-8">
              Get everything you need to succeed in remote work - all programs included!
            </p>
            <div className="bg-card rounded-3xl p-8 mb-8 animate-pulse-glow">
              <div className="text-5xl font-bold text-primary mb-4">$797</div>
              <div className="text-muted-foreground line-through text-xl mb-2">Regular: $891</div>
              <div className="text-green-600 font-semibold">Save $94!</div>
            </div>
            <button className="btn-primary text-xl px-12 py-4">
              Get Complete Package
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
      <FloatingCTA />
    </div>
  );
};

export default Services;