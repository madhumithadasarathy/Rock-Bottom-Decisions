import React from 'react';
import { motion } from 'framer-motion';

const doodleTypes = {
  text: ({ content }) => <span className="whitespace-nowrap">{content}</span>,
  arrow: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 35 L35 5 M35 5 L20 5 M35 5 L35 20" />
    </svg>
  ),
  skull: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 0-7 7c0 3 2 5 2 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2s2-2 2-8a7 7 0 0 0-7-7z" />
      <path d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      <path d="M12 15v2" />
    </svg>
  ),
  cloud: () => (
    <svg width="40" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2-1.5-3.5-3.5-4-.5-3.5-3.5-6.5-7-6.5-3 0-5.5 2-6.5 4.5-2.5.5-4.5 2.5-4.5 5s2 4.5 4.5 4.5h12.5z" />
    </svg>
  ),
  tictactoe: () => (
    <svg width="50" height="50" viewBox="0 0 50 50" stroke="currentColor" strokeWidth="1.5">
      <line x1="16" y1="5" x2="16" y2="45" />
      <line x1="34" y1="5" x2="34" y2="45" />
      <line x1="5" y1="16" x2="45" y2="16" />
      <line x1="5" y1="34" x2="45" y2="34" />
      <circle cx="25" cy="25" r="5" fill="none" />
      <path d="M8 8 L13 13 M13 8 L8 13" />
    </svg>
  ),
  heart: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  star: () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  coffee: () => (
    <svg width="40" height="40" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="2" fill="none">
      <circle cx="50" cy="50" r="30" strokeOpacity="0.3" />
      <circle cx="52" cy="48" r="28" strokeOpacity="0.2" />
      <path d="M70 30 Q 85 40 75 60" strokeOpacity="0.3" />
    </svg>
  )
};

const Doodle = ({ type = 'text', content, top, left, right, bottom, rotation, animate = true, opacity = 0.6, scale = 1, color = '#4a4a4a' }) => {
  const Component = doodleTypes[type] || doodleTypes.text;
  
  const style = {
    top,
    left,
    right,
    bottom,
    position: 'absolute',
    fontFamily: "'Gloria Hallelujah', cursive",
    color: color,
    opacity: opacity,
    zIndex: 5,
    pointerEvents: 'none',
    scale: scale
  };

  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, rotate: rotation - 20, scale: 0 }}
      animate={animate ? { 
        opacity: opacity, 
        rotate: rotation,
        scale: scale,
        y: [0, -10, 0]
      } : { 
        opacity: opacity, 
        rotate: rotation,
        scale: scale
      }}
      transition={animate ? {
        y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 1 },
        rotate: { duration: 1 },
        scale: { duration: 0.5 }
      } : {}}
    >
      <Component content={content} />
    </motion.div>
  );
};

export default Doodle;
