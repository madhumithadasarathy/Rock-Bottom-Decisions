import React from 'react';
import { motion } from 'framer-motion';

const Sticker = ({ 
  text, 
  emoji, 
  bgColor = '#ffadad', 
  top, 
  left, 
  right, 
  bottom, 
  rotation = 0,
  scale = 1
}) => {
  const style = {
    top,
    left,
    right,
    bottom,
    position: 'absolute',
    backgroundColor: bgColor,
    padding: '8px 12px',
    borderRadius: '12px',
    border: '4px solid white',
    boxShadow: '3px 3px 0px rgba(0,0,0,0.1)',
    zIndex: 20,
    transform: `rotate(${rotation}deg) scale(${scale})`,
    fontFamily: "'Gloria Hallelujah', cursive",
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
    width: 'fit-content',
    whiteSpace: 'nowrap'
  };

  return (
    <motion.div
      style={style}
      initial={{ scale: 0, opacity: 0, rotate: rotation - 45 }}
      animate={{ scale: scale, opacity: 1, rotate: rotation }}
      whileHover={{ scale: scale * 1.1, rotate: rotation + 5 }}
      whileTap={{ scale: scale * 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {emoji && <span className="text-xl">{emoji}</span>}
      {text && <span className="font-bold">{text}</span>}
    </motion.div>
  );
};

export default Sticker;
