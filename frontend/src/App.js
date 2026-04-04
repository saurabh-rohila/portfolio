import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';

function App() {
  useEffect(() => {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Order premium handcrafted cakes, bento cakes, cupcakes and desserts from Gooey Mooey. Custom cakes for birthdays, celebrations and gifting in Gurugram.';

    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement('meta');
      metaKw.name = 'keywords';
      document.head.appendChild(metaKw);
    }
    metaKw.content = 'Bakery in Gurugram, Custom Cakes Gurgaon, Bento Cakes Gurgaon, Birthday Cake Delivery Gurgaon';
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Toaster position="top-center" richColors closeButton />
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