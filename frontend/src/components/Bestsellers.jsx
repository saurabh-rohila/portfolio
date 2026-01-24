import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

const Bestsellers = () => {
  const bestsellers = [
    { name: 'Chocolate Truffle Cake', badge: 'Most Popular' },
    { name: 'Red Velvet Cake', badge: 'Customer Favorite' },
    { name: 'Bento Birthday Cake', badge: 'Trending' },
    { name: 'Fudgy Brownie Box', badge: 'Best Value' },
    { name: 'Lotus Cheesecake Jar', badge: 'Signature' },
    { name: 'Custom Theme Cookies', badge: 'Perfect Gift' },
  ];

  return (
    <section id="bestsellers" className="section-padding bg-gradient-to-br from-[#E1CAFF]/30 via-[#C0C2FD]/20 to-[#FFB8CB]/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#FF859F]/20 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-5 h-5 text-[#FF859F]" />
            <span className="text-sm font-semibold text-[#2B243F]">Most Loved</span>
          </div>
          <h2 className="text-gradient mb-4">Most Ordered at Gooey Mooey</h2>
          <p className="text-lg text-[#2B243F]/70 max-w-2xl mx-auto">
            Our customers' top picks - consistently delicious, always fresh
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestsellers.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10 bg-[#FF859F] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                {item.badge}
              </div>

              {/* Image Placeholder */}
              <div className="product-placeholder h-56 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Star className="w-12 h-12 text-[#7662B2] mx-auto mb-2" />
                    <p className="text-[#7662B2] font-semibold">{item.name}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2B243F] mb-4 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.name}
                </h3>
                <a
                  href="https://wa.me/919266987600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  Order Now on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#2B243F]/70 mb-6 text-lg">
            Join hundreds of happy customers who trust Gooey Mooey for their special moments
          </p>
          <a
            href="https://wa.me/919266987600"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
          >
            Start Your Order Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;