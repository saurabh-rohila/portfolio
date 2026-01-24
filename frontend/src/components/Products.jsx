import React from 'react';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Celebration Cakes',
      benefit: 'Perfect for birthdays and special occasions',
    },
    {
      name: 'Bento Cakes',
      benefit: 'Cute, personal-sized treats with custom messages',
    },
    {
      name: 'Cupcakes',
      benefit: 'Individually crafted bite-sized delights',
    },
    {
      name: 'Cookies',
      benefit: 'Handcrafted with premium ingredients',
    },
    {
      name: 'Brownies & Dessert Bars',
      benefit: 'Fudgy, rich, and absolutely indulgent',
    },
    {
      name: 'Cheesecakes / Dessert Jars',
      benefit: 'Creamy perfection in every layer',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-4">Our Sweet Collection</h2>
          <p className="text-lg text-[#2B243F]/70 max-w-2xl mx-auto">
            From celebration cakes to gourmet desserts, every creation is made with love and premium ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Placeholder */}
              <div className="product-placeholder h-72 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[#7662B2] font-semibold text-center px-4">
                    {product.name}
                    <br />
                    <span className="text-sm font-normal">(Product photo)</span>
                  </p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B243F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white transform translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-[#2B243F] mb-2">{product.name}</h3>
                <p className="text-sm text-[#2B243F]/70 mb-4">{product.benefit}</p>
                <a
                  href="https://wa.me/919266987600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#7662B2] font-semibold hover:text-[#FF859F] transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  <span>Order This</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;