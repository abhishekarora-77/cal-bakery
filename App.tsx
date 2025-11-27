import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import InfoRibbon from './components/InfoRibbon';
import MenuHighlights from './components/MenuHighlights';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

const App: React.FC = () => {
  const [isPreview, setIsPreview] = useState(true);

  return (
    <div className="font-sans text-espresso bg-cream antialiased selection:bg-butter selection:text-cinnamon">
      {/* Preview Banner */}
      {isPreview && (
        <div className="bg-espresso text-white text-xs text-center py-2 px-4 fixed top-0 w-full z-[60] flex justify-between items-center">
          <span>PREVIEW MODE: This is a design concept for Cal's Bakery.</span>
          <button 
            onClick={() => setIsPreview(false)}
            className="underline hover:text-butter ml-4"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Main Layout */}
      <div className={`${isPreview ? 'pt-8' : ''}`}>
        <Navigation />
        <main>
          <Hero />
          <InfoRibbon />
          <div id="about" className="py-12 bg-white text-center px-4">
             <div className="max-w-3xl mx-auto">
               <h3 className="font-serif text-2xl text-cinnamon italic mb-4">"A little slice of happiness in every bite."</h3>
               <p className="text-gray-600 leading-relaxed">
                 Located in Innisfil, Cal's Bakery & Cafe is dedicated to the art of traditional baking. 
                 From our 48-hour fermented sourdough to our locally roasted espresso blends, 
                 we believe in slow processes and quality ingredients.
               </p>
             </div>
          </div>
          <MenuHighlights />
          <OrderSection />
          <Gallery />
          <Reviews />
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </div>
  );
};

export default App;