import React from 'react';

const DuctTape = ({ top, left, right, bottom, rotation = 0, width = '100px', height = '30px', opacity = 0.6 }) => {
  const style = {
    top,
    left,
    right,
    bottom,
    position: 'absolute',
    width,
    height,
    backgroundColor: '#ddd',
    backgroundImage: `
      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)
    `,
    backgroundSize: '4px 4px',
    opacity,
    transform: `rotate(${rotation}deg)`,
    zIndex: 15,
    boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
  };

  return <div style={style} className="pointer-events-none" />;
};

export default DuctTape;
