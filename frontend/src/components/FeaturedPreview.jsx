import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedPreview = () => {
  const navigate = useNavigate();

  const products = [
    { name: 'Celebration Cakes' },
    { name: 'Bento Cakes' },
    { name: 'Cupcakes' },
    { name: 'Cookies' },
    { name: 'Brownies' },
    { name: 'Cheesecake Jars' },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-[#E1CAFF]/20 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-4">Our Sweet Collection</h2>
          <p className="text-lg text-[#2B243F]/70 max-w-2xl mx-auto">
            Preview our delicious range - click to view full menu with prices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => navigate('/menu')}
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
                <h3 className="text-xl font-bold text-[#2B243F] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {product.name}
                </h3>
                <button
                  className="inline-flex items-center space-x-2 text-[#7662B2] font-semibold hover:text-[#FF859F] transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  <span>View on Menu Page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/menu')}
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            View Full Menu & Prices
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPreview;