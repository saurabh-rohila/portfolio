import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Menu from './components/Menu';
import Bestsellers from './components/Bestsellers';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'Gooey Mooey | Premium Cakes & Desserts in Gurugram';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Order premium handcrafted cakes, bento cakes, cupcakes and desserts from Gooey Mooey. Custom cakes for birthdays, celebrations and gifting in Gurugram.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Order premium handcrafted cakes, bento cakes, cupcakes and desserts from Gooey Mooey. Custom cakes for birthdays, celebrations and gifting in Gurugram.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <div className="App bg-[#f7f5f2]">
      <Header />
      <Hero />
      <Products />
      <About />
      <Menu />
      <Bestsellers />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;