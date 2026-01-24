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
      <section className="pt-28 pb-6 md:pt-32 md:pb-8 bg-gradient-to-br from-[#E1CAFF]/30 to-[#C0C2FD]/20">
        <div className="container-custom px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B243F] mb-2">
            Explore Our Menu
          </h1>
          <p className="text-base md:text-lg text-[#2B243F]/70 mb-4 max-w-2xl mx-auto">
            Custom flavours, designs & packaging available.
          </p>
          <a
            href="https://wa.me/919266987600"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-5 py-2.5 rounded-full font-bold transition-all duration-300 hover:bg-[#1da851] hover:shadow-lg hover:scale-105 active:scale-95 inline-flex items-center space-x-2 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
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
              <div className="bg-gradient-to-r from-[#E1CAFF]/30 to-[#C0C2FD]/30 rounded-xl p-5 border-2 border-dashed border-[#7662B2]">
                <p className="text-[#7662B2] font-semibold text-base mb-1">
                  Note: Flavours, designs and packaging can be customized.
                </p>
                <p className="text-[#7662B2]/70 text-sm">Tell us your vision and we'll bring it to life!</p>
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