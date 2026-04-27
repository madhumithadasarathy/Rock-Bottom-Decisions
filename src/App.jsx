import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Landing from './components/Landing'
import GameBoard from './components/GameBoard'

function App() {
  const [screen, setScreen] = useState('landing')

  return (
    <div className="min-h-screen notebook-bg paper-texture">
      <AnimatePresence mode="wait">
        {screen === 'landing' ? (
          <Landing key="landing" onStart={() => setScreen('game')} />
        ) : (
          <GameBoard key="game" onBack={() => setScreen('landing')} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
