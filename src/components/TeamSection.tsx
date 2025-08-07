import { Card, CardContent } from '@/components/ui/card';
import TeamImg1 from '@/assets/Woman 2i.jpg';
import TeamImg2 from '@/assets/Woman 1.jpg';

const TeamSection = () => {
  const teamMembers = [
  {
    name: "Ogechi Blessing",
    role: "Community Brand Manager",
    bio: "Expert in virtual assistant training with 6+ years of remote work experience.",
    image: TeamImg1
  },
  {
    name: "Jinadu Adebanke Esther",
    role: "Community Success Manager",
    bio: "Specializes in helping professionals transition to remote careers successfully.",
    image: TeamImg2
  }
];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-navy-dark mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-navy-medium max-w-3xl mx-auto">
            Our dedicated team of remote work experts is here to guide you on your journey to professional freedom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="group transition-all duration-300 hover:-translate-y-2 animate-fade-up border-0 bg-white/80 backdrop-blur-sm shadow-[0_10px_50px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <img
           src={member.image}
            alt={member.name}
           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
             />
            </div>

                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
                </div>
                
                <h3 className="text-xl font-bold text-navy-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-navy-medium text-sm leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;