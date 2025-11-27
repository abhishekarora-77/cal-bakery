import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span 
            onClick={() => scrollToSection('hero')}
            className={`font-serif text-2xl md:text-3xl font-bold cursor-pointer ${scrolled ? 'text-cinnamon' : 'text-cinnamon md:text-white md:drop-shadow-md'}`}
          >
            Cal's Bakery
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Menu', 'Gallery', 'Reviews', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`font-medium text-sm tracking-wide uppercase hover:text-cherry transition-colors ${scrolled ? 'text-espresso' : 'text-white drop-shadow-md'}`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('order')}
            className="bg-cherry text-white px-6 py-2 rounded-full font-medium shadow-lg hover:bg-red-700 transition-colors"
          >
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="text-cinnamon bg-butter/20 p-2 rounded-full">
            <Phone size={20} />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="text-cinnamon">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream border-t border-cinnamon/10 shadow-xl flex flex-col p-6 space-y-4">
          {['Menu', 'Gallery', 'Reviews', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left text-lg font-serif text-espresso py-2 border-b border-cinnamon/10"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('order')}
            className="bg-cherry text-white w-full py-3 rounded-lg font-medium mt-4"
          >
            Order for Pickup
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;