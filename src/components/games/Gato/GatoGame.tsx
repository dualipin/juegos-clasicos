import { useState, useCallback } from 'react'
import { GameRandomizers } from '../../../utils/randomGenerators'
import { TicTacToeCell } from '../../../types'
import Confetti from '../../Effects/Confetti'

const GatoGame = () => {
  const [board, setBoard] = useState<TicTacToeCell[]>(
    Array.from({ length: 9 }, (_, index) => ({ value: null, index }))
  )
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X')
  const [winner, setWinner] = useState<'X' | 'O' | 'draw' | null>(null)
  const [gameMode, setGameMode] = useState<'human' | 'ai'>('human')
  const [lastMove, setLastMove] = useState<number | null>(null)
  const [winningCells, setWinningCells] = useState<number[]>([])

  const checkWinner = useCallback((board: TicTacToeCell[]) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ]

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern
      if (board[a].value && board[a].value === board[b].value && board[a].value === board[c].value) {
        setWinningCells([a, b, c])
        return board[a].value
      }
    }

    if (board.every(cell => cell.value !== null)) {
      return 'draw'
    }

    return null
  }, [])

  const makeAIMove = useCallback((currentBoard: TicTacToeCell[]): TicTacToeCell[] => {
    const emptyCells = currentBoard.filter(cell => cell.value === null)
    if (emptyCells.length === 0) return currentBoard

    const availablePositions = emptyCells.map(cell => cell.index)
    const selectedPosition = GameRandomizers.selectBoardPosition(availablePositions)
    
    const newBoard = currentBoard.map(cell =>
      cell.index === selectedPosition ? { ...cell, value: 'O' as const } : cell
    )

    return newBoard
  }, [])

  const handleCellClick = (index: number) => {
    if (board[index].value || winner) return

    setLastMove(index)
    const newBoard = board.map(cell =>
      cell.index === index ? { ...cell, value: currentPlayer } : cell
    )

    const gameWinner = checkWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
      setBoard(newBoard)
      return
    }

    if (gameMode === 'ai' && currentPlayer === 'X') {
      setTimeout(() => {
        const boardAfterAI = makeAIMove(newBoard)
        const aiWinner = checkWinner(boardAfterAI)
        setWinner(aiWinner)
        setBoard(boardAfterAI)
        setLastMove(boardAfterAI.findIndex((cell, i) => cell.value !== newBoard[i].value))
      }, 500)
    } else {
      setBoard(newBoard)
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  const resetGame = () => {
    setBoard(Array.from({ length: 9 }, (_, index) => ({ value: null, index })))
    setCurrentPlayer('X')
    setWinner(null)
    setLastMove(null)
    setWinningCells([])
  }

  const getWinnerMessage = () => {
    if (winner === 'draw') return '¡Empate!'
    if (winner === 'X') return '¡Ganaste!'
    if (winner === 'O') return gameMode === 'ai' ? '¡La IA ganó!' : '¡Jugador O ganó!'
    return ''
  }

  return (
    <div className="space-y-6">
      <Confetti active={winner === 'X'} />
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gradient mb-2">Juego de Gato</h1>
        <p className="text-muted-foreground">Tic Tac Toe con IA impredecible</p>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Controles */}
        <div className="card p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setGameMode('human')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  gameMode === 'human' 
                    ? 'bg-primary-500 text-white shadow-glow' 
                    : 'btn-secondary hover:bg-primary-500 hover:text-white'
                }`}
              >
                👥 2 Jugadores
              </button>
              <button
                onClick={() => setGameMode('ai')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  gameMode === 'ai' 
                    ? 'bg-primary-500 text-white shadow-glow' 
                    : 'btn-secondary hover:bg-primary-500 hover:text-white'
                }`}
              >
                🤖 vs IA
              </button>
            </div>
            
            <button
              onClick={resetGame}
              className="btn-secondary"
            >
              🔄 Nuevo Juego
            </button>
          </div>
        </div>

        {/* Estado del juego */}
        <div className="card p-6 text-center">
          {winner ? (
            <div className="space-y-2 animate-slide-in-down">
              <div className="text-4xl animate-heartbeat">
                {winner === 'draw' ? '🤝' : winner === 'X' ? '🎉' : gameMode === 'ai' ? '🤖' : '🏆'}
              </div>
              <div className="text-xl font-bold text-primary-600 dark:text-primary-400 animate-bounce-in">
                {getWinnerMessage()}
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-2xl animate-wiggle">
                {currentPlayer === 'X' ? '❌' : '⭕'}
              </div>
              <div className="text-lg text-card-foreground animate-fade-in">
                Turno del jugador: <span className="font-bold text-primary-600 dark:text-primary-400">{currentPlayer}</span>
              </div>
            </div>
          )}
        </div>

        {/* Tablero */}
        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
          {board.map((cell) => {
            const isWinningCell = winningCells.includes(cell.index)
            const isLastMove = lastMove === cell.index
            
            return (
              <button
                key={cell.index}
                onClick={() => handleCellClick(cell.index)}
                className={`aspect-square card border-2 border-border hover:border-primary-300 dark:hover:border-primary-600 text-4xl font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50 hover-lift ${
                  isWinningCell ? 'animate-tictactoe-win bg-gradient-to-br from-success-400 to-success-600' : ''
                } ${
                  isLastMove ? 'animate-tictactoe-place' : ''
                }`}
                disabled={!!cell.value || !!winner}
              >
                <span className={`${
                  cell.value === 'X' ? 'text-error-500' : cell.value === 'O' ? 'text-primary-500' : ''
                } ${
                  isLastMove ? 'animate-zoom-in' : ''
                }`}>
                  {cell.value === 'X' ? '❌' : cell.value === 'O' ? '⭕' : ''}
                </span>
              </button>
            )
          })}
        </div>

        {/* Información del método */}
        <div className="card p-6 bg-success-50 dark:bg-success-950 border border-success-200 dark:border-success-800">
          <h3 className="font-semibold text-success-700 dark:text-success-300 mb-2">
            🤖 IA con Aleatoriedad Verdadera
          </h3>
          <p className="text-sm text-success-600 dark:text-success-400">
            La IA utiliza números verdaderamente aleatorios generados por la Web Crypto API 
            para tomar decisiones impredecibles y justas en cada movimiento.
          </p>
        </div>
      </div>
    </div>
  )
}

export default GatoGame