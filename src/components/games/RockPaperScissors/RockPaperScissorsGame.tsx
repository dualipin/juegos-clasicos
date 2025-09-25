import { useState } from 'react'
import { GameRandomizers } from '../../../utils/randomGenerators'
import { RockPaperScissorsGame as GameState, GameHistory } from '../../../types'
import ChoiceButton from './ChoiceButton'
import GameResult from './GameResult'
import GameStats from './GameStats'

const RockPaperScissorsGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    playerChoice: null,
    computerChoice: null,
    result: null,
    playerScore: 0,
    computerScore: 0,
    round: 0
  })
  
  const [history, setHistory] = useState<GameHistory[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const choices = [
    { id: 'rock', emoji: '🪨', name: 'Piedra', color: 'bg-gray-500' },
    { id: 'paper', emoji: '📄', name: 'Papel', color: 'bg-blue-500' },
    { id: 'scissors', emoji: '✂️', name: 'Tijeras', color: 'bg-red-500' }
  ] as const

  const getWinner = (player: string, computer: string): 'win' | 'lose' | 'tie' => {
    if (player === computer) return 'tie'
    
    const winConditions = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    }
    
    return winConditions[player as keyof typeof winConditions] === computer ? 'win' : 'lose'
  }

  const playRound = async (playerChoice: 'rock' | 'paper' | 'scissors') => {
    setIsPlaying(true)
    setShowResult(false)
    
    // Animación de suspense
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const computerChoice = GameRandomizers.generateRockPaperScissors()
    const result = getWinner(playerChoice, computerChoice)
    
    const newGameState = {
      ...gameState,
      playerChoice,
      computerChoice,
      result,
      round: gameState.round + 1,
      playerScore: gameState.playerScore + (result === 'win' ? 1 : 0),
      computerScore: gameState.computerScore + (result === 'lose' ? 1 : 0)
    }
    
    const newHistoryEntry: GameHistory = {
      round: newGameState.round,
      playerChoice,
      computerChoice,
      result,
      timestamp: Date.now()
    }
    
    setGameState(newGameState)
    setHistory(prev => [newHistoryEntry, ...prev])
    setIsPlaying(false)
    
    // Mostrar resultado con animación
    setTimeout(() => {
      setShowResult(true)
    }, 200)
  }

  const resetGame = () => {
    setGameState({
      playerChoice: null,
      computerChoice: null,
      result: null,
      playerScore: 0,
      computerScore: 0,
      round: 0
    })
    setHistory([])
    setShowResult(false)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gradient mb-2">🪨📄✂️ Piedra, Papel o Tijera</h1>
        <p className="text-muted-foreground">IA con decisiones verdaderamente aleatorias</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Panel de juego */}
        <section className="lg:basis-2/3 space-y-6">
          {/* Marcador */}
          <div className="card p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {gameState.playerScore}
                </div>
                <div className="text-sm text-muted-foreground">Tú</div>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-medium text-muted-foreground">
                  Ronda {gameState.round}
                </div>
                <div className="text-xs text-muted-foreground">VS</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">
                  {gameState.computerScore}
                </div>
                <div className="text-sm text-muted-foreground">IA</div>
              </div>
            </div>
          </div>

          {/* Área de juego */}
          <div className="card p-8">
            <h2 className="text-xl font-bold text-center mb-6">Elige tu jugada</h2>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {choices.map((choice) => (
                <ChoiceButton
                  key={choice.id}
                  choice={choice}
                  onClick={() => playRound(choice.id)}
                  disabled={isPlaying}
                  isSelected={gameState.playerChoice === choice.id}
                />
              ))}
            </div>

            {isPlaying && (
              <div className="text-center py-8">
                <div className="text-4xl animate-bounce mb-4">🤖</div>
                <p className="text-lg font-medium animate-pulse">
                  La IA está decidiendo...
                </p>
              </div>
            )}

            {showResult && gameState.result && (
              <GameResult
                playerChoice={gameState.playerChoice!}
                computerChoice={gameState.computerChoice!}
                result={gameState.result}
                choices={choices}
              />
            )}

            {gameState.round > 0 && (
              <div className="text-center mt-6">
                <button
                  onClick={resetGame}
                  className="btn-secondary"
                >
                  🔄 Nueva Partida
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Panel de estadísticas */}
        <section className="lg:basis-1/3 space-y-6">
          <GameStats gameState={gameState} history={history} />
          
          <div className="card p-6">
            <h3 className="font-semibold text-primary-700 dark:text-primary-300 mb-2">
              🔐 IA Verdaderamente Aleatoria
            </h3>
            <p className="text-sm text-primary-600 dark:text-primary-400">
              La IA usa números criptográficamente seguros para tomar decisiones 
              completamente impredecibles, garantizando un juego justo.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default RockPaperScissorsGame