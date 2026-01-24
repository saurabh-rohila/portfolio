import React from 'react';
import { MessageCircle, Instagram, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const orderFields = [
    { label: 'Occasion', icon: '🎉' },
    { label: 'Date', icon: '📅' },
    { label: 'Servings', icon: '👥' },
    { label: 'Flavour', icon: '🍰' },
    { label: 'Design', icon: '🎨' },
  ];

  return (
    <section id="contact" className="py-5 md:py-7 bg-gradient-to-br from-[#2B243F] to-[#7662B2] text-white">
      <div className="container-custom px-3 md:px-6">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Order Custom Cakes & Desserts
          </h2>
          <p className="text-sm text-white/90 max-w-2xl mx-auto">
            Share your occasion, servings, flavour and delivery date - we'll make it perfect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Left - Quick Contact */}
          <div className="space-y-3">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
              <h3 className="text-base font-bold mb-3">Get in Touch</h3>

              <div className="space-y-2">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919266987600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 p-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="bg-[#25D366] p-2 rounded-full group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs">Chat on WhatsApp</p>
                    <p className="text-xs text-white/70">+91 92669 87600</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/gooeymooey.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 p-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-[#FF859F] to-[#FFB8CB] p-2 rounded-full group-hover:scale-110 transition-transform">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs">Follow on Instagram</p>
                    <p className="text-xs text-white/70">@gooeymooey.in</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center space-x-2.5 p-2.5 bg-white/10 rounded-lg">
                  <div className="bg-[#FF859F] p-2 rounded-full">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs">Location</p>
                    <p className="text-xs text-white/70">Serving from Gurugram</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-center space-x-2.5 p-2.5 bg-white/10 rounded-lg">
                  <div className="bg-[#C0C2FD] p-2 rounded-full">
                    <Clock className="w-4 h-4 text-[#2B243F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs">Response Time</p>
                    <p className="text-xs text-white/70">Average reply under 5 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - What to Share - Grid View like reviews */}
          <div className="bg-gradient-to-br from-[#E1CAFF] to-[#C0C2FD] rounded-lg p-3 text-[#2B243F]">
            <h3 className="text-base font-bold mb-3 text-center">What to Share When Ordering</h3>

            <div className="grid grid-cols-2 gap-2">
              {orderFields.map((field, index) => (
                <div key={index} className="bg-white/70 rounded-lg p-2.5 text-center hover:bg-white transition-colors">
                  <div className="text-xl mb-1">{field.icon}</div>
                  <p className="font-semibold text-xs">{field.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 p-2 bg-[#7662B2]/20 rounded-lg border-2 border-dashed border-[#7662B2]">
              <p className="text-center font-semibold text-xs">
                Don't worry if you're unsure! Our team will guide you. 💜
              </p>
            </div>

            <a
              href="https://wa.me/919266987600"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-[#2B243F] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#1a1429] transition-all duration-300 hover:scale-105 active:scale-95 w-full text-center block text-xs"
            >
              Start Your Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;