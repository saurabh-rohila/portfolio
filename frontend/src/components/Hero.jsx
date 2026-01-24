import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Sparkles, Award, Package } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative pt-24 pb-5 md:pt-28 md:pb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E1CAFF]/30 via-white to-[#C0C2FD]/20 -z-10" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FFB8CB]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#7662B2]/10 rounded-full blur-3xl -z-10" />

      <div className="container-custom px-3 md:px-6">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          {/* Left Column - Content - All Centered */}
          <div className="space-y-3 animate-fade-in-up text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2B243F] leading-tight">
              Premium Custom Cakes & Desserts in Delhi NCR
            </h1>

            <p className="text-sm md:text-base text-[#2B243F]/80 leading-relaxed">
              Freshly baked, beautifully designed cakes and desserts for birthdays, celebrations, gifting & corporate orders.
            </p>

            {/* Trust Line with Google Rating - Centered */}
            <div className="flex flex-col items-center space-y-2 text-[#2B243F]">
              <div className="flex items-center space-x-1">
                <span className="font-bold text-[#2B243F] text-base">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < 5 ? 'text-[#FF859F] fill-[#FF859F]' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#2B243F]/60">(Google Rating)</span>
              </div>
              <p className="text-xs font-semibold text-[#2B243F]">
                Trusted by hundreds of happy customers
              </p>
            </div>

            {/* CTA Buttons - Centered */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2 justify-center">
              <a
                href="https://wa.me/919266987600"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7662B2] text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-[#5f4e94] hover:shadow-lg hover:scale-105 active:scale-95 inline-flex items-center justify-center space-x-1.5 text-xs"
              >
                <span>Order on WhatsApp</span>
                <span className="text-xs">(Instant Reply)</span>
              </a>
              <button
                onClick={() => navigate('/menu')}
                className="bg-white text-[#7662B2] border-2 border-[#7662B2] px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-[#7662B2] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95 inline-flex items-center justify-center space-x-1.5 text-xs"
              >
                <span>View Menu & Prices</span>
              </button>
            </div>
          </div>

          {/* Right Column - 3 Photo Boxes */}
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative">
                <div className="product-placeholder h-[120px] md:h-[150px] rounded-lg shadow-lg">
                  <div className="flex flex-col items-center justify-center h-full p-2">
                    <Sparkles className="w-6 h-6 text-[#7662B2] mb-1" />
                    <p className="text-center text-[#7662B2] font-semibold text-xs">
                      Photo {num}
                    </p>
                  </div>
                </div>
                {/* Small decorative badge */}
                {num === 1 && (
                  <div className="absolute -top-1 -right-1 bg-[#FF859F] rounded-full p-1 shadow-md">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                )}
                {num === 3 && (
                  <div className="absolute -bottom-1 -left-1 bg-[#7662B2] rounded-full p-1 shadow-md">
                    <Package className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;