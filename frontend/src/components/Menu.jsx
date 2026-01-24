import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { MessageCircle } from 'lucide-react';

const Menu = () => {
  const menuData = [
    {
      category: 'Cakes',
      items: [
        { name: 'Classic Chocolate Truffle', price: 'Starting ₹899' },
        { name: 'Red Velvet Cream Cheese', price: 'Starting ₹999' },
        { name: 'Butterscotch Crunch', price: 'Starting ₹849' },
        { name: 'Fresh Fruit Cream', price: 'Starting ₹899' },
      ],
    },
    {
      category: 'Bento Cakes',
      items: [
        { name: 'Chocolate Fudge', price: null },
        { name: 'Vanilla Berry', price: null },
        { name: 'Red Velvet', price: null },
        { name: 'Coffee Caramel', price: null },
      ],
      categoryPrice: 'Starting ₹499',
    },
    {
      category: 'Cupcakes',
      items: [
        { name: 'Chocolate Overload', price: null },
        { name: 'Red Velvet', price: null },
        { name: 'Vanilla Sprinkle', price: null },
        { name: 'Nutella Filled', price: null },
      ],
      categoryPrice: 'Starting ₹129',
    },
    {
      category: 'Cookies',
      items: [
        { name: 'Chocolate Chip', price: null },
        { name: 'Royal Icing Theme Cookies', price: null },
        { name: 'Oatmeal Almond', price: null },
        { name: 'Double Chocolate', price: null },
      ],
      categoryPrice: 'Starting ₹299',
    },
    {
      category: 'Brownies',
      items: [
        { name: 'Fudgy Chocolate', price: null },
        { name: 'Walnut', price: null },
        { name: 'Lotus Biscoff', price: null },
        { name: 'Nutella Bars', price: null },
      ],
      categoryPrice: 'Starting ₹349',
    },
    {
      category: 'Cheesecake Jars',
      items: [
        { name: 'Blueberry', price: null },
        { name: 'Lotus Biscoff', price: null },
        { name: 'Oreo', price: null },
        { name: 'Tiramisu', price: null },
      ],
      categoryPrice: 'Starting ₹249',
    },
  ];

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-4">Our Delicious Menu</h2>
          <p className="text-lg text-[#2B243F]/70 max-w-2xl mx-auto">
            Explore our wide range of handcrafted desserts. Flavours, designs and packaging can be customized.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {menuData.map((section, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-r from-[#E1CAFF]/20 to-[#C0C2FD]/20 rounded-xl border border-[#E1CAFF] overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/50 transition-colors">
                  <div className="flex items-center justify-between w-full pr-4">
                    <span className="text-xl font-bold text-[#2B243F]" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {section.category}
                    </span>
                    {section.categoryPrice && (
                      <span className="text-sm font-semibold text-[#7662B2]">{section.categoryPrice}</span>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-[#E1CAFF]/50 last:border-0">
                        <span className="text-[#2B243F] font-medium">{item.name}</span>
                        {item.price && <span className="text-[#7662B2] font-semibold">{item.price}</span>}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 space-y-6">
            <div className="bg-gradient-to-r from-[#FFB8CB]/20 to-[#FF859F]/20 rounded-2xl p-6 border-2 border-dashed border-[#FF859F]">
              <p className="text-[#2B243F] font-semibold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Note: Flavours, designs and packaging can be customized.
              </p>
              <p className="text-[#2B243F]/70">Tell us your vision and we'll bring it to life!</p>
            </div>

            <a
              href="https://wa.me/919266987600"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Request Full Menu on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;