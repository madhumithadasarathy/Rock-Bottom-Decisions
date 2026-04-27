import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Doodle from '../components/Doodle';
import StickyNote from '../components/StickyNote';
import ScribbleUnderline from '../components/ScribbleUnderline';
import Sticker from '../components/Sticker';
import DuctTape from '../components/DuctTape';

const Home = ({ onStart }) => {
  // A massive list of doodles to make the page look "full"
  const doodles = useMemo(() => [
    // Existing ones
    { type: 'text', content: 'class is boring...', top: '15%', left: '2%', rotation: -12 },
    { type: 'cloud', content: '', top: '2%', right: '25%', rotation: 5 },
    { type: 'text', content: 'brain on vacation ☁️', top: '18%', right: '2%', rotation: 8 },
    { type: 'tictactoe', bottom: '8%', left: '12%', rotation: 15 },
    { type: 'text', content: 'future me will hate this', bottom: '2%', right: '20%', rotation: -5 },
    { type: 'arrow', top: '40%', left: '6%', rotation: 160 },
    { type: 'skull', bottom: '15%', left: '2%', rotation: -10 },
    { type: 'text', content: '← pick this one', top: '70%', right: '12%', rotation: 5 },
    { type: 'text', content: 'lol', top: '35%', right: '2%', rotation: 20 },
    
    // New ones
    { type: 'heart', top: '2%', left: '25%', rotation: 10, color: '#ff758c', opacity: 0.8 },
    { type: 'star', bottom: '25%', right: '2%', rotation: -15, color: '#ffd166', opacity: 0.9 },
    { type: 'coffee', top: '75%', left: '4%', rotation: 0, opacity: 0.3 },
    { type: 'text', content: 'why am I here?', top: '28%', left: '15%', rotation: -5, opacity: 0.5 },
    { type: 'text', content: 'DO NOT FORGET!', bottom: '2%', left: '30%', rotation: 2, color: '#d64545', opacity: 0.7 },
    { type: 'arrow', bottom: '5%', left: '45%', rotation: 270, scale: 0.8 },
    { type: 'text', content: 'ZZZzz...', top: '2%', right: '40%', rotation: -10, opacity: 0.4 },
    { type: 'text', content: 'Wait, what?', top: '55%', right: '10%', rotation: -25, opacity: 0.5 },
    { type: 'heart', top: '85%', left: '25%', rotation: -20, color: '#ffb3ba', opacity: 0.6 },
    { type: 'text', content: 'No mistakes, only doodles.', top: '38%', right: '25%', rotation: 3, opacity: 0.4 },
    { type: 'star', top: '10%', left: '45%', rotation: 45, color: '#9bf6ff', opacity: 0.5 },
  ], []);

  const stickers = useMemo(() => [
    { text: 'A+ Effort', emoji: '⭐', bgColor: '#ffadad', top: '4%', left: '8%', rotation: -15 },
    { text: 'Boring!', emoji: '🥱', bgColor: '#ffd166', top: '8%', right: '8%', rotation: 10 },
    { text: 'Winner', emoji: '🏆', bgColor: '#9bf6ff', bottom: '6%', left: '6%', rotation: 5 },
    { text: 'Chaos', emoji: '🌀', bgColor: '#caffbf', bottom: '12%', right: '4%', rotation: -8 },
    { emoji: '🍕', bgColor: '#bdb2ff', top: '55%', left: '4%', rotation: 12 },
    { text: 'RAD!', emoji: '🛹', bgColor: '#ffc6ff', bottom: '4%', right: '15%', rotation: -5 },
  ], []);

  const tapes = useMemo(() => [
    { top: '8%', left: '8%', rotation: -40, width: '80px' },
    { top: '12%', right: '18%', rotation: 30, width: '60px' },
    { bottom: '18%', left: '14%', rotation: 10, width: '100px' },
    { bottom: '22%', right: '12%', rotation: -20, width: '70px' },
    { top: '50%', left: '2%', rotation: 90, width: '50px' },
    { top: '30%', right: '2%', rotation: -85, width: '40px' },
  ], []);

  return (
    <div className="min-h-screen notebook-paper paper-texture flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Doodles */}
      {doodles.map((d, i) => (
        <Doodle key={`doodle-${i}`} {...d} />
      ))}

      {/* Tapes */}
      {tapes.map((t, i) => (
        <DuctTape key={`tape-${i}`} {...t} />
      ))}

      {/* Stickers */}
      {stickers.map((s, i) => (
        <Sticker key={`sticker-${i}`} {...s} />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl py-20">
        {/* Main Sticky Note with Tape */}
        <div className="absolute -top-32 -right-16 hidden lg:block z-30">
          <DuctTape top="-10px" left="40px" rotation={-5} width="80px" opacity={0.8} />
          <StickyNote rotation={6} color="#fff59d">
            <h3 className="text-2xl font-bold mb-2">Today's Plan:</h3>
            <ol className="text-xl space-y-1">
              <li>1. Overthink</li>
              <li>2. Overplay</li>
              <li>3. Regret 🙂</li>
            </ol>
            <p className="mt-4 text-sm text-pencil opacity-60 italic">"I should be studying."</p>
          </StickyNote>
        </div>

        {/* Another Sticky Note on the left */}
        <div className="absolute top-20 -left-48 hidden xl:block z-30">
          <DuctTape top="-5px" left="30px" rotation={10} width="60px" opacity={0.8} />
          <StickyNote rotation={-4} color="#ffcfd2">
            <p className="text-xl font-bold">⚠️ DANGER!</p>
            <p className="text-lg">Highly addictive bad decisions ahead.</p>
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
          
          {/* Scribble near title */}
          <div className="absolute -top-10 -left-10 opacity-30 rotate-[-15deg] hidden md:block">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path d="M10 10 Q 50 0 90 10 T 10 50 Q 50 60 90 50" fill="none" stroke="black" strokeWidth="2" />
            </svg>
          </div>
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
          <div className="text-sm font-scribble text-pencil opacity-40 mt-2">
            (definitely not a waste of time)
          </div>
        </motion.div>

        {/* Start Button Area */}
        <div className="relative inline-block">
          {/* Arrow pointing to button */}
          <div className="absolute -left-24 top-0 hidden md:block rotate-[-20deg]">
            <Doodle type="arrow" rotation={0} scale={1.5} />
            <p className="font-scribble text-sm mt-2">click this!</p>
          </div>

          <motion.button
            onClick={onStart}
            className="btn-sketch text-3xl md:text-4xl px-10 py-6 relative z-10"
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
          </motion.button>

          {/* Another doodle under button */}
          <div className="absolute -bottom-10 right-0 font-scribble text-red-mistake opacity-60 rotate-2 text-lg">
            no regrets allowed!
          </div>
        </div>

        {/* Bottom Scribbles Section */}
        <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all">
          <div className="font-hand text-2xl border-b-2 border-pencil pb-1 italic">
            "I'm actually working"
          </div>
          <div className="font-scribble text-xl">
            10 + 10 = <span className="line-through">21</span> 20
          </div>
          <div className="font-hand text-2xl rotate-2">
            Draft #42
          </div>
        </div>
      </div>

      {/* Corner "撕裂" (Tear) Effect Doodles */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
         <svg viewBox="0 0 100 100" fill="black">
            <path d="M100 0 L100 100 L0 0 Z" />
         </svg>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-40 font-scribble text-sm">
        * this notebook belongs to: <span className="font-bold underline decoration-wavy">The Ultimate Procrastinator</span> *
      </div>
    </div>
  );
};

export default Home;
