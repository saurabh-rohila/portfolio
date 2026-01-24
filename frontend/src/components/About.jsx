import React from 'react';
import { Heart, Sparkles, Award } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Freshly Baked Daily',
      description: 'Every dessert is prepared fresh with the finest ingredients',
    },
    {
      icon: Award,
      title: 'Premium Presentation',
      description: 'Beautiful packaging and stunning visual appeal',
    },
    {
      icon: Heart,
      title: 'Custom Creations',
      description: 'Personalized designs tailored to your vision',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-[#E1CAFF]/20 to-[#C0C2FD]/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="product-placeholder h-[400px] md:h-[500px] rounded-3xl shadow-xl">
              <div className="flex flex-col items-center justify-center space-y-4 p-8">
                <Heart className="w-16 h-16 text-[#7662B2]" />
                <p className="text-center text-[#7662B2] font-semibold text-lg">
                  Behind the Scenes
                  <br />
                  <span className="text-sm font-normal">(Add bakery/team photos here)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-gradient mb-6">About Gooey Mooey</h2>
              <div className="space-y-4 text-lg text-[#2B243F]/80 leading-relaxed">
                <p>
                  At Gooey Mooey, every dessert is crafted with <span className="font-bold text-[#7662B2]">passion</span>,{' '}
                  <span className="font-bold text-[#7662B2]">precision</span> and{' '}
                  <span className="font-bold text-[#7662B2]">premium ingredients</span>.
                </p>
                <p>
                  We specialize in custom celebration cakes, gourmet desserts and gifting solutions that not only taste exceptional but look stunning too.
                </p>
                <p>
                  Whether it's a birthday, anniversary, festive celebration or corporate event —{' '}
                  <span className="font-bold italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Gooey Mooey makes every occasion sweeter
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Pillars */}
            <div className="space-y-6 pt-6">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-gradient-to-br from-[#E1CAFF] to-[#C0C2FD] p-3 rounded-full flex-shrink-0">
                    <pillar.icon className="w-6 h-6 text-[#7662B2]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#2B243F] mb-2">{pillar.title}</h3>
                    <p className="text-[#2B243F]/70">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;