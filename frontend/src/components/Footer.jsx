import React from 'react';
import { Heart } from 'lucide-react';
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
      <div className="container-custom px-3 md:px-6 py-5">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Brand + Social */}
          <div className="space-y-3">
            <div className="flex items-center bg-white rounded-lg p-2 w-fit">
              <Logo className="h-16 w-auto" />
            </div>
            <p className="text-white/70 leading-relaxed text-xs">
              Premium handcrafted cakes and desserts made with passion. Serving the sweetest moments in Gurugram since day one.
            </p>
            <div className="flex space-x-2">
              {/* Instagram - Original gradient colors */}
              <a
                href="https://www.instagram.com/gooeymooey.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FD1D1D] p-2.5 rounded-lg hover:scale-110 transition-transform flex items-center justify-center"
                aria-label="Instagram"
                style={{ width: '36px', height: '36px' }}
              >
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* WhatsApp - Original green */}
              <a
                href="https://wa.me/919266987600"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] p-2.5 rounded-lg hover:scale-110 transition-transform flex items-center justify-center"
                aria-label="WhatsApp"
                style={{ width: '36px', height: '36px' }}
              >
                <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Links + Contact */}
          <div className="grid grid-cols-2 gap-4">
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold mb-2">Quick Links</h4>
              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-[#E1CAFF] transition-colors text-xs"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold mb-2">Get in Touch</h4>
              <ul className="space-y-1 text-white/70 text-xs">
                <li>
                  <span className="block font-semibold text-white mb-0.5">WhatsApp</span>
                  <a href="https://wa.me/919266987600" className="hover:text-[#E1CAFF] transition-colors">
                    +91 92669 87600
                  </a>
                </li>
                <li>
                  <span className="block font-semibold text-white mb-0.5">Instagram</span>
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
                  <span className="block font-semibold text-white mb-0.5">Location</span>
                  <span>Gurugram, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-3 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-white/70 text-xs">
              © {new Date().getFullYear()} Gooey Mooey. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-1.5 text-xs">
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