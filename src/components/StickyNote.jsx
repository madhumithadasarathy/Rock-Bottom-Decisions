import React from 'react';
import { motion } from 'framer-motion';

const StickyNote = ({ text, children, color = '#fff59d', rotation = -2, className = "" }) => {
  return (
    <motion.div
      className={`relative p-6 shadow-lg ${className}`}
      style={{
        backgroundColor: color,
        transform: `rotate(${rotation}deg)`,
        fontFamily: "'Patrick Hand', cursive",
        width: '300px',
        minHeight: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderBottomRightRadius: '40px 10px',
      }}
      initial={{ scale: 0, rotate: rotation - 10 }}
      animate={{ scale: 1, rotate: rotation }}
      whileHover={{ scale: 1.05, rotate: rotation + 1 }}
    >
      {/* Tape effect */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 rotate-1" />
      
      {text && <p className="text-xl leading-tight text-ink mb-2">{text}</p>}
      {children}
      
      {/* Shadow overlap */}
      <div className="absolute inset-0 pointer-events-none border border-black/5" />
    </motion.div>
  );
};

export default StickyNote;
