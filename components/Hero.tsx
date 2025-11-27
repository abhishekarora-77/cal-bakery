import React from 'react';
import { ChevronRight, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  const scrollToOrder = () => {
    const section = document.getElementById('order');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Fresh bakery interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-16">
        <div className="animate-fade-in-up">
          <span className="inline-block bg-butter/90 text-cinnamon px-4 py-1 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase mb-4 shadow-sm">
            Baked Fresh Daily
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            Fresh Pastries & <br className="hidden md:block"/> Handcrafted Coffee
          </h1>
          <p className="font-sans text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-100 drop-shadow-md">
            Your local artisan stop for sourdough, pastries, and lunch. 
            Walk-ins welcome — pre-orders available for busy mornings.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToOrder}
              className="w-full sm:w-auto bg-cherry hover:bg-red-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              View Menu & Order
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <a 
              href={BUSINESS_INFO.instagramLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all flex items-center justify-center gap-2"
            >
              <Instagram size={20} />
              Today's Specials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;