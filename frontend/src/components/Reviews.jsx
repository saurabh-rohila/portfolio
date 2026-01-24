import React from 'react';
import { Star, Heart, Instagram as InstagramIcon } from 'lucide-react';
import { instagramPosts } from '../data/mock';

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#FF859F]/20 px-4 py-2 rounded-full mb-4">
            <Heart className="w-5 h-5 text-[#FF859F] fill-[#FF859F]" />
            <span className="text-sm font-semibold text-[#2B243F]">Customer Love</span>
          </div>
          <h2 className="text-gradient mb-4">Why Customers Love Gooey Mooey</h2>
          <p className="text-lg text-[#2B243F]/70 max-w-2xl mx-auto">
            Real reviews from our amazing customers on Instagram
          </p>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-[#E1CAFF] to-[#C0C2FD]">
                <img
                  src={post.imageUrl}
                  alt={`Customer review ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Instagram icon overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <InstagramIcon className="w-5 h-5 text-[#E1306C]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FF859F] fill-[#FF859F]" />
                  ))}
                </div>

                {/* Caption */}
                <p className="text-[#2B243F]/80 mb-4 line-clamp-3">{post.caption}</p>

                {/* Author & Meta */}
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-[#2B243F]">{post.author}</span>
                  <span className="text-[#7662B2]">{post.date}</span>
                </div>

                {/* Likes */}
                <div className="flex items-center space-x-1 mt-3 text-[#FF859F]">
                  <Heart className="w-4 h-4 fill-[#FF859F]" />
                  <span className="text-sm font-medium">{post.likes} likes</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#E1CAFF]/30 to-[#C0C2FD]/30 rounded-3xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#2B243F] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Join Our Happy Customers
          </h3>
          <p className="text-lg text-[#2B243F]/70 mb-8 max-w-2xl mx-auto">
            Experience the Gooey Mooey difference - where every dessert tells a story of passion, quality, and love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919266987600"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Order Your Celebration Cake
            </a>
            <a
              href="https://www.instagram.com/gooeymooey.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center space-x-2"
            >
              <InstagramIcon className="w-5 h-5" />
              <span>Follow Us on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;