import React from 'react';

const Logo = ({ className = "w-24 h-24" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Elegant arch outline (dome shape) */}
      <path
        d="M40 120 L40 80 Q40 40 100 40 Q160 40 160 80 L160 120"
        stroke="#7662B2"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Wavy dessert base with gradient */}
      <path
        d="M45 120 Q60 115 75 120 T105 120 T135 120 T155 120 L155 95 Q140 100 125 95 T95 95 T65 95 T45 95 Z"
        fill="url(#dessertGradient)"
      />
      
      {/* Two overlapping pink hearts */}
      <g>
        {/* Left heart */}
        <path
          d="M85 100 C85 96 88 93 91 93 C94 93 97 96 97 100 C97 104 91 109 91 109 C91 109 85 104 85 100 Z"
          fill="#FFB8CB"
        />
        
        {/* Right heart - slightly overlapping */}
        <path
          d="M100 100 C100 96 103 93 106 93 C109 93 112 96 112 100 C112 104 106 109 106 109 C106 109 100 104 100 100 Z"
          fill="#FF859F"
        />
      </g>
      
      {/* Top decorative line */}
      <line x1="60" y1="140" x2="140" y2="140" stroke="#2B243F" strokeWidth="1" />
      
      {/* Brand name - GOOEY MOOEY */}
      <text
        x="100"
        y="160"
        fontFamily="Montserrat, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill="#2B243F"
        textAnchor="middle"
        letterSpacing="1"
      >
        GOOEY MOOEY
      </text>
      
      {/* Bottom decorative line */}
      <line x1="60" y1="168" x2="140" y2="168" stroke="#2B243F" strokeWidth="1" />
      
      {/* Tagline - LOVE AT FIRST BITE */}
      <text
        x="100"
        y="182"
        fontFamily="Montserrat, sans-serif"
        fontSize="8"
        fontWeight="400"
        fill="#2B243F"
        textAnchor="middle"
        letterSpacing="2"
      >
        LOVE AT FIRST BITE
      </text>
      
      {/* Gradient definition for dessert filling */}
      <defs>
        <linearGradient id="dessertGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#C0C2FD" />
          <stop offset="50%" stopColor="#D5C9FF" />
          <stop offset="100%" stopColor="#E1CAFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;