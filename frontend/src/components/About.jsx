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
    <section id="about" className="py-10 md:py-14 bg-gradient-to-br from-[#E1CAFF]/20 to-[#C0C2FD]/20">
      <div className="container-custom px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2B243F] mb-4">About Gooey Mooey</h2>
            <div className="space-y-3 text-base text-[#2B243F]/80 leading-relaxed">
              <p>
                At Gooey Mooey, every dessert is crafted with <span className="font-bold text-[#7662B2]">passion</span>,{' '}
                <span className="font-bold text-[#7662B2]">precision</span> and{' '}
                <span className="font-bold text-[#7662B2]">premium ingredients</span>.
              </p>
              <p>
                We specialize in custom celebration cakes, gourmet desserts and gifting solutions that not only taste exceptional but look stunning too.
              </p>
              <p>
                Whether it's a birthday, anniversary, festive celebration or corporate event — Gooey Mooey makes every occasion sweeter.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-4">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gradient-to-br from-[#E1CAFF] to-[#C0C2FD] p-3 rounded-full mb-3">
                  <pillar.icon className="w-5 h-5 text-[#7662B2]" />
                </div>
                <h3 className="text-base font-bold text-[#2B243F] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#2B243F]/70">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;