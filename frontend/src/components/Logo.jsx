import React from 'react';

const Logo = ({ className = "w-24 h-auto" }) => {
  return (
    <img 
      src="https://customer-assets.emergentagent.com/job_23e71ef4-908c-4c8d-b75d-56e2ceb96e90/artifacts/umfa0xwp_logo.svg"
      alt="Gooey Mooey - Love at First Bite"
      className={className}
    />
  );
};

export default Logo;