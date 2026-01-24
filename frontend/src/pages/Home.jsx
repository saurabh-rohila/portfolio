import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import FeaturedPreview from '../components/FeaturedPreview';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const Home = () => {
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