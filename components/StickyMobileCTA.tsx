import React from 'react';
import { Phone, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const StickyMobileCTA: React.FC = () => {
  const scrollToOrder = () => {
    const section = document.getElementById('order');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-cream border-t border-cinnamon/20 shadow-lg p-3 pb-safe flex gap-3">
      <a 
        href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`}
        className="flex-1 flex items-center justify-center gap-2 bg-white border border-cinnamon text-cinnamon py-3 rounded-lg font-medium shadow-sm hover:bg-gray-50 transition-colors"
      >
        <Phone size={18} />
        Call
      </a>
      <button 
        onClick={scrollToOrder}
        className="flex-1 flex items-center justify-center gap-2 bg-cherry text-white py-3 rounded-lg font-medium shadow-sm hover:bg-red-700 transition-colors"
      >
        <ShoppingBag size={18} />
        Order
      </button>
    </div>
  );
};

export default StickyMobileCTA;