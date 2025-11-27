import { useState, useEffect } from 'react';
import { InstagramPost } from '../types';
import { MOCK_INSTAGRAM_FEED } from '../constants';

export const useInstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Simulate network latency for realism
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // In a real application, this would fetch from an API route or third-party service
        // const response = await fetch('https://graph.instagram.com/me/media...');
        
        setPosts(MOCK_INSTAGRAM_FEED);
      } catch (err) {
        console.error('Failed to fetch Instagram feed:', err);
        setError('Failed to load Instagram feed');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};
