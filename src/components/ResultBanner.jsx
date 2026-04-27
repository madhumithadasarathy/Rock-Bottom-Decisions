import { motion, AnimatePresence } from 'framer-motion'

const resultStyles = {
  win: {
    color: 'var(--color-blue-win)',
    bg: 'rgba(74, 144, 226, 0.1)',
    border: 'var(--color-blue-win)',
    icon: '🎉',
  },
  lose: {
    color: 'var(--color-red-mistake)',
    bg: 'rgba(214, 69, 69, 0.1)',
    border: 'var(--color-red-mistake)',
    icon: '💀',
  },
  draw: {
    color: 'var(--color-yellow-highlight)',
    bg: 'rgba(255, 209, 102, 0.15)',
    border: 'var(--color-yellow-highlight)',
    icon: '🤝',
  },
}

const resultMessages = {
  win: "Somehow, that worked.",
  lose: "Rock bottom decision detected.",
  draw: "Great minds make questionable choices.",
}

const subMessages = {
  win: [
    "don't let it go to your head",
    "even a broken clock...",
    "your parents would be... surprised",
  ],
  lose: [
    "we've all been there",
    "try thinking next time?",
    "the computer isn't even trying",
  ],
  draw: [
    "awkward...",
    "the universe said: nah",
    "perfectly balanced, as nothing should be",
  ],
}

export default function ResultBanner({ result, playerChoice, computerChoice }) {
  if (!result) return null

  const style = resultStyles[result]
  const message = resultMessages[result]
  const subs = subMessages[result]
  const subMessage = subs[Math.floor(Math.random() * subs.length)]

  const choiceEmojis = { rock: '✊', paper: '✋', scissors: '✌️' }

  return (
    <AnimatePresence>
      <motion.div
        id="result-banner"
        className="w-full max-w-md mx-auto mt-6 p-5 relative overflow-hidden hand-drawn-box"
        style={{
          background: style.bg,
          borderColor: style.border,
        }}
        initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Icon */}
        <motion.div
          className="text-center text-4xl mb-2"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.3, 1] }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {style.icon}
        </motion.div>

        {/* Match summary */}
        <motion.div
          className="text-center text-xl mb-2 font-sketch"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <span>{choiceEmojis[playerChoice]}</span>
          <span className="mx-3 text-pencil opacity-40">vs</span>
          <span>{choiceEmojis[computerChoice]}</span>
        </motion.div>

        {/* Result text */}
        <motion.h2
          className="text-center text-2xl sm:text-3xl font-bold font-hand"
          style={{
            color: style.color,
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {result === 'win' && '🏆 '}
          {message}
          {result === 'lose' && ' 📉'}
        </motion.h2>

        {/* Sub message */}
        <motion.p
          className="text-center mt-2 text-sm font-scribble text-pencil opacity-60"
          style={{
            transform: 'rotate(-1deg)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.6 }}
        >
          ({subMessage})
        </motion.p>

        {/* Decorative corner scribble */}
        <motion.span
          className="absolute top-1 right-3 text-xs"
          style={{
            fontFamily: 'var(--font-scribble)',
            color: 'var(--color-pencil-gray)',
            opacity: 0.4,
            transform: 'rotate(3deg)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.8 }}
        >
          ✎ noted
        </motion.span>
      </motion.div>
    </AnimatePresence>
  )
}
