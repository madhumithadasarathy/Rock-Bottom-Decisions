import { motion } from 'framer-motion'

const doodles = [
  { text: '← this is art', x: '8%', y: '18%', rotate: -8, size: '1rem' },
  { text: '★★★', x: '85%', y: '12%', rotate: 5, size: '1.2rem' },
  { text: 'zzz...', x: '90%', y: '75%', rotate: -3, size: '0.95rem' },
  { text: '(╯°□°)╯', x: '5%', y: '78%', rotate: 4, size: '0.9rem' },
  { text: '♪ ♫ ♬', x: '82%', y: '45%', rotate: -6, size: '1.1rem' },
  { text: '→ boring', x: '10%', y: '52%', rotate: 12, size: '0.85rem' },
  { text: '~*~*~', x: '75%', y: '88%', rotate: -2, size: '1rem' },
  { text: 'lol', x: '88%', y: '30%', rotate: 8, size: '1.3rem' },
]

const spiralPath = "M 10 80 Q 52.5 10, 95 80 T 180 80"

export default function Landing({ onStart }) {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
    >
      {/* Notebook margin line */}
      <div className="notebook-margin absolute inset-0 pointer-events-none" />
      <div className="notebook-holes absolute inset-0 pointer-events-none" />

      {/* Scattered doodles */}
      {doodles.map((doodle, i) => (
        <motion.span
          key={i}
          className="absolute pointer-events-none select-none hidden md:block"
          style={{
            left: doodle.x,
            top: doodle.y,
            transform: `rotate(${doodle.rotate}deg)`,
            fontSize: doodle.size,
            fontFamily: 'var(--font-scribble)',
            color: 'var(--color-pencil-gray)',
            opacity: 0.5,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }}
        >
          {doodle.text}
        </motion.span>
      ))}

      {/* Title area */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Spiral doodle above title */}
        <motion.svg
          width="180"
          height="90"
          viewBox="0 0 180 90"
          className="mb-2 opacity-30"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.path
            d={spiralPath}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* Arrow pointing to title */}
        <motion.div
          className="absolute -left-16 top-20 hidden lg:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.4, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{ fontFamily: 'var(--font-scribble)', color: 'var(--color-pencil-gray)' }}
        >
          <span className="text-sm">epic title →</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
          style={{ fontFamily: 'var(--font-hand)' }}
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="block">Rock Bottom</span>
          <motion.span
            className="block highlight-yellow"
            initial={{ backgroundSize: '0% 100%' }}
            animate={{ backgroundSize: '100% 100%' }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Decisions
          </motion.span>
        </motion.h1>

        {/* Underline scribble */}
        <motion.div
          className="w-64 h-1 mt-2 rounded-full"
          style={{ background: 'var(--color-ink)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.3 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />

        {/* Tagline */}
        <motion.p
          className="mt-6 text-xl sm:text-2xl md:text-3xl"
          style={{
            fontFamily: 'var(--font-sketch)',
            color: 'var(--color-ink-light)',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Rock. Paper.{' '}
          <span
            className="doodle-underline"
            style={{ color: 'var(--color-blue-win)' }}
          >
            Life choices.
          </span>
        </motion.p>

        {/* Small doodle annotations */}
        <motion.div
          className="mt-2 text-sm"
          style={{ fontFamily: 'var(--font-scribble)', color: 'var(--color-pencil-gray)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1 }}
        >
          <span className="scribble-strike">important life skills</span> &nbsp;a game
        </motion.div>

        {/* CTA Button */}
        <motion.button
          id="start-game-btn"
          className="sketch-btn mt-10 text-lg sm:text-xl md:text-2xl"
          onClick={onStart}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          whileHover={{
            rotate: [-1, 1, -1],
            transition: { duration: 0.3, repeat: Infinity },
          }}
          whileTap={{ scale: 0.95 }}
        >
          ✏️ Start Making Bad Decisions
        </motion.button>

        {/* Bottom scribble */}
        <motion.p
          className="mt-8 text-xs sm:text-sm"
          style={{
            fontFamily: 'var(--font-scribble)',
            color: 'var(--color-pencil-gray)',
            transform: 'rotate(2deg)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5 }}
        >
          * no refunds on bad decisions *
        </motion.p>

        {/* Tiny corner doodles */}
        <motion.div
          className="absolute -right-12 bottom-4 hidden lg:block"
          style={{
            fontFamily: 'var(--font-scribble)',
            color: 'var(--color-pencil-gray)',
            fontSize: '0.75rem',
            transform: 'rotate(6deg)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.8 }}
        >
          pg. 1 of ???
        </motion.div>
      </div>
    </motion.div>
  )
}
