import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Sparkles, Award, Package } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E1CAFF]/30 via-white to-[#C0C2FD]/20 -z-10" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FFB8CB]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#7662B2]/10 rounded-full blur-3xl -z-10" />

      <div className="container-custom px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-[#E1CAFF]/30 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-[#FF859F] fill-[#FF859F]" />
              <span className="text-sm font-semibold text-[#2B243F]">Premium Bakery in Gurugram</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B243F] leading-tight">
              Premium Custom Cakes & Desserts in Gurugram
            </h1>

            <p className="text-lg md:text-xl text-[#2B243F]/80 leading-relaxed">
              Freshly baked, beautifully designed cakes and desserts for birthdays, celebrations, gifting & corporate orders.
            </p>

            {/* Trust Line */}
            <div className="flex items-center space-x-2 text-[#2B243F]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FF859F] fill-[#FF859F]" />
                ))}
              </div>
              <span className="font-semibold">Trusted by hundreds of happy customers in Gurugram</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/919266987600"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center space-x-2 text-lg"
              >
                <span>Order on WhatsApp</span>
                <span className="text-sm">(Instant Reply)</span>
              </a>
              <button
                onClick={() => navigate('/menu')}
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-lg"
              >
                <span>View Menu & Prices</span>
              </button>
            </div>

            {/* Microcopy */}
            <p className="text-sm text-[#7662B2] font-medium">
              Fast response • Custom designs accepted
            </p>
          </div>

          {/* Right Column - Hero Image Placeholder */}
          <div className="relative">
            <div className="product-placeholder h-[400px] md:h-[500px] rounded-3xl shadow-2xl animate-float">
              <div className="flex flex-col items-center justify-center space-y-4 p-8">
                <Sparkles className="w-16 h-16 text-[#7662B2]" />
                <p className="text-center text-[#7662B2] font-semibold text-lg">
                  Premium Bakery Photography
                  <br />
                  <span className="text-sm font-normal">(Add your beautiful cake photos here)</span>
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 bg-[#FF859F] rounded-full p-4 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#7662B2] rounded-full p-4 shadow-lg">
              <Package className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;