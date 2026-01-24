import React from 'react';
import { Star, Heart } from 'lucide-react';
import { instagramPosts } from '../data/mock';

const Reviews = () => {
  return (
    <section id="reviews" className="py-5 md:py-7 bg-white">
      <div className="container-custom px-3 md:px-6">
        <div className="text-center mb-4">
          <div className="inline-flex items-center space-x-2 bg-[#FF859F]/20 px-2.5 py-1 rounded-full mb-2">
            <Heart className="w-3.5 h-3.5 text-[#FF859F] fill-[#FF859F]" />
            <span className="text-xs font-semibold text-[#2B243F]">Customer Love</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-[#2B243F] mb-2">Why Customers Love Gooey Mooey</h2>
          <p className="text-sm text-[#2B243F]/70 max-w-2xl mx-auto">
            Real reviews from our amazing customers on Instagram
          </p>
        </div>

        {/* Instagram Posts Grid - Simple format */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gradient-to-br from-[#E1CAFF]/20 to-[#C0C2FD]/20 rounded-lg p-2.5 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex mb-1.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-[#FF859F] fill-[#FF859F]" />
                ))}
              </div>

              {/* Caption - 2 lines only */}
              <p className="text-[#2B243F]/80 mb-1.5 text-xs line-clamp-2 text-center">{post.caption}</p>

              {/* Author */}
              <div className="text-center">
                <span className="font-semibold text-[#2B243F] text-xs">{post.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;