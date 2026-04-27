import { motion } from 'framer-motion'

const choiceEmojis = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️',
}

const choiceLabels = {
  rock: 'Rock',
  paper: 'Paper',
  scissors: 'Scissors',
}

const doodleAnnotations = {
  rock: 'solid choice',
  paper: 'classic move',
  scissors: 'snip snip',
}

export default function ChoiceCard({ choice, onClick, disabled, isSelected }) {
  return (
    <motion.button
      id={`choice-${choice}`}
      className={`
        relative doodle-card cursor-pointer select-none
        flex flex-col items-center justify-center
        w-28 h-36 sm:w-32 sm:h-40 md:w-36 md:h-44
        transition-colors duration-200
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${isSelected ? 'ring-3 ring-[var(--color-blue-win)]' : ''}
      `}
      style={{
        background: isSelected
          ? 'rgba(74, 144, 226, 0.08)'
          : 'var(--color-paper)',
      }}
      onClick={() => !disabled && onClick(choice)}
      whileHover={
        disabled
          ? {}
          : {
              rotate: [0, -3, 3, -1, 0],
              scale: 1.06,
              transition: { duration: 0.4 },
            }
      }
      whileTap={
        disabled
          ? {}
          : {
              scale: 0.9,
              rotate: 5,
              transition: { type: 'spring', stiffness: 400, damping: 10 },
            }
      }
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Emoji */}
      <span className="text-5xl sm:text-6xl md:text-7xl mb-2 leading-none">
        {choiceEmojis[choice]}
      </span>

      {/* Label */}
      <span
        className="text-lg sm:text-xl font-semibold"
        style={{ fontFamily: 'var(--font-hand)' }}
      >
        {choiceLabels[choice]}
      </span>

      {/* Tiny annotation */}
      <motion.span
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap"
        style={{
          fontFamily: 'var(--font-scribble)',
          fontSize: '0.65rem',
          color: 'var(--color-pencil-gray)',
          transform: 'translateX(-50%) rotate(-3deg)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.6 }}
      >
        ↑ {doodleAnnotations[choice]}
      </motion.span>
    </motion.button>
  )
}
