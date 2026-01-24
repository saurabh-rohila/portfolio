import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Cake, Cookie, Cupcake, Gift, IceCream, PartyPopper } from 'lucide-react';

const FeaturedPreview = () => {
  const navigate = useNavigate();

  const products = [
    { name: 'Celebration Cakes', icon: Cake },
    { name: 'Bento Cakes', icon: Gift },
    { name: 'Cupcakes', icon: Cupcake },
    { name: 'Cookies', icon: Cookie },
    { name: 'Brownies', icon: PartyPopper },
    { name: 'Cheesecake Jars', icon: IceCream },
  ];

  return (
    <section className="py-5 md:py-7 bg-gradient-to-br from-[#E1CAFF]/20 to-white">
      <div className="container-custom px-3 md:px-6">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#2B243F] mb-2">Our Sweet Collection</h2>
          <p className="text-sm text-[#2B243F]/70 max-w-2xl mx-auto">
            Click any item to view full menu with prices
          </p>
        </div>

        {/* List View */}
        <div className="max-w-2xl mx-auto space-y-2">
          {products.map((product, index) => (
            <div
              key={index}
              onClick={() => navigate('/menu')}
              className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-102 group"
            >
              {/* Icon placeholder for photo */}
              <div className="product-placeholder w-16 h-16 rounded-lg flex-shrink-0 flex items-center justify-center">
                <product.icon className="w-6 h-6 text-[#7662B2]" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-sm font-bold text-[#2B243F] mb-0.5">
                  {product.name}
                </h3>
                <p className="text-xs text-[#2B243F]/60">(Add product photo)</p>
              </div>
              
              {/* Arrow */}
              <ArrowRight className="w-4 h-4 text-[#7662B2] group-hover:text-[#FF859F] group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
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