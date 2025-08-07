import logo from "@/assets/Empower_image_real__1_-removebg-preview.png";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src={logo}
              alt="EHR Logo"
              style={{ height: "100px", width: "90px" }}
              className="hidden lg:block h-8"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600 bg-clip-text text-transparent">
              Empower Her Remotely
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{ fontWeight: 900 }}
                className={`text-purple-400 transition-colors duration-300 hover:text-black ${
                  location.pathname === item.path ? 'border-b-2 border-primary' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Updated Button */}
            <a
              href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-400 text-white font-extrabold px-5 py-2 rounded-full hover:bg-black hover:text-white transition duration-300"
            >
              Join Community
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-600 hover:text-black transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-soft">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  style={{ fontWeight: 900 }}
                  className={`block px-3 py-2 rounded-md text-base text-purple-600 transition-colors duration-300 hover:text-black ${
                    location.pathname === item.path
                      ? 'bg-primary/10'
                      : 'hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Button */}
              <div className="px-3 py-2">
                <a
                  href="https://chat.whatsapp.com/BsBDt1B5CGbLMSsDkmui72"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block bg-purple-600 text-white font-extrabold px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300 text-center"
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

