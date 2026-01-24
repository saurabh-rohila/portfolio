import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Sparkles, Award, Package } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative pt-20 pb-5 md:pt-24 md:pb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E1CAFF]/30 via-white to-[#C0C2FD]/20 -z-10" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FFB8CB]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#7662B2]/10 rounded-full blur-3xl -z-10" />

      <div className="container-custom px-3 md:px-6">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          {/* Left Column - Content */}
          <div className="space-y-3 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-[#E1CAFF]/30 px-2.5 py-1 rounded-full">
              <Star className="w-3.5 h-3.5 text-[#FF859F] fill-[#FF859F]" />
              <span className="text-xs font-semibold text-[#2B243F]">Premium Bakery in Gurugram</span>
            </div>

            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#2B243F] leading-tight">
              Premium Custom Cakes & Desserts in Gurugram
            </h1>

            <p className="text-sm md:text-base text-[#2B243F]/80 leading-relaxed">
              Freshly baked, beautifully designed cakes and desserts for birthdays, celebrations, gifting & corporate orders.
            </p>

            {/* Trust Line */}
            <div className="flex items-center space-x-1.5 text-[#2B243F]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#FF859F] fill-[#FF859F]" />
                ))}
              </div>
              <span className="font-semibold text-xs">Trusted by hundreds of happy customers in Gurugram</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <a
                href="https://wa.me/919266987600"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-sm px-5 py-2.5"
              >
                <span>Order on WhatsApp</span>
                <span className="text-xs">(Instant Reply)</span>
              </a>
              <button
                onClick={() => navigate('/menu')}
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-sm px-5 py-2.5"
              >
                <span>View Menu & Prices</span>
              </button>
            </div>

            {/* Microcopy */}
            <p className="text-xs text-[#7662B2] font-medium">
              Fast response • Custom designs accepted
            </p>
          </div>

          {/* Right Column - Hero Image Placeholder - 50% smaller */}
          <div className="relative">
            <div className="product-placeholder h-[140px] md:h-[180px] rounded-xl shadow-lg animate-float">
              <div className="flex flex-col items-center justify-center space-y-2 p-4">
                <Sparkles className="w-8 h-8 text-[#7662B2]" />
                <p className="text-center text-[#7662B2] font-semibold text-xs">
                  Premium Bakery Photography
                  <br />
                  <span className="text-xs font-normal">(Add photos here)</span>
                </p>
              </div>
            </div>
            {/* Decorative elements - smaller */}
            <div className="absolute -top-2 -right-2 bg-[#FF859F] rounded-full p-2 shadow-lg">
              <Award className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 bg-[#7662B2] rounded-full p-2 shadow-lg">
              <Package className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;