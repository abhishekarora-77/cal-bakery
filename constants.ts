import { BusinessInfo, MenuItem, OperatingHours, Review, InstagramPost } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Cal's Bakery & Cafe",
  phone: "(705) 555-0199", // Placeholder based on region
  address: "Innisfil Beach Rd, Innisfil, ON", // Approximated from coords
  mapLink: "https://www.google.com/maps/place/Cal's+Bakery+%26+Cafe/@44.4025421,-79.7190513,15z",
  instagramLink: "https://www.instagram.com/cals_bakery_and_cafe/",
  coordinates: {
    lat: 44.4025421,
    lng: -79.7190513
  }
};

export const OPERATING_HOURS: OperatingHours[] = [
  { day: "Mon - Fri", hours: "7:00 AM - 4:00 PM" },
  { day: "Sat", hours: "8:00 AM - 3:00 PM" },
  { day: "Sun", hours: "Closed" }
];

export const MENU_HIGHLIGHTS: MenuItem[] = [
  {
    id: '1',
    name: "Classic Butter Croissant",
    description: "Flaky, layered, and baked fresh every morning. Made with high-fat European butter.",
    price: "$3.50",
    category: "pastry",
    image: "https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: '2',
    name: "Artisan Sourdough Loaf",
    description: "Naturally leavened for 48 hours. A crisp crust with a chewy, airy crumb.",
    price: "$7.00",
    category: "bread",
    image: "https://images.unsplash.com/photo-1585476644321-b976d915931f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: '3',
    name: "Ham & Gruyère Sandwich",
    description: "On our house-made baguette with dijon butter and cornichons.",
    price: "$9.50",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1553909489-cd47e35f40e7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: '4',
    name: "Flat White",
    description: "Double shot of espresso with micro-foamed milk. Smooth and velvety.",
    price: "$4.25",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: "Sarah J.",
    rating: 5,
    text: "Amazing croissants and friendly service. Reminds me of Paris!",
    source: "Google"
  },
  {
    id: 'r2',
    author: "Mike T.",
    rating: 5,
    text: "Best sourdough in town, perfect coffee. A daily ritual for me.",
    source: "Google"
  },
  {
    id: 'r3',
    author: "Emily R.",
    rating: 5,
    text: "Great spot for brunch. The staff is lovely and the vibe is cozy.",
    source: "Google"
  }
];

// Simulating API Response for Instagram Graph API
export const MOCK_INSTAGRAM_FEED: InstagramPost[] = [
  {
    id: 'ig1',
    caption: "Today's Special: Fresh Raspberry & Pistachio Danishes! 🥐✨ Sweet, tart, and perfectly flaky. Best paired with our house roast coffee. Get them before they're gone!",
    media_url: "https://images.unsplash.com/photo-1626202158864-7d5266cb6825?auto=format&fit=crop&w=600&q=80",
    permalink: "https://www.instagram.com/cals_bakery_and_cafe/",
    timestamp: new Date().toISOString(),
    media_type: 'IMAGE'
  },
  {
    id: 'ig2',
    caption: "Freshly baked sourdough loaves cooling on the rack. 🥖 We use a 48-hour fermentation process for that perfect crust and chew. #sourdough #artisanbread #bakerylife",
    media_url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    permalink: "https://www.instagram.com/cals_bakery_and_cafe/",
    timestamp: new Date(Date.now() - 86400000).toISOString(),
    media_type: 'IMAGE'
  },
  {
    id: 'ig3',
    caption: "Pouring love into every cup. ☕️ Our baristas are ready to start your morning right. #latteart #coffee #morningroutine",
    media_url: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=600&q=80",
    permalink: "https://www.instagram.com/cals_bakery_and_cafe/",
    timestamp: new Date(Date.now() - 172800000).toISOString(),
    media_type: 'IMAGE'
  },
  {
    id: 'ig4',
    caption: "Behind the scenes: The team prepping for the weekend rush. 💪 Open until 3 PM today! #bakeryteam #localbusiness",
    media_url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80",
    permalink: "https://www.instagram.com/cals_bakery_and_cafe/",
    timestamp: new Date(Date.now() - 259200000).toISOString(),
    media_type: 'IMAGE'
  },
  {
    id: 'ig5',
    caption: "Blueberry Muffins straight from the oven. Moist, buttery, and bursting with berries. 🫐 #muffins #baking #fresh",
    media_url: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=600&q=80",
    permalink: "https://www.instagram.com/cals_bakery_and_cafe/",
    timestamp: new Date(Date.now() - 345600000).toISOString(),
    media_type: 'IMAGE'
  },
  {
    id: 'ig6',
    caption: "Lunch plans? Try our signature Ham & Cheese Croissant Sandwich. 🥪 Savory, flaky perfection.",
    media_url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    permalink: "https://www.instagram.com/cals_bakery_and_cafe/",
    timestamp: new Date(Date.now() - 432000000).toISOString(),
    media_type: 'IMAGE'
  }
];