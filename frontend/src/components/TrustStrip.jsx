import React from 'react';
import { Sparkles, Award, Star, Package } from 'lucide-react';

const TrustStrip = () => {
  return (
    <section className="py-3 bg-white">
      <div className="container-custom px-3 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {[
            { icon: Sparkles, text: 'Freshly Baked Daily' },
            { icon: Award, text: 'Premium Ingredients' },
            { icon: Star, text: 'Custom Designs Available' },
            { icon: Package, text: 'Safe Packaging' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-1.5 p-2.5 bg-gradient-to-br from-[#E1CAFF]/30 to-[#C0C2FD]/20 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-br from-[#7662B2] to-[#FF859F] p-2 rounded-full">
                <item.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-xs font-semibold text-[#2B243F]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;