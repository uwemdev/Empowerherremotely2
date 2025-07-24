import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <div className="bg-card rounded-2xl p-6 shadow-hover animate-fade-up max-w-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-navy-dark">Need Help Getting Started?</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-navy-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-muted-foreground mb-4 text-sm">
            Join our WhatsApp community for instant support and daily job alerts!
          </p>
          <button className="btn-primary w-full">
            Join WhatsApp Group
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="btn-floating group"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
        </button>
      )}
    </div>
  );
};

export default FloatingCTA;