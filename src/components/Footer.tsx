import { Mail, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-400 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-3xl font-bold text-white">Empower Her Remotely</h3>
            <p>
              Helping women and men work remotely—one job at a time. Join our vibrant community and rewrite the rules of work from home.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {/* Email */}
              <a
                href="mailto:hello@empowerherremotely.com"
                className="hover:text-purple-200 transform hover:scale-110 transition duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/empowerherremotely"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transform hover:scale-110 transition duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>

              {/* TikTok SVG */}
              <a
                href="https://www.instagram.com/empowerherremotely"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transform hover:scale-110 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M16 8.04c1.088.675 2.399 1.063 3.8 1.063V5.53c-1.326-.04-2.603-.486-3.8-1.25V15c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5c.23 0 .456.02.676.05v3.708A2.002 2.002 0 0 0 12 13a2 2 0 1 0 0 4 2 2 0 0 0 2-2V1h2v7.04Z" />
                </svg>
              </a>

              {/* Telegram SVG */}
              <a
                href="https://t.me/empowerherremotely2024"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transform hover:scale-110 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21.055 3.695c-.261-.217-.608-.287-.928-.188L2.98 9.16a.937.937 0 0 0-.074 1.76l4.432 1.856 1.656 5.35a.937.937 0 0 0 1.58.382l2.577-2.566 3.467 2.664a.938.938 0 0 0 1.494-.598l2.437-13.062a.937.937 0 0 0-.494-1.35ZM9.264 14.202l-.864 2.792-1.24-4.01 7.81-5.38-5.706 6.598Zm3.284 1.118-1.278 1.272.36-1.165 10.172-8.92-9.254 8.813Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white">
              <li><a href="/" className="hover:text-white transition duration-300">Home</a></li>
              <li><a href="/services" className="hover:text-white transition duration-300">Services</a></li>
              <li><a href="/testimonials" className="hover:text-white transition duration-300">Testimonials</a></li>
              <li><a href="/contact" className="hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>


          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-white transition duration-300">VA Training</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Job Listings</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Mentorship</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Webinars</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-white text-sm">&copy; 2025 Empower Her Remotely. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

