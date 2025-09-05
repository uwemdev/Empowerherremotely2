import logo from "@/assets/Empower_image_real__1_-removebg-preview.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full text-xl z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
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
            <span className="text-2xl font-bold text-[#B08CD4]">
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
                className={`text-[#B08CD4] transition-colors duration-300 hover:text-black ${
                  location.pathname === item.path
                    ? "border-b-2 border-[#B08CD4]"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Updated Button */}
            <a
              href="https://chat.whatsapp.com/DMF18nZMj027hlzVjTAEv2?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B08CD4] text-white font-extrabold text-xl px-5 py-2 rounded-full hover:bg-black hover:text-white transition duration-300"
            >
              Join Community
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#B08CD4] hover:text-black transition-colors duration-300"
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
                  className={`block px-3 py-2 rounded-md text-base text-[#B08CD4] transition-colors duration-300 hover:text-black ${
                    location.pathname === item.path
                      ? "bg-primary/10"
                      : "hover:bg-primary/5"
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
                  className="w-full block bg-[#B08CD4] text-white font-extrabold px-4 py-2 rounded-full hover:bg-black hover:text-white transition duration-300 text-center"
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


