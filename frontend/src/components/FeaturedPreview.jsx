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
    <section className="py-12 md:py-16 bg-gradient-to-br from-[#E1CAFF]/20 to-white">
      <div className="container-custom px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-gradient mb-3">Our Sweet Collection</h2>
          <p className="text-base text-[#2B243F]/70 max-w-2xl mx-auto">
            Preview our delicious range - click to view full menu with prices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => navigate('/menu')}
            >
              {/* Image Placeholder */}
              <div className="product-placeholder h-56 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[#7662B2] font-semibold text-center px-4 text-sm">
                    {product.name}
                    <br />
                    <span className="text-xs font-normal">(Product photo)</span>
                  </p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B243F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white transform translate-y-0 transition-transform duration-500">
                <h3 className="text-lg font-bold text-[#2B243F] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {product.name}
                </h3>
                <button
                  className="inline-flex items-center space-x-2 text-[#7662B2] font-semibold hover:text-[#FF859F] transition-colors group-hover:translate-x-2 transform duration-300 text-sm"
                >
                  <span>View on Menu Page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/menu')}
            className="btn-primary inline-block text-base px-6 py-3"
          >
            View Full Menu & Prices
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPreview;