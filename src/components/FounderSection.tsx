import founderImg from "@/assets/Img Uduak 3.jpg";

const FounderSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold text-navy-dark mb-4">
            Meet Our Founder
          </h2>
          <p className="text-xl text-navy-medium">
            Empowering women to achieve remote work success
          </p>
        </div>

        <div className="flex items-center gap-12 animate-fade-up overflow-hidden">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="relative w-[28rem] h-[28rem] rounded-full overflow-hidden shadow-elegant animate-pulse-glow">
              <img
                src={founderImg}
                alt="Founder"
                className="w-full h-full object-cover"
              />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-secondary rounded-full opacity-15 animate-pulse"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-grow text-left">
            <h3 className="text-3xl font-bold text-navy-dark mb-4">
              Uduak-Dorathy Nwosu
            </h3>
            <p className="text-xl text-primary mb-6 font-semibold">
              Founder & CEO
            </p>
            <div className="space-y-4 text-navy-medium text-lg">
              <p>
                Uduak started Empower Her Remotely after her own transformative journey from traditional office work to building a successful remote career that gave her the freedom to travel the world while earning six figures.
              </p>
              <p>
                With over 8 years of experience in remote work and having helped thousands of women transition to remote careers, Sarah is passionate about breaking down barriers and creating opportunities for women in the digital workspace.
              </p>
              <p>
                Her mission is simple: prove that geography doesn't determine your potential, and every woman deserves the opportunity to build the career of her dreams from anywhere in the world.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
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





