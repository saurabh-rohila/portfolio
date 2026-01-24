import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-4 md:py-6 bg-gradient-to-br from-[#E1CAFF]/20 to-[#C0C2FD]/20">
      <div className="container-custom px-3 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#2B243F] mb-3">About Gooey Mooey</h2>
            <div className="space-y-2 text-sm text-[#2B243F]/80 leading-relaxed">
              <p>
                At Gooey Mooey, every dessert is crafted with <span className="font-bold text-[#7662B2]">passion</span>,{' '}
                <span className="font-bold text-[#7662B2]">precision</span> and{' '}
                <span className="font-bold text-[#7662B2]">premium ingredients</span>.
              </p>
              <p>
                We specialize in custom celebration cakes, gourmet desserts and gifting solutions that not only taste exceptional but look stunning too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;