import React, { useState } from 'react';
import { Instagram, Loader2, ImageOff } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useInstagramFeed } from '../hooks/useInstagramFeed';

const Gallery: React.FC = () => {
  const { posts, loading } = useInstagramFeed();
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-espresso mb-2">Fresh From the Oven</h2>
            <p className="text-gray-600">Follow us for daily bakes & behind the scenes.</p>
          </div>
          <a 
            href={BUSINESS_INFO.instagramLink}
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-cinnamon font-medium hover:text-cherry transition-colors"
          >
            <Instagram size={20} />
            @cals_bakery_and_cafe
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64 bg-gray-50 rounded-lg">
            <Loader2 className="animate-spin text-cinnamon" size={32} />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {posts.slice(0, 6).map((post) => (
              <a 
                key={post.id} 
                href={post.permalink}
                target="_blank"
                rel="noreferrer"
                className="aspect-square relative group overflow-hidden rounded-lg bg-gray-100 block"
              >
                {!imageErrors[post.id] ? (
                  <img 
                    src={post.media_url} 
                    alt={post.caption} 
                    loading="lazy"
                    onError={() => handleImageError(post.id)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400 p-4 text-center">
                    <ImageOff size={32} className="mb-2" />
                    <span className="text-xs">Image unavailable</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                   <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100" size={32} />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;