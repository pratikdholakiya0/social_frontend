import React from 'react';

const Logo = ({ className = "", size = "md" }) => {
  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12"
  };

  return (
    <div className={`flex items-center ${className}`}>
      <svg
        className={`${sizes[size]} w-auto`}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="32" height="32" rx="8" fill="url(#gradient)" />
        
        {/* Letter B */}
        <path 
          d="M8 8H14.5C16.433 8 18 9.567 18 11.5C18 12.4047 17.6318 13.2334 17.0257 13.8395C18.2334 14.4456 19 15.6953 19 17C19 19.2091 17.2091 21 15 21H8V8Z" 
          fill="white"
        />
        <path 
          d="M11 11V13H14.5C15.3284 13 16 12.3284 16 11.5C16 10.6716 15.3284 10 14.5 10H11Z" 
          fill="url(#gradient)"
        />
        <path 
          d="M11 16V19H15C16.1046 19 17 18.1046 17 17C17 15.8954 16.1046 15 15 15H11Z" 
          fill="url(#gradient)"
        />
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="0"
            x2="32"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
      </svg>
      <span className={`ml-2 font-bold text-indigo-600 ${
        size === "sm" ? "text-xl" : size === "md" ? "text-2xl" : "text-3xl"
      }`}>
        Buzzly
      </span>
    </div>
  );
};

export default Logo; 