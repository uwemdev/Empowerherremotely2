import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive daily remote job opportunities in your inbox.",
      });
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-8 animate-pulse-glow">
            <Mail className="h-12 w-12 text-white" />
          </div>

          <h2 className="text-4xl font-bold text-navy-dark mb-4">
            Don't Miss a Remote Opportunity
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get daily curated remote job listings, exclusive webinar invites, and career tips 
            delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-slide-in-left">
            <div className="floating-label mb-6">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                className="w-full px-4 py-4 bg-card border-2 border-muted focus:border-primary rounded-xl transition-all duration-300 text-lg"
                required
              />
              <label htmlFor="email">
                Enter your email address
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubscribed}
              className={`btn-primary w-full group inline-flex items-center justify-center gap-2 ${
                isSubscribed ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubscribed ? (
                <span>✓ Subscribed!</span>
              ) : (
                <>
                  <span>Join the Community</span>
                  <Send className="w-5 h-10 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </form>

          <p className="text-sm text-muted-foreground mt-6">
            Join 2,000+ women already receiving daily opportunities. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

