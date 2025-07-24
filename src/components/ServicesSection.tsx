import { GraduationCap, Briefcase, Brain, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Free Webinars",
      description: "Learn from industry experts about remote work trends, tools, and techniques.",
      color: "from-primary to-primary-dark"
    },
    {
      icon: Briefcase,
      title: "Daily Job Opportunities",
      description: "Fresh remote job listings delivered daily to your inbox - curated for women.",
      color: "from-secondary to-accent"
    },
    {
      icon: Brain,
      title: "Skills Training",
      description: "Comprehensive training programs to boost your remote work capabilities.",
      color: "from-accent to-secondary"
    },
    {
      icon: Users,
      title: "Mentorship & Support",
      description: "24/7 community support and one-on-one mentorship from successful remote workers.",
      color: "from-primary-dark to-secondary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-navy-dark mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in the remote work world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`card-gradient p-8 rounded-2xl card-hover animate-fade-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-full w-fit mb-6 animate-pulse-glow`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-dark mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;