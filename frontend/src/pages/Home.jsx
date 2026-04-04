import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import FeaturedPreview from '../components/FeaturedPreview';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    document.title = 'Gooey Mooey | Premium Cakes & Desserts in Gurugram';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Order premium handcrafted cakes, bento cakes, cupcakes and desserts from Gooey Mooey. Custom cakes for birthdays, celebrations and gifting in Gurugram.');
    }
  }, []);

  return (
    <div className="bg-[#f7f5f2]">
      <Hero />
      <TrustStrip />
      <FeaturedPreview />
      <About />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;