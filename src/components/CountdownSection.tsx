import { useState, useEffect } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(19, 0, 0, 0); // 7 PM

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-navy-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h2 className="text-4xl font-bold text-black mb-4">
            Upcoming Webinar
          </h2>
          <p className="text-xl text-black/80 mb-12">
            "Master the Art of Remote Work - From Application to Success"
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div
                key={unit}
                className={`card-gradient p-6 rounded-2xl animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-primary mb-2 animate-pulse-glow">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-navy-medium capitalize font-medium">
                  {unit}
                </div>
              </div>
            ))}
          </div>

          {/* Event Details */}
          <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 mb-8 animate-slide-in-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
              <div className="flex items-center justify-center md:justify-start">
                <Calendar className="w-6 h-6 mr-3 text-primary" />
                <span>Next Sunday</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Clock className="w-6 h-6 mr-3 text-primary" />
                <span>7:00 PM EST</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Users className="w-6 h-6 mr-3 text-primary" />
                <span>Limited to 100 seats</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="btn-primary animate-pulse-glow">
            Reserve Your Free Spot
          </button>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;