import React from 'react';

const ScribbleUnderline = ({ color = '#1e1e1e' }) => {
  return (
    <svg 
      className="absolute -bottom-2 left-0 w-full h-4 overflow-visible"
      viewBox="0 0 100 10" 
      preserveAspectRatio="none"
    >
      <path
        d="M 0 5 Q 25 0 50 5 T 100 5"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        style={{
          strokeDasharray: '200',
          strokeDashoffset: '0',
          opacity: 0.8
        }}
      />
      <path
        d="M 5 8 Q 30 3 55 8 T 95 8"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          strokeDasharray: '200',
          strokeDashoffset: '0',
          opacity: 0.5
        }}
      />
    </svg>
  );
};

export default ScribbleUnderline;
