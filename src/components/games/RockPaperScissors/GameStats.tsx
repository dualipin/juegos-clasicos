import { RockPaperScissorsGame as GameState, GameHistory } from '../../../types'

interface GameStatsProps {
  gameState: GameState
  history: GameHistory[]
}

const GameStats = ({ gameState, history }: GameStatsProps) => {
  const winRate = gameState.round > 0 ? (gameState.playerScore / gameState.round * 100).toFixed(1) : '0.0'
  const tieCount = history.filter(h => h.result === 'tie').length
  
  const choiceStats = {
    rock: history.filter(h => h.playerChoice === 'rock').length,
    paper: history.filter(h => h.playerChoice === 'paper').length,
    scissors: history.filter(h => h.playerChoice === 'scissors').length
  }
  
  const computerChoiceStats = {
    rock: history.filter(h => h.computerChoice === 'rock').length,
    paper: history.filter(h => h.computerChoice === 'paper').length,
    scissors: history.filter(h => h.computerChoice === 'scissors').length
  }

  return (
    <div className="space-y-4">
      {/* Estadísticas generales */}
      <div className="card p-6">
        <h3 className="font-semibold mb-4 text-card-foreground">📊 Estadísticas</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Porcentaje de victorias:</span>
            <span className="font-medium text-success-600 dark:text-success-400">{winRate}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Empates:</span>
            <span className="font-medium text-warning-600 dark:text-warning-400">{tieCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Rondas jugadas:</span>
            <span className="font-medium">{gameState.round}</span>
          </div>
        </div>
      </div>

      {/* Distribución de elecciones */}
      {gameState.round > 0 && (
        <div className="card p-6">
          <h3 className="font-semibold mb-4 text-card-foreground">🎯 Tus Elecciones</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-2">
                🪨 Piedra
              </span>
              <span className="text-sm font-medium">{choiceStats.rock}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-2">
                📄 Papel
              </span>
              <span className="text-sm font-medium">{choiceStats.paper}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-2">
                ✂️ Tijeras
              </span>
              <span className="text-sm font-medium">{choiceStats.scissors}</span>
            </div>
          </div>
        </div>
      )}

      {/* Distribución de la IA */}
      {gameState.round > 0 && (
        <div className="card p-6">
          <h3 className="font-semibold mb-4 text-card-foreground">🤖 Elecciones de la IA</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-2">
                🪨 Piedra
              </span>
              <span className="text-sm font-medium">{computerChoiceStats.rock}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-2">
                📄 Papel
              </span>
              <span className="text-sm font-medium">{computerChoiceStats.paper}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm flex items-center gap-2">
                ✂️ Tijeras
              </span>
              <span className="text-sm font-medium">{computerChoiceStats.scissors}</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Distribución aleatoria verdadera usando criptografía
            </p>
          </div>
        </div>
      )}

      {/* Historial reciente */}
      {history.length > 0 && (
        <div className="card p-6">
          <h3 className="font-semibold mb-4 text-card-foreground">📝 Historial Reciente</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {history.slice(0, 10).map((game) => (
              <div key={game.timestamp} className="flex items-center justify-between text-sm p-2 rounded bg-muted/50">
                <span className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">R{game.round}</span>
                  <span>{game.playerChoice === 'rock' ? '🪨' : game.playerChoice === 'paper' ? '📄' : '✂️'}</span>
                  <span className="text-xs">vs</span>
                  <span>{game.computerChoice === 'rock' ? '🪨' : game.computerChoice === 'paper' ? '📄' : '✂️'}</span>
                </span>
                <span className={`text-xs font-medium ${
                  game.result === 'win' ? 'text-success-600 dark:text-success-400' :
                  game.result === 'lose' ? 'text-error-600 dark:text-error-400' :
                  'text-warning-600 dark:text-warning-400'
                }`}>
                  {game.result === 'win' ? 'Ganaste' : game.result === 'lose' ? 'Perdiste' : 'Empate'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default GameStats