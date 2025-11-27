import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-espresso">Locals Love Us</h2>
          <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="text-sm text-gray-500 mt-1">Based on Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow">"{review.text}"</p>
              <div className="mt-auto">
                <p className="font-bold text-espresso">{review.author}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{review.source} Review</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href={BUSINESS_INFO.mapLink} 
            target="_blank" 
            rel="noreferrer"
            className="text-cinnamon font-medium underline hover:text-cherry"
          >
            Read more reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;