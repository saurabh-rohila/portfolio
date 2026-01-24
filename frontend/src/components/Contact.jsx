import React from 'react';
import { MessageCircle, Instagram, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-16 bg-gradient-to-br from-[#2B243F] to-[#7662B2] text-white">
      <div className="container-custom px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Order Custom Cakes & Desserts
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Share your occasion, servings, flavour and delivery date - we'll make it perfect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left - Quick Contact */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
                Get in Touch
              </h3>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919266987600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="bg-[#25D366] p-2.5 rounded-full group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Chat on WhatsApp</p>
                    <p className="text-xs text-white/70">+91 92669 87600</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/gooeymooey.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-[#FF859F] to-[#FFB8CB] p-2.5 rounded-full group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Follow on Instagram</p>
                    <p className="text-xs text-white/70">@gooeymooey.in</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                  <div className="bg-[#FF859F] p-2.5 rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Location</p>
                    <p className="text-xs text-white/70">Serving from Gurugram</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                  <div className="bg-[#C0C2FD] p-2.5 rounded-full">
                    <Clock className="w-5 h-5 text-[#2B243F]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Response Time</p>
                    <p className="text-xs text-white/70">Average reply under 5 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - What to Share */}
          <div className="bg-gradient-to-br from-[#E1CAFF] to-[#C0C2FD] rounded-xl p-6 text-[#2B243F]">
            <h3 className="text-xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
              What to Share When Ordering
            </h3>

            <div className="space-y-3">
              {[
                { label: 'Occasion', example: 'Birthday, Anniversary, Corporate Event, etc.' },
                { label: 'Date Required', example: 'When do you need the order?' },
                { label: 'Servings', example: 'How many people?' },
                { label: 'Flavour Preference', example: 'Chocolate, Vanilla, Red Velvet, etc.' },
                { label: 'Custom Design', example: 'Share your theme or inspiration' },
              ].map((field, index) => (
                <div key={index} className="bg-white/50 rounded-lg p-3">
                  <p className="font-semibold mb-1 text-sm">{field.label}</p>
                  <p className="text-xs text-[#2B243F]/70">{field.example}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 bg-[#7662B2]/20 rounded-lg border-2 border-dashed border-[#7662B2]">
              <p className="text-center font-semibold text-sm">
                Don't worry if you're unsure! Our team will guide you through every detail. 💜
              </p>
            </div>

            <a
              href="https://wa.me/919266987600"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 bg-[#2B243F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1a1429] transition-all duration-300 hover:scale-105 active:scale-95 w-full text-center block text-sm"
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