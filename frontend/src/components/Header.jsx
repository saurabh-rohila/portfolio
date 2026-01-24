import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
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
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Bestsellers', href: '#bestsellers' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="container-custom px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Full brand logo as per guidelines */}
          <div className="flex items-center">
            <Logo className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-[#2B243F] hover:text-[#7662B2] font-medium transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <a
            href="https://wa.me/919266987600"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block btn-primary"
          >
            Order on WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#2B243F] hover:text-[#7662B2] transition-colors"
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
                onClick={() => scrollToSection(item.href)}
                className="text-[#2B243F] hover:text-[#7662B2] font-medium transition-colors text-left"
              >
                {item.label}
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