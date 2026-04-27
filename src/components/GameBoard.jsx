import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ChoiceCard from './ChoiceCard'
import ScoreBoard from './ScoreBoard'
import ResultBanner from './ResultBanner'

const choices = ['rock', 'paper', 'scissors']

const choiceEmojis = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️',
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)]
}

function determineWinner(player, computer) {
  if (player === computer) return 'draw'
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'win'
  }
  return 'lose'
}

const marginDoodles = [
  { text: 'think carefully...', top: '15%', rotate: -6 },
  { text: '← choose wisely', top: '40%', rotate: 4 },
  { text: 'no pressure :)', top: '70%', rotate: -3 },
]

export default function GameBoard({ onBack }) {
  const [scores, setScores] = useState({ player: 0, computer: 0, draws: 0 })
  const [playerChoice, setPlayerChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const [isRevealing, setIsRevealing] = useState(false)
  const [roundKey, setRoundKey] = useState(0)

  const handleChoice = useCallback(
    (choice) => {
      if (isRevealing) return

      setIsRevealing(true)
      setPlayerChoice(choice)
      setResult(null)
      setComputerChoice(null)

      // Simulate "thinking" delay for dramatic reveal
      setTimeout(() => {
        const cpuChoice = getComputerChoice()
        setComputerChoice(cpuChoice)

        const gameResult = determineWinner(choice, cpuChoice)
        setResult(gameResult)

        setScores((prev) => ({
          player: prev.player + (gameResult === 'win' ? 1 : 0),
          computer: prev.computer + (gameResult === 'lose' ? 1 : 0),
          draws: prev.draws + (gameResult === 'draw' ? 1 : 0),
        }))

        setIsRevealing(false)
        setRoundKey((prev) => prev + 1)
      }, 800)
    },
    [isRevealing]
  )

  const handleReset = () => {
    setScores({ player: 0, computer: 0, draws: 0 })
    setPlayerChoice(null)
    setComputerChoice(null)
    setResult(null)
    setRoundKey(0)
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center relative px-4 py-6 sm:py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
    >
      {/* Notebook decorations */}
      <div className="notebook-margin absolute inset-0 pointer-events-none" />
      <div className="notebook-holes absolute inset-0 pointer-events-none" />

      {/* Margin doodles (desktop only) */}
      {marginDoodles.map((d, i) => (
        <span
          key={i}
          className="absolute left-2 hidden lg:block"
          style={{
            top: d.top,
            fontFamily: 'var(--font-scribble)',
            fontSize: '0.7rem',
            color: 'var(--color-pencil-gray)',
            opacity: 0.4,
            transform: `rotate(${d.rotate}deg)`,
          }}
        >
          {d.text}
        </span>
      ))}

      {/* Header */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="flex items-center justify-between mb-2">
          <motion.button
            id="back-btn"
            className="sketch-btn text-sm px-4 py-2"
            onClick={onBack}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back
          </motion.button>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
            style={{ fontFamily: 'var(--font-hand)' }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Rock Bottom{' '}
            <span className="highlight-yellow">Decisions</span>
          </motion.h1>

          <motion.button
            id="reset-btn"
            className="sketch-btn text-sm px-4 py-2"
            style={{
              borderColor: 'var(--color-red-mistake)',
              color: 'var(--color-red-mistake)',
            }}
            onClick={handleReset}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              backgroundColor: 'rgba(214, 69, 69, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            ↺ Reset
          </motion.button>
        </div>

        {/* Page number doodle */}
        <motion.p
          className="text-center text-xs mb-4"
          style={{
            fontFamily: 'var(--font-scribble)',
            color: 'var(--color-pencil-gray)',
            opacity: 0.5,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5 }}
        >
          ~ pg. 2: the game begins ~
        </motion.p>

        {/* Scoreboard */}
        <ScoreBoard scores={scores} />

        {/* Divider */}
        <motion.div
          className="w-full h-px my-4"
          style={{
            background: 'var(--color-pencil-gray)',
            opacity: 0.3,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4 }}
        />

        {/* Instruction */}
        <motion.p
          className="text-center text-lg sm:text-xl mb-6"
          style={{
            fontFamily: 'var(--font-sketch)',
            color: 'var(--color-ink-light)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {isRevealing
            ? '🤔 The computer is scribbling...'
            : '✏️ Pick your weapon of choice:'}
        </motion.p>

        {/* Choice Cards */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8">
          {choices.map((choice, i) => (
            <motion.div
              key={choice}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <ChoiceCard
                choice={choice}
                onClick={handleChoice}
                disabled={isRevealing}
                isSelected={playerChoice === choice}
              />
            </motion.div>
          ))}
        </div>

        {/* Computer Choice Reveal */}
        <AnimatePresence mode="wait">
          {isRevealing && !computerChoice && (
            <motion.div
              key="thinking"
              className="flex flex-col items-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="doodle-card w-28 h-36 sm:w-32 sm:h-40 flex items-center justify-center"
                animate={{
                  rotate: [0, 5, -5, 3, -3, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <span
                  className="text-3xl"
                  style={{
                    fontFamily: 'var(--font-hand)',
                    color: 'var(--color-pencil-gray)',
                  }}
                >
                  🤔?
                </span>
              </motion.div>
              <span
                className="mt-3 text-sm"
                style={{
                  fontFamily: 'var(--font-scribble)',
                  color: 'var(--color-pencil-gray)',
                }}
              >
                * scribbling intensifies *
              </span>
            </motion.div>
          )}

          {computerChoice && (
            <motion.div
              key="reveal"
              className="flex flex-col items-center mb-4"
              initial={{ opacity: 0, rotateY: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
            >
              <div
                className="text-center text-sm mb-2"
                style={{
                  fontFamily: 'var(--font-scribble)',
                  color: 'var(--color-pencil-gray)',
                }}
              >
                Computer chose:
              </div>
              <motion.div
                className="doodle-card w-28 h-36 sm:w-32 sm:h-40 flex flex-col items-center justify-center"
                style={{ borderColor: 'var(--color-red-mistake)' }}
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="text-5xl sm:text-6xl mb-1">
                  {choiceEmojis[computerChoice]}
                </span>
                <span
                  className="text-lg font-semibold capitalize"
                  style={{ fontFamily: 'var(--font-hand)' }}
                >
                  {computerChoice}
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result Banner */}
        <AnimatePresence mode="wait">
          {result && (
            <ResultBanner
              key={roundKey}
              result={result}
              playerChoice={playerChoice}
              computerChoice={computerChoice}
            />
          )}
        </AnimatePresence>

        {/* Round count */}
        <motion.div
          className="text-center mt-6"
          style={{
            fontFamily: 'var(--font-scribble)',
            color: 'var(--color-pencil-gray)',
            fontSize: '0.8rem',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8 }}
        >
          <span>
            rounds played: {scores.player + scores.computer + scores.draws}
          </span>
          {scores.player + scores.computer + scores.draws >= 5 && (
            <span className="ml-2">(you're really into this, huh?)</span>
          )}
          {scores.player + scores.computer + scores.draws >= 10 && (
            <span className="ml-2">🔥</span>
          )}
        </motion.div>

        {/* Footer doodle */}
        <motion.div
          className="text-center mt-8 mb-4"
          style={{
            fontFamily: 'var(--font-scribble)',
            fontSize: '0.7rem',
            color: 'var(--color-pencil-gray)',
            opacity: 0.4,
            transform: 'rotate(1deg)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2 }}
        >
          ✎ this page was definitely not ripped out of a notebook ✎
        </motion.div>
      </div>
    </motion.div>
  )
}
