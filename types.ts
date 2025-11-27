export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  category: 'pastry' | 'bread' | 'lunch' | 'coffee';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: 'Google' | 'Yelp' | 'Direct';
}

export interface OperatingHours {
  day: string;
  hours: string;
}

export interface BusinessInfo {
  name: string;
  phone: string;
  address: string;
  mapLink: string;
  instagramLink: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
}