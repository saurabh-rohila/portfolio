import React from 'react';

const Logo = ({ className = "w-24 h-24" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dessert dome arch */}
      <path
        d="M20 70 Q20 30 60 30 Q100 30 100 70 L100 100 Q100 110 90 110 L30 110 Q20 110 20 100 Z"
        fill="url(#gradient)"
        stroke="#7662B2"
        strokeWidth="2"
      />
      
      {/* Left heart */}
      <path
        d="M35 60 C35 55 40 52 43 55 C46 52 51 55 51 60 C51 65 43 72 43 72 C43 72 35 65 35 60 Z"
        fill="#FF859F"
      />
      
      {/* Right heart */}
      <path
        d="M69 60 C69 55 74 52 77 55 C80 52 85 55 85 60 C85 65 77 72 77 72 C77 72 69 65 69 60 Z"
        fill="#FFB8CB"
      />
      
      {/* Brand name */}
      <text
        x="60"
        y="130"
        fontFamily="Playfair Display, serif"
        fontSize="16"
        fontWeight="bold"
        fill="#2B243F"
        textAnchor="middle"
      >
        Gooey Mooey
      </text>
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E1CAFF" />
          <stop offset="50%" stopColor="#C0C2FD" />
          <stop offset="100%" stopColor="#FFB8CB" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;