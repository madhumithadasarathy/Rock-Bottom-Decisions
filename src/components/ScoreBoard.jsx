import { motion } from 'framer-motion'

export default function ScoreBoard({ scores }) {
  const items = [
    {
      label: 'You',
      value: scores.player,
      color: 'var(--color-blue-win)',
      annotation: 'hero',
    },
    {
      label: 'Draws',
      value: scores.draws,
      color: 'var(--color-yellow-highlight)',
      annotation: 'meh',
    },
    {
      label: 'CPU',
      value: scores.computer,
      color: 'var(--color-red-mistake)',
      annotation: 'villain',
    },
  ]

  return (
    <motion.div
      id="scoreboard"
      className="flex items-center justify-center gap-4 sm:gap-8 py-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {items.map((item, i) => (
        <div key={item.label} className="flex flex-col items-center relative">
          {/* Annotation */}
          <span
            className="text-[0.6rem] mb-1"
            style={{
              fontFamily: 'var(--font-scribble)',
              color: 'var(--color-pencil-gray)',
              opacity: 0.5,
              transform: `rotate(${i % 2 === 0 ? -3 : 3}deg)`,
            }}
          >
            ↓ {item.annotation}
          </span>

          {/* Score box */}
          <div
            className="hand-drawn-box flex flex-col items-center justify-center w-20 h-24 sm:w-24 sm:h-28"
            style={{
              borderColor: item.color,
            }}
          >
            <motion.span
              className="text-3xl sm:text-4xl font-bold leading-none font-hand"
              style={{
                color: item.color,
              }}
              key={item.value}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 15,
              }}
            >
              {item.value}
            </motion.span>

            <span
              className="text-sm mt-1 font-sketch text-ink-light"
            >
              {item.label}
            </span>
          </div>

          {/* Separator dashes */}
          {i < items.length - 1 && (
            <span
              className="absolute -right-3 sm:-right-5 top-1/2 text-lg"
              style={{ color: 'var(--color-pencil-gray)', opacity: 0.4 }}
            >
              ·
            </span>
          )}
        </div>
      ))}
    </motion.div>
  )
}
