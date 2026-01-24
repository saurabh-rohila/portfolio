import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Menu & Order', path: '/menu' },
    { label: 'Instagram', href: 'https://www.instagram.com/gooeymooey.in/', external: true },
    { label: 'Contact', path: '/', hash: '#contact' },
  ];

  const handleNavigation = (item) => {
    if (item.external) {
      window.open(item.href, '_blank');
    } else if (item.hash) {
      navigate(item.path);
      setTimeout(() => {
        const element = document.querySelector(item.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(item.path);
    }
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'
      }`}
    >
      <div className="container-custom px-6 md:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <Logo className="h-16 md:h-20 lg:h-24 w-auto" />
            
            {/* Brand Text for Mobile/Tablet */}
            <div className="flex flex-col lg:hidden">
              <span 
                className="text-base md:text-lg font-bold text-[#2B243F]" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Gooey Mooey
              </span>
              <span 
                className="text-xs text-[#7662B2] italic" 
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Love at First Bite
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className={`font-semibold text-base transition-colors duration-300 relative group ${
                  isActive(item.path) ? 'text-[#7662B2]' : 'text-[#2B243F] hover:text-[#7662B2]'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {item.label === 'Instagram' && <Instagram className="w-5 h-5 inline mr-1" />}
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7662B2] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <a
            href="https://wa.me/919266987600"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center btn-primary text-base px-6 py-3"
          >
            Order on WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#2B243F] hover:text-[#7662B2] transition-colors flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E1CAFF] shadow-lg">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className={`font-semibold transition-colors text-left text-base flex items-center space-x-2 ${
                  isActive(item.path) ? 'text-[#7662B2]' : 'text-[#2B243F] hover:text-[#7662B2]'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {item.label === 'Instagram' && <Instagram className="w-5 h-5" />}
                <span>{item.label}</span>
              </button>
            ))}
            <a
              href="https://wa.me/919266987600"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;