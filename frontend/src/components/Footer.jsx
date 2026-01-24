import React from 'react';
import { Heart, Instagram, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '/menu' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-[#2B243F] text-white">
      <div className="container-custom px-4 md:px-6 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Logo className="h-20 w-auto" />
            </div>
            <p className="text-white/70 leading-relaxed max-w-md text-sm">
              Premium handcrafted cakes and desserts made with passion. Serving the sweetest moments in Gurugram since day one.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/gooeymooey.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-[#FF859F] to-[#FFB8CB] p-2.5 rounded-full hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/919266987600"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] p-2.5 rounded-full hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-[#E1CAFF] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <span className="block font-semibold text-white mb-1">WhatsApp</span>
                <a href="https://wa.me/919266987600" className="hover:text-[#E1CAFF] transition-colors">
                  +91 92669 87600
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white mb-1">Instagram</span>
                <a
                  href="https://www.instagram.com/gooeymooey.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E1CAFF] transition-colors"
                >
                  @gooeymooey.in
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white mb-1">Location</span>
                <span>Gurugram, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-white/70 text-xs">
              © {new Date().getFullYear()} Gooey Mooey. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-white/70">Made with</span>
              <Heart className="w-3 h-3 text-[#FF859F] fill-[#FF859F]" />
              <span className="text-white/70">for sweet moments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;