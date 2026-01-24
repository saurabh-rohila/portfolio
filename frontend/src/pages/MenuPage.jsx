import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { MessageCircle } from 'lucide-react';

const MenuPage = () => {
  const menuData = [
    {
      category: 'Cakes',
      items: [
        { name: 'Chocolate Truffle', price: '₹899+' },
        { name: 'Red Velvet Cream Cheese', price: '₹999+' },
        { name: 'Butterscotch Crunch', price: '₹849+' },
        { name: 'Fresh Fruit Cream', price: '₹899+' },
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
      categoryPrice: '₹499+',
    },
    {
      category: 'Cupcakes',
      items: [
        { name: 'Chocolate Overload', price: null },
        { name: 'Red Velvet', price: null },
        { name: 'Vanilla Sprinkle', price: null },
        { name: 'Nutella Filled', price: null },
      ],
      categoryPrice: '₹129+',
    },
    {
      category: 'Cookies',
      items: [
        { name: 'Chocolate Chip', price: null },
        { name: 'Royal Icing Theme Cookies', price: null },
        { name: 'Oatmeal Almond', price: null },
        { name: 'Double Chocolate', price: null },
      ],
      categoryPrice: '₹299+',
    },
    {
      category: 'Brownies',
      items: [
        { name: 'Fudgy Chocolate', price: null },
        { name: 'Walnut', price: null },
        { name: 'Lotus Biscoff', price: null },
        { name: 'Nutella Bars', price: null },
      ],
      categoryPrice: '₹349+',
    },
    {
      category: 'Cheesecake Jars',
      items: [
        { name: 'Blueberry', price: null },
        { name: 'Lotus Biscoff', price: null },
        { name: 'Oreo', price: null },
        { name: 'Tiramisu', price: null },
      ],
      categoryPrice: '₹249+',
    },
  ];

  return (
    <div className="bg-[#f7f5f2] min-h-screen">
      {/* Top Banner */}
      <section className="pt-32 pb-10 md:pt-36 md:pb-12 bg-gradient-to-br from-[#E1CAFF]/30 to-[#C0C2FD]/20">
        <div className="container-custom px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B243F] mb-3">
            Explore Our Menu
          </h1>
          <p className="text-base md:text-lg text-[#2B243F]/70 mb-6 max-w-2xl mx-auto">
            Custom flavours, designs & packaging available.
          </p>
          <a
            href="https://wa.me/919266987600"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {menuData.map((section, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gradient-to-r from-[#E1CAFF]/20 to-[#C0C2FD]/20 rounded-xl border border-[#E1CAFF] overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-white/50 transition-colors">
                    <div className="flex items-center justify-between w-full pr-4">
                      <span className="text-xl font-bold text-[#2B243F]">
                        {section.category}
                      </span>
                      {section.categoryPrice && (
                        <span className="text-sm font-semibold text-[#7662B2]">{section.categoryPrice}</span>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-3 pt-2">
                    <div className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-[#E1CAFF]/50 last:border-0">
                          <span className="text-[#2B243F] font-medium text-sm">{item.name}</span>
                          {item.price && <span className="text-[#7662B2] font-semibold text-sm">{item.price}</span>}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8 space-y-5">
              <div className="bg-gradient-to-r from-[#FFB8CB]/20 to-[#FF859F]/20 rounded-xl p-6 border-2 border-dashed border-[#FF859F]">
                <p className="text-[#2B243F] font-semibold text-lg mb-2">
                  Note: Flavours, designs and packaging can be customized.
                </p>
                <p className="text-[#2B243F]/70 text-sm">Tell us your vision and we'll bring it to life!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Order Strip - Sticky on scroll */}
      <section className="sticky bottom-0 bg-gradient-to-r from-[#7662B2] to-[#FF859F] py-3 shadow-lg z-40 hidden md:block">
        <div className="container-custom px-4 md:px-6">
          <div className="flex items-center justify-between">
            <p className="text-white font-semibold text-base">
              Not sure what to choose? Chat with us & we'll suggest the perfect dessert.
            </p>
            <a
              href="https://wa.me/919266987600"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#7662B2] px-5 py-2.5 rounded-full font-semibold hover:bg-[#E1CAFF] transition-all duration-300 flex items-center space-x-2 flex-shrink-0 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Recommendation on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;