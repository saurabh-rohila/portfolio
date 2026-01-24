import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

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
    <section className="py-4 md:py-6 bg-gradient-to-br from-[#E1CAFF]/20 to-white">
      <div className="container-custom px-3 md:px-6">
        <div className="text-center mb-3">
          <h2 className="text-xl md:text-2xl font-bold text-[#2B243F] mb-2">Our Sweet Collection</h2>
          <p className="text-sm text-[#2B243F]/70 max-w-2xl mx-auto">
            Click any item to view full menu with prices
          </p>
        </div>

        {/* Grid View - 3 columns like "What to Share" */}
        <div className="grid grid-cols-3 gap-2 max-w-2xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => navigate('/menu')}
              className="bg-gradient-to-br from-[#E1CAFF]/20 to-[#C0C2FD]/20 rounded-lg p-2 text-center hover:bg-white transition-colors cursor-pointer shadow-md hover:shadow-lg"
            >
              {/* Photo placeholder box */}
              <div className="product-placeholder h-16 md:h-20 rounded-lg mb-1.5 flex items-center justify-center">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-[#7662B2]" />
              </div>
              {/* Product name */}
              <p className="font-semibold text-xs text-[#2B243F] leading-tight">
                {product.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-3">
          <button
            onClick={() => navigate('/menu')}
            className="bg-[#7662B2] text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-[#5f4e94] hover:shadow-lg hover:scale-105 active:scale-95 text-xs"
          >
            View Full Menu & Prices
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPreview;