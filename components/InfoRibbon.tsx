import React from 'react';
import { Clock, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, OPERATING_HOURS } from '../constants';
import { useInstagramFeed } from '../hooks/useInstagramFeed';

const InfoRibbon: React.FC = () => {
  const { posts, loading } = useInstagramFeed();
  const today = new Date().getDay();
  // Simple logic to show today's hours. 0 is Sunday.
  const todayHours = OPERATING_HOURS.find(schedule => {
    if (today === 0) return schedule.day === "Sun";
    if (today === 6) return schedule.day === "Sat";
    return schedule.day === "Mon - Fri";
  })?.hours || "Check hours";

  // Derive special from the latest post that mentions "Special" or just the latest post
  const getSpecial = () => {
    if (loading || !posts.length) return "Check our Instagram Stories!";
    
    // Attempt to find a post with "Special" in caption
    const specialPost = posts.find(p => p.caption.toLowerCase().includes('special'));
    
    // Use that post or the very first one
    const targetPost = specialPost || posts[0];
    
    // Clean up caption: remove hashtags and take meaningful first sentence or words
    let cleanCaption = targetPost.caption.split('#')[0].trim();
    
    // Improved truncation: try to cut at a punctuation or space
    if (cleanCaption.length > 80) {
      const truncated = cleanCaption.substring(0, 80);
      const lastSpaceIndex = truncated.lastIndexOf(' ');
      if (lastSpaceIndex > 0) {
        cleanCaption = truncated.substring(0, lastSpaceIndex) + '...';
      } else {
        cleanCaption = truncated + '...';
      }
    }
    
    // If empty after cleaning (e.g. only hashtags), fallback
    if (!cleanCaption) return "Freshly baked goods available now!";

    return cleanCaption;
  };

  return (
    <div className="bg-sage/20 border-y border-sage/30 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-espresso">
        
        {/* Special */}
        <div className="flex items-center gap-2 text-cinnamon font-medium bg-white/50 px-4 py-2 rounded-full shadow-sm animate-fade-in">
          <Sparkles size={18} className="text-butter-dark flex-shrink-0" />
          <span className="text-sm md:text-base truncate max-w-[300px] md:max-w-[400px]">
            {loading ? "Loading today's special..." : getSpecial()}
          </span>
        </div>

        {/* Info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-sage-dark" />
            <span className="font-semibold">Today:</span>
            <span>{todayHours}</span>
          </div>
          
          <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="flex items-center gap-2 hover:text-cherry transition-colors">
            <Phone size={18} className="text-sage-dark" />
            <span className="font-semibold">Call:</span>
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoRibbon;