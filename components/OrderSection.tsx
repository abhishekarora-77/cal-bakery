import React, { useState } from 'react';
import { Send, Coffee } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const OrderSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    items: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppLink = () => {
    const phone = BUSINESS_INFO.phone.replace(/\D/g, ''); // Clean phone number
    const text = `Hello Cal's Bakery, I want to preorder:%0A${formData.items}%0AFor: ${formData.date} at ${formData.time}%0AFrom: ${formData.name}`;
    return `https://wa.me/1${phone}?text=${text}`; // Assuming +1 country code
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = generateWhatsAppLink();
    window.open(link, '_blank');
  };

  return (
    <section id="order" className="py-20 bg-butter/20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">
          
          {/* Visual Side */}
          <div className="md:w-1/2 bg-cinnamon text-white p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
            <div className="relative z-10">
              <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Coffee size={24} />
              </div>
              <h2 className="font-serif text-3xl font-bold mb-4">Pre-order for Pickup</h2>
              <p className="text-white/90 mb-6">
                Skip the line! Tell us what you need and when you'll be by. We confirm all orders within 1 hour during business hours.
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Large orders for office meetings</li>
                <li>• Weekend pastry boxes</li>
                <li>• Specific bread loaf reservations</li>
              </ul>
            </div>
            <div className="relative z-10 mt-8">
              <p className="text-xs uppercase tracking-widest opacity-70">For Wholesale Inquiries:</p>
              <p className="font-medium">Please call us directly.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-1/2 p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnamon focus:border-transparent outline-none transition-shadow"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">What would you like?</label>
                <textarea 
                  required
                  name="items"
                  value={formData.items}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnamon focus:border-transparent outline-none transition-shadow"
                  placeholder="e.g. 2 Croissants, 1 Sourdough Loaf..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input 
                    required
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnamon focus:border-transparent outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Time</label>
                  <input 
                    required
                    type="time" 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cinnamon focus:border-transparent outline-none transition-shadow"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-cherry text-white py-3 rounded-lg font-medium shadow-md hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Order via WhatsApp
                </button>
                <p className="text-xs text-center text-gray-500 mt-3">
                  This will open WhatsApp with your pre-filled message.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrderSection;