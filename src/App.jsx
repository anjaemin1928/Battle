import { useState } from 'react'
import { Crosshair } from 'lucide-react'

function App() {
  const [gameState, setGameState] = useState('menu'); // 'menu', 'matchmaking', 'playing'

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {gameState === 'menu' && (
        <div className="glass-panel p-10 max-w-md w-full text-center flex flex-col items-center gap-8">
          <div className="flex items-center justify-center gap-3">
            <Crosshair className="w-12 h-12 text-neon-blue" />
            <h1 className="text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-500">
              TACTICAL GRID
            </h1>
          </div>
          
          <p className="text-slate-300 text-lg">
            1v1 Turn-Based Tactical FPS
          </p>
          
          <div className="w-full flex flex-col gap-4 mt-4">
            <button 
              onClick={() => setGameState('matchmaking')}
              className="glass-button-primary w-full"
            >
              Find Match
            </button>
            <button className="glass-button bg-slate-700/50 hover:bg-slate-600/50 w-full border-slate-600">
              Settings
            </button>
          </div>
        </div>
      )}

      {gameState === 'matchmaking' && (
        <div className="glass-panel p-10 max-w-md w-full text-center flex flex-col items-center gap-6">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-neon-blue"></div>
          <h2 className="text-2xl font-bold text-white">Searching for opponent...</h2>
          <p className="text-slate-400">Connecting to Firebase Signaling Server</p>
          <button 
            onClick={() => setGameState('menu')}
            className="glass-button-danger mt-4"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}

export default App
