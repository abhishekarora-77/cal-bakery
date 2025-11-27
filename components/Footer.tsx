import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { BUSINESS_INFO, OPERATING_HOURS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-espresso text-cream">
      {/* Map Section */}
      <div className="w-full h-64 md:h-80 grayscale hover:grayscale-0 transition-all duration-500">
        <iframe 
          title="Google Map"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11450.0!2d${BUSINESS_INFO.coordinates.lng}!3d${BUSINESS_INFO.coordinates.lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ2FsJ3MgQmFrZXJ5ICYgQ2FmZQ!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca`}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand & About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-butter">Cal's Bakery & Cafe</h3>
            <p className="text-cream/70 mb-6 leading-relaxed">
              An artisan bakery serving the community with daily baked sourdough, flaky pastries, and locally roasted coffee. Simple, honest, and made with love.
            </p>
            <div className="flex gap-4">
              <a href={BUSINESS_INFO.instagramLink} target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact & Address */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4 text-white">Visit Us</h4>
            <ul className="space-y-4 text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="text-butter mt-1" size={20} />
                <span>
                  {BUSINESS_INFO.address}<br/>
                  <span className="text-xs text-cream/50">Free street parking nearby</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-butter" size={20} />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="hover:text-butter transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-butter" size={20} />
                <a href="mailto:hello@calsbakery.com" className="hover:text-butter transition-colors">
                  hello@calsbakery.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4 text-white">Opening Hours</h4>
            <ul className="space-y-2 text-cream/80">
              {OPERATING_HOURS.map((schedule, idx) => (
                <li key={idx} className="flex justify-between border-b border-white/10 pb-2 last:border-0">
                  <span>{schedule.day}</span>
                  <span className="font-medium text-butter">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-cream/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Cal's Bakery & Cafe. All rights reserved.</p>
          <p>Designed for Local Business.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;