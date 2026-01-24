import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Sparkles, Award, Package } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative pt-32 pb-12 md:pt-36 md:pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E1CAFF]/30 via-white to-[#C0C2FD]/20 -z-10" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FFB8CB]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#7662B2]/10 rounded-full blur-3xl -z-10" />

      <div className="container-custom px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-[#E1CAFF]/30 px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 text-[#FF859F] fill-[#FF859F]" />
              <span className="text-xs font-semibold text-[#2B243F]">Premium Bakery in Gurugram</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2B243F] leading-tight">
              Premium Custom Cakes & Desserts in Gurugram
            </h1>

            <p className="text-base md:text-lg text-[#2B243F]/80 leading-relaxed">
              Freshly baked, beautifully designed cakes and desserts for birthdays, celebrations, gifting & corporate orders.
            </p>

            {/* Trust Line */}
            <div className="flex items-center space-x-2 text-[#2B243F]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#FF859F] fill-[#FF859F]" />
                ))}
              </div>
              <span className="font-semibold text-sm">Trusted by hundreds of happy customers in Gurugram</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <a
                href="https://wa.me/919266987600"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-base"
              >
                <span>Order on WhatsApp</span>
                <span className="text-xs">(Instant Reply)</span>
              </a>
              <button
                onClick={() => navigate('/menu')}
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-base"
              >
                <span>View Menu & Prices</span>
              </button>
            </div>

            {/* Microcopy */}
            <p className="text-xs text-[#7662B2] font-medium">
              Fast response • Custom designs accepted
            </p>
          </div>

          {/* Right Column - Hero Image Placeholder */}
          <div className="relative">
            <div className="product-placeholder h-[350px] md:h-[400px] rounded-2xl shadow-xl animate-float">
              <div className="flex flex-col items-center justify-center space-y-4 p-8">
                <Sparkles className="w-12 h-12 text-[#7662B2]" />
                <p className="text-center text-[#7662B2] font-semibold text-base">
                  Premium Bakery Photography
                  <br />
                  <span className="text-sm font-normal">(Add your beautiful cake photos here)</span>
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 bg-[#FF859F] rounded-full p-3 shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#7662B2] rounded-full p-3 shadow-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;