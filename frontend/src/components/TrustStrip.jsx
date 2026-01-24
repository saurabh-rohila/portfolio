import React from 'react';
import { Sparkles, Award, Star, Package } from 'lucide-react';

const TrustStrip = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: Sparkles, text: 'Freshly Baked Daily' },
            { icon: Award, text: 'Premium Ingredients' },
            { icon: Star, text: 'Custom Designs Available' },
            { icon: Package, text: 'Safe Packaging' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 p-6 bg-gradient-to-br from-[#E1CAFF]/30 to-[#C0C2FD]/20 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-br from-[#7662B2] to-[#FF859F] p-4 rounded-full">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-semibold text-[#2B243F]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;