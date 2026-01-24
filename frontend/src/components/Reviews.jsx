import React from 'react';
import { Star, Heart, Instagram as InstagramIcon } from 'lucide-react';
import { instagramPosts } from '../data/mock';

const Reviews = () => {
  return (
    <section id="reviews" className="py-10 md:py-14 bg-white">
      <div className="container-custom px-4 md:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-[#FF859F]/20 px-3 py-1.5 rounded-full mb-3">
            <Heart className="w-4 h-4 text-[#FF859F] fill-[#FF859F]" />
            <span className="text-xs font-semibold text-[#2B243F]">Customer Love</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2B243F] mb-3">Why Customers Love Gooey Mooey</h2>
          <p className="text-base text-[#2B243F]/70 max-w-2xl mx-auto">
            Real reviews from our amazing customers on Instagram
          </p>
        </div>

        {/* Instagram Posts Grid - Smaller */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden hover:scale-105"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-[#E1CAFF] to-[#C0C2FD]">
                <img
                  src={post.imageUrl}
                  alt={`Customer review ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Instagram icon overlay */}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full">
                  <InstagramIcon className="w-3 h-3 text-[#E1306C]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                {/* Rating */}
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#FF859F] fill-[#FF859F]" />
                  ))}
                </div>

                {/* Caption - 2 lines only */}
                <p className="text-[#2B243F]/80 mb-2 text-xs line-clamp-2">{post.caption}</p>

                {/* Author */}
                <div className="text-xs">
                  <span className="font-semibold text-[#2B243F]">{post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;