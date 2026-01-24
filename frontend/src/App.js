import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';

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

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.getElementsByTagName('head')[0].appendChild(metaKeywords);
    }
    metaKeywords.content = 'Bakery in Gurugram, Custom Cakes Gurgaon, Bento Cakes Gurgaon, Birthday Cake Delivery Gurgaon';
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        <Footer />
        <MobileBottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;