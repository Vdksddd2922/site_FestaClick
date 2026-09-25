import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Como funciona', href: '#como-funciona' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-festa-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        <a href="#" className="flex items-center gap-2 group">
          <Camera className="w-8 h-8 text-festa-champagne group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-display font-bold text-2xl tracking-wide text-festa-white">
            FESTA<span className="text-festa-champagne">CLICK</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm text-festa-white/70 hover:text-festa-champagne transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="https://wa.me/5548992019130?text=Ol%C3%A1%21+Conheci+a+Festa+Click+pelo+Instagram+e+gostaria+de+saber+mais+sobre+a+galeria+de+fotos+para+minha+festa." 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-festa-champagne/30 text-festa-champagne hover:bg-festa-champagne hover:text-festa-black transition-all duration-300 text-sm font-medium"
          >
            Falar pelo WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-festa-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-festa-black border-t border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-fade-in">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg text-festa-white/80 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5548992019130?text=Ol%C3%A1%21+Conheci+a+Festa+Click+pelo+Instagram+e+gostaria+de+saber+mais+sobre+a+galeria+de+fotos+para+minha+festa." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary text-center mt-4"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
