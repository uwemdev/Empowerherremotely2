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
      description:
        "Our signature 4-5 week Virtual Assistant Training is beginner-friendly and fully online. You'll gain hands-on experience in:",
      features: [
        "Virtual Assistant Training (4 weeks with certificate at the end)",
        "A 2 Day Mentorship Class (How to apply for jobs, Create a cover letter, A CV that would land you a high paying role, etc.)",
        "Slack Community Membership and other Job Groups.",
        "International VA Companies Actively Recruiting ( Pay is 500k-1M)",
        "Tutorials on how to get jobs on Upwork (Includes more than 10 free materials including proposals and videos)",
        <span><strong>Bonus:</strong> Social Media Management Training (5th Week)</span>,
        "EHR Remote Work Bundle(Cv, Cover letter, Portfolio Template and a list of 30 Websites to get International Remote Jobs)"
      ],
      price: "N10,000",
      popular: true,
      link: "https://selar.co/io5o52"
    },
    {
      icon: BookOpen,
      title: "Job Vacancy Group",
      description:
        "Join our upcoming webinar where you'll learn the right way to apply for jobs, get access to a proven CV template that gets you noticed, and explore real international job opportunities in roles like VA, Digital Marketing, Project Management, Data Analysis, and more.",
      features: [
        "A webinar to show you the right way to apply for jobs",
        "A good CV template that will land you the role",
        "Legit international jobs in roles like VA, SMM, Project Management, Customer care, Data Analysis, Graphic designs, etc."
      ],
      price: "N3,500",
      popular: false,
      link: "http://selar.co/153j14"
    },
    {
      icon: Users,
      title: "Remote Work Package",
      description:
        "Get fully equipped for remote success with a tailored CV that showcases your remote work strengths, a standout LinkedIn profile, and compelling cover letters that leave a lasting impression.",
      features: [
        "Remote Work Resume/CV: Tailored content showcasing your remote work skills, accomplishments, and potential",
        "LinkedIn Optimization: Captivating profile highlighting your remote work experience.",
        "Custom Cover Letter: Personalized cover letters for strong impressions.",
        "Remote Interview Coaching: Personalized coaching to excel in virtual interviews.",
        "Clarity Call: Access to clarity calls from a seasoned remote work expert."
      ],
      price: "N25,000",
      popular: false,
      link: "https://selar.co/5jm886"
    }
  ];

  const additionalServices = [
    {
      icon: DollarSign,
      title: "VA Companies Recruiting Info",
      description: "Access to companies offering $500k–$1M annual positions",
      link: "/contact"
    },
    {
      icon: Video,
      title: "Daily Job Listings",
      description: "Fresh remote opportunities delivered daily",
      link: "/contact"
    },
    {
      icon: Zap,
      title: "Slack Community Access",
      description: "24/7 support and networking with successful remote workers",
      link: "/contact"
    }
  ];

  return (
    <div>
      <Navigation />

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

                  <div className="bg-purple-600/90 p-5 rounded-full w-fit mb-6 shadow-lg animate-pulse-glow">
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
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full block text-center"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <br />
        <h3 className="text-center font-bold text-lg">
          65% of our graduates land remote gigs or freelance clients within weeks of completing the program!
        </h3>
      </section>

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
                  <div className="bg-purple-600/90 p-5 rounded-full w-fit mx-auto mb-6 shadow-lg animate-pulse-glow">
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

      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl font-bold text-navy-dark mb-6">
              Virtual Assistant Training Program
            </h2>
            <p className="text-xl text-navy-medium mb-8">
              Get everything you need to succeed in remote work - all programs included!
            </p>
            <div className="bg-card rounded-3xl p-8 mb-8 animate-pulse-glow">
              <div className="text-5xl font-bold text-primary mb-4">N25,000</div>
              <div className="text-muted-foreground line-through text-xl mb-2">Regular: N39,000</div>
              <div className="text-green-600 font-semibold">Save N14,000!</div>
            </div>
           <a
  href="https://selar.co/io5o52"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary text-xl px-12 py-4 inline-block"
>
  Get Complete Package
</a>

          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Services;