import React from 'react';
import { MENU_HIGHLIGHTS } from '../constants';
import { Download } from 'lucide-react';

const MenuHighlights: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cinnamon mb-4">Daily Favorites</h2>
          <p className="text-espresso/80 max-w-2xl mx-auto">
            Baked fresh every morning using traditional recipes, high-quality butter, and seasonal fillings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_HIGHLIGHTS.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-lg font-bold text-espresso">{item.name}</h3>
                  <span className="text-cinnamon font-semibold">{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 bg-transparent border-2 border-cinnamon text-cinnamon hover:bg-cinnamon hover:text-white px-8 py-3 rounded-lg font-medium transition-all">
            <Download size={20} />
            Download Full Menu (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;