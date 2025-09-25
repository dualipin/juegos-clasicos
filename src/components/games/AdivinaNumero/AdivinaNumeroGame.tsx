import { useState, useEffect } from 'react'
import { GameRandomizers } from '../../../utils/randomGenerators'
import { GuessNumberGame } from '../../../types'
import Confetti from '../../Effects/Confetti'

const AdivinaNumeroGame = () => {
  const [game, setGame] = useState<GuessNumberGame>({
    targetNumber: 0,
    attempts: 0,
    maxAttempts: 10,
    guesses: [],
    isWon: false,
    isGameOver: false
  })
  const [currentGuess, setCurrentGuess] = useState<string>('')
  const [feedback, setFeedback] = useState<string>('')
  const [range, setRange] = useState({ min: 1, max: 100 })
  const [lastGuessResult, setLastGuessResult] = useState<'correct' | 'wrong' | 'close' | null>(null)

  const initializeGame = () => {
    const target = GameRandomizers.generateTargetNumber(range.min, range.max)
    setGame({
      targetNumber: target,
      attempts: 0,
      maxAttempts: 10,
      guesses: [],
      isWon: false,
      isGameOver: false
    })
    setCurrentGuess('')
    setFeedback('¡Comienza a adivinar!')
    setLastGuessResult(null)
  }

  useEffect(() => {
    initializeGame()
  }, [range])

  const makeGuess = () => {
    const guess = parseInt(currentGuess)
    
    if (isNaN(guess) || guess < range.min || guess > range.max) {
      setFeedback(`Ingresa un número entre ${range.min} y ${range.max}`)
      return
    }

    const newAttempts = game.attempts + 1
    const newGuesses = [...game.guesses, guess]
    
    if (guess === game.targetNumber) {
      setLastGuessResult('correct')
      setGame(prev => ({
        ...prev,
        attempts: newAttempts,
        guesses: newGuesses,
        isWon: true,
        isGameOver: true
      }))
      setFeedback(`¡Correcto! El número era ${game.targetNumber}`)
    } else if (newAttempts >= game.maxAttempts) {
      setLastGuessResult('wrong')
      setGame(prev => ({
        ...prev,
        attempts: newAttempts,
        guesses: newGuesses,
        isGameOver: true
      }))
      setFeedback(`¡Se acabaron los intentos! El número era ${game.targetNumber}`)
    } else {
      setGame(prev => ({
        ...prev,
        attempts: newAttempts,
        guesses: newGuesses
      }))
      
      const difference = Math.abs(guess - game.targetNumber)
      if (difference <= 5) {
        setLastGuessResult('close')
        setFeedback('¡Muy cerca! 🔥')
      } else if (difference <= 15) {
        setLastGuessResult('close')
        setFeedback(guess < game.targetNumber ? 'Un poco más alto 📈' : 'Un poco más bajo 📉')
      } else {
        setLastGuessResult('wrong')
        setFeedback(guess < game.targetNumber ? 'Mucho más alto ⬆️' : 'Mucho más bajo ⬇️')
      }
    }
    
    setCurrentGuess('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      makeGuess()
    }
  }

  const getGuessColor = (guess: number, index: number) => {
    const difference = Math.abs(guess - game.targetNumber)
    const isLastGuess = index === game.guesses.length - 1
    
    let baseClass = ''
    let animationClass = ''
    
    if (guess === game.targetNumber) {
      baseClass = 'bg-success-500 text-white'
      animationClass = isLastGuess ? 'animate-guess-correct' : ''
    } else if (difference <= 5) {
      baseClass = 'bg-warning-500 text-white'
      animationClass = isLastGuess ? 'animate-guess-close' : ''
    } else if (difference <= 15) {
      baseClass = 'bg-primary-500 text-white'
      animationClass = isLastGuess ? 'animate-guess-close' : ''
    } else {
      baseClass = 'bg-secondary-300 dark:bg-secondary-700 text-secondary-800 dark:text-secondary-200'
      animationClass = isLastGuess ? 'animate-guess-wrong' : ''
    }
    
    return `${baseClass} ${animationClass}`
  }

  return (
    <div className="space-y-6">
      <Confetti active={game.isWon} />
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gradient mb-2">🎯 Adivina el Número</h1>
        <p className="text-muted-foreground">Generación uniforme perfecta sin sesgos</p>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Game Settings */}
        <div className="card p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-card-foreground">🎯 Rango:</label>
              <input
                type="number"
                value={range.min}
                onChange={(e) => setRange(prev => ({ ...prev, min: parseInt(e.target.value) || 1 }))}
                className="input w-20 text-center"
                disabled={!game.isGameOver && game.attempts > 0}
              />
              <span className="text-muted-foreground">-</span>
              <input
                type="number"
                value={range.max}
                onChange={(e) => setRange(prev => ({ ...prev, max: parseInt(e.target.value) || 100 }))}
                className="input w-20 text-center"
                disabled={!game.isGameOver && game.attempts > 0}
              />
            </div>
            <button
              onClick={initializeGame}
              className="btn-secondary"
            >
              🔄 Nuevo Juego
            </button>
          </div>
        </div>

        {/* Game Status */}
        <div className="card p-6 text-center">
          <div className={`text-2xl mb-2 ${
            game.isWon ? 'animate-heartbeat' : game.isGameOver ? 'animate-wiggle' : 'animate-bounce'
          }`}>
            {game.isWon ? '🎉' : game.isGameOver ? '😔' : '🤔'}
          </div>
          <div className={`text-lg mb-3 text-card-foreground font-medium ${
            lastGuessResult === 'correct' ? 'animate-bounce-in text-success-600' :
            lastGuessResult === 'close' ? 'animate-wiggle text-warning-600' :
            lastGuessResult === 'wrong' ? 'animate-guess-wrong text-error-600' :
            'animate-fade-in'
          }`}>
            {feedback}
          </div>
          <div className="flex justify-center gap-4">
            <div className="text-center p-3 bg-primary-50 dark:bg-primary-950 rounded-lg hover-lift animate-slide-in-left">
              <div className="text-xl font-bold text-primary-600 dark:text-primary-400">{game.attempts}</div>
              <div className="text-xs text-primary-700 dark:text-primary-300">Intentos</div>
            </div>
            <div className="text-center p-3 bg-warning-50 dark:bg-warning-950 rounded-lg hover-lift animate-slide-in-right">
              <div className="text-xl font-bold text-warning-600 dark:text-warning-400">{game.maxAttempts - game.attempts}</div>
              <div className="text-xs text-warning-700 dark:text-warning-300">Restantes</div>
            </div>
          </div>
        </div>

        {/* Input */}
        {!game.isGameOver && (
          <div className="card p-6 animate-slide-in-up">
            <div className="flex gap-3">
              <input
                type="number"
                value={currentGuess}
                onChange={(e) => setCurrentGuess(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Número entre ${range.min} y ${range.max}`}
                className={`input flex-1 transition-all duration-300 ${
                  lastGuessResult === 'wrong' ? 'animate-guess-wrong border-error-500' :
                  lastGuessResult === 'close' ? 'border-warning-500' :
                  lastGuessResult === 'correct' ? 'border-success-500' : ''
                }`}
                min={range.min}
                max={range.max}
              />
              <button
                onClick={makeGuess}
                className="btn-primary px-6 hover-glow"
              >
                🎯 Adivinar
              </button>
            </div>
          </div>
        )}

        {/* Guess History */}
        {game.guesses.length > 0 && (
          <div className="card p-6 animate-slide-in-up">
            <h3 className="font-semibold mb-4 text-card-foreground">📝 Historial de intentos:</h3>
            <div className="flex flex-wrap gap-2">
              {game.guesses.map((guess, index) => (
                <span
                  key={index}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 hover-glow ${getGuessColor(guess, index)}`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    opacity: index === game.guesses.length - 1 ? 1 : 0.8
                  }}
                >
                  {guess}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Method Info */}
        <div className="card p-6 bg-warning-50 dark:bg-warning-950 border border-warning-200 dark:border-warning-800">
          <h3 className="font-semibold text-warning-700 dark:text-warning-300 mb-2">
            🎯 Generación Uniforme Perfecta
          </h3>
          <p className="text-sm text-warning-600 dark:text-warning-400">
            El número objetivo se genera usando un algoritmo de rechazo con la Web Crypto API 
            para garantizar una distribución perfectamente uniforme sin sesgos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdivinaNumeroGame