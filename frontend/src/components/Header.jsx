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
      <div className="container-custom px-3 md:px-6">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer flex-1" 
            onClick={() => navigate('/')}
          >
            <Logo className="h-12 md:h-16 lg:h-20 w-auto flex-shrink-0" />
            
            {/* Brand Text - Single Line - Larger on mobile */}
            <div className="lg:hidden flex-1 min-w-0">
              <span 
                className="text-sm md:text-base font-bold text-[#2B243F] block" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Gooey Mooey <span className="text-[#7662B2] text-xs md:text-sm font-normal italic whitespace-nowrap">: Love at First Bite</span>
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
                {item.label === 'Instagram' && <Instagram className="w-4 h-4 inline mr-1" />}
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
            className="hidden lg:flex items-center btn-primary text-sm px-5 py-2.5 whitespace-nowrap"
          >
            Order on WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-1.5 text-[#2B243F] hover:text-[#7662B2] transition-colors flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E1CAFF] shadow-lg">
          <nav className="flex flex-col px-3 py-2 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className={`font-semibold transition-colors text-left text-sm flex items-center space-x-2 ${
                  isActive(item.path) ? 'text-[#7662B2]' : 'text-[#2B243F] hover:text-[#7662B2]'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {item.label === 'Instagram' && <Instagram className="w-4 h-4" />}
                <span>{item.label}</span>
              </button>
            ))}
            <a
              href="https://wa.me/919266987600"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center text-sm"
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