import founderImg from "@/assets/Img Uduak 3.jpg";

const FounderSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-navy-dark mb-4">
            Meet Our Founder
          </h2>
          <p className="text-xl text-navy-medium">
            Empowering women to achieve remote work success
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 animate-fade-up">
          
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden shadow-elegant animate-pulse-glow">
              <img
                src={founderImg}
                alt="Founder"
                className="w-full h-full object-cover"
              />
              <div className="absolute -top-8 -right-8 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-28 h-28 sm:w-40 sm:h-40 bg-gradient-secondary rounded-full opacity-15 animate-pulse"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-3xl font-bold text-navy-dark mb-4">
              Uduak-Dorathy Nwosu
            </h3>
            <p className="text-xl text-[#4F227B] mb-6 font-semibold">

              Founder & CEO
            </p>
            <div className="space-y-4 text-navy-medium text-lg">
              <p>
                Hi, I’m Uduakobong Nwosu, You can call me Coach Dora, Your Remote Work Bestie.
               </p>
               <p>
                I founded Empower Her Remotely (EHR) with a simple but powerful mission: to help women discover the opportunities that remote work offers and guide them in building sustainable income streams from anywhere in the world.

               </p>
              <p>
                My journey into remote work began out of necessity — as a stay-at-home mom seeking balance between caring for my family and pursuing a fulfilling career. Along the way, I realized that many women, just like me, were unaware of the endless possibilities that remote work provides. That realization inspired me to create EHR a safe space and resource hub where women and men can access the knowledge, tools, and support they need to thrive in the digital economy.

              </p>
              <p>
                Through EHR, I’ve built a growing community of women across Nigeria and beyond, equipping them with training, guidance, and mentorship to transition smoothly into remote work and even explore global opportunities.

              </p>

              <p>
                When I’m not working on EHR, you’ll find me creating content, speaking at events, or sharing tips on remote work, always driven by my passion for helping women rewrite their financial and professional stories.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-gradient-primary text-white px-6 py-3 rounded-full">
                <span className="font-semibold">8+ Years Remote Work</span>
              </div>
              <div className="bg-gradient-secondary text-white px-6 py-3 rounded-full">
                <span className="font-semibold">5000+ Women Helped</span>
              </div>
              <div className="bg-gradient-accent text-white px-6 py-3 rounded-full">
                <span className="font-semibold">100+ Success Stories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;






