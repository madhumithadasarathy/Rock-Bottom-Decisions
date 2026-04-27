import React, { useMemo } from 'react';
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
  )
};

const Doodle = ({ type = 'text', content, top, left, right, bottom, rotation, animate = true }) => {
  const Component = doodleTypes[type] || doodleTypes.text;
  
  const style = {
    top,
    left,
    right,
    bottom,
    position: 'absolute',
    fontFamily: "'Gloria Hallelujah', cursive",
    color: '#4a4a4a',
    opacity: 0.6,
    zIndex: 5,
    pointerEvents: 'none',
  };

  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, rotate: rotation - 20 }}
      animate={animate ? { 
        opacity: 0.6, 
        rotate: rotation,
        y: [0, -10, 0]
      } : { 
        opacity: 0.6, 
        rotate: rotation 
      }}
      transition={animate ? {
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 1 },
        rotate: { duration: 1 }
      } : {}}
    >
      <Component content={content} />
    </motion.div>
  );
};

export default Doodle;
