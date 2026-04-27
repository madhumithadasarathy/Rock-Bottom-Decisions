import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Doodle from '../components/Doodle';
import StickyNote from '../components/StickyNote';
import ScribbleUnderline from '../components/ScribbleUnderline';

const Home = ({ onStart }) => {
  // Randomize some doodle positions on each load
  const randomDoodles = useMemo(() => [
    { type: 'text', content: 'class is boring...', top: '15%', left: '5%', rotation: -12 },
    { type: 'cloud', content: '', top: '8%', right: '12%', rotation: 5 },
    { type: 'text', content: 'brain on vacation ☁️', top: '14%', right: '8%', rotation: 8 },
    { type: 'tictactoe', top: '75%', left: '10%', rotation: 15 },
    { type: 'text', content: 'future me will hate this', bottom: '15%', right: '5%', rotation: -5 },
    { type: 'arrow', top: '45%', left: '12%', rotation: 160 },
    { type: 'skull', bottom: '25%', left: '8%', rotation: -10 },
    { type: 'text', content: '← pick this one', top: '65%', right: '20%', rotation: 5 },
    { type: 'text', content: 'lol', top: '40%', right: '5%', rotation: 20 },
  ], []);

  return (
    <div className="min-h-screen notebook-paper paper-texture flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Doodles */}
      {randomDoodles.map((d, i) => (
        <Doodle key={i} {...d} />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Sticky Note */}
        <div className="absolute -top-48 -right-12 hidden lg:block">
          <StickyNote rotation={6} color="#fff59d">
            <h3 className="text-2xl font-bold mb-2">Today's Plan:</h3>
            <ol className="text-xl space-y-1">
              <li>1. Overthink</li>
              <li>2. Overplay</li>
              <li>3. Regret 🙂</li>
            </ol>
          </StickyNote>
        </div>

        {/* Title */}
        <motion.div
          initial={{ y: -50, opacity: 0, rotate: -5 }}
          animate={{ y: 0, opacity: 1, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="relative mb-8"
        >
          <h1 className="text-7xl md:text-9xl font-bold font-scribble text-ink relative inline-block">
            Rock Bottom
            <br />
            <span className="relative">
              Decisions
              <ScribbleUnderline color="#d64545" />
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <p className="text-3xl md:text-4xl font-hand text-pencil">
            Rock. Paper.{' '}
            <span className="spellcheck-error">Life choices.</span>
          </p>
        </motion.div>

        {/* Start Button */}
        <motion.button
          onClick={onStart}
          className="btn-sketch text-3xl md:text-4xl px-10 py-6 relative"
          whileHover={{ 
            scale: 1.1, 
            rotate: 1,
            transition: { yoyo: Infinity, duration: 0.2 } 
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: 'spring' }}
        >
          ✏️ Start Making Bad Decisions
          
          {/* Small doodle on button */}
          <div className="absolute -bottom-8 -right-4 text-sm font-scribble text-pencil opacity-60 rotate-12">
            click here maybe? →
          </div>
        </motion.button>

        {/* Mobile Sticky Note (simpler) */}
        <div className="mt-12 lg:hidden">
          <StickyNote rotation={2} className="mx-auto">
            <p className="text-xl italic">"Winning is just losing later."</p>
          </StickyNote>
        </div>
      </div>

      {/* Random Scribbles at the bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-40 font-scribble text-sm">
        * this notebook belongs to: nobody important *
      </div>
    </div>
  );
};

export default Home;
