import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#E1CAFF] shadow-lg z-50 md:hidden">
      <div className="grid grid-cols-2 gap-0">
        {/* Call Now */}
        <a
          href="tel:+919266987600"
          className="flex items-center justify-center space-x-2 py-4 bg-[#2B243F] text-white hover:bg-[#1a1429] transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="font-semibold">Call Now</span>
        </a>

        {/* WhatsApp Order */}
        <a
          href="https://wa.me/919266987600?text=Hi!%20I%27d%20like%20to%20place%20an%20order%20from%20Gooey%20Mooey%20%F0%9F%8E%82"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 py-4 bg-[#25D366] text-white hover:bg-[#1ea952] transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">WhatsApp Order</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;