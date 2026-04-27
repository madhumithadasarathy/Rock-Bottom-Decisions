import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import GameBoard from './components/GameBoard'

function App() {
  const [screen, setScreen] = useState('landing')

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {screen === 'landing' ? (
          <Home key="landing" onStart={() => setScreen('game')} />
        ) : (
          <GameBoard key="game" onBack={() => setScreen('landing')} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
