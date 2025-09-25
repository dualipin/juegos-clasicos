import { useState, useEffect } from 'react'
import { GameRandomizers } from '../../../utils/randomGenerators'
import { MemoryCard } from '../../../types'
import Confetti from '../../Effects/Confetti'

const MemoramaGame = () => {
  const [cards, setCards] = useState<MemoryCard[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedPairs, setMatchedPairs] = useState<number>(0)
  const [moves, setMoves] = useState<number>(0)
  const [gameWon, setGameWon] = useState<boolean>(false)
  const [animatingCards, setAnimatingCards] = useState<number[]>([])
  const [matchedCards, setMatchedCards] = useState<number[]>([])

  const symbols = ['🎮', '🎯', '🎲', '🎪', '🎨', '🎭', '🎪', '🎵']

  const initializeGame = () => {
    const pairs = symbols.slice(0, 8)
    const allCards = [...pairs, ...pairs]
    
    // Shuffle using cryptographically secure randomization
    const shuffled = GameRandomizers.shuffleCards(allCards)

    const gameCards: MemoryCard[] = shuffled.map((symbol, index) => ({
      id: index,
      value: symbol,
      isFlipped: false,
      isMatched: false
    }))

    setCards(gameCards)
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setGameWon(false)
    setAnimatingCards([])
    setMatchedCards([])
  }

  useEffect(() => {
    initializeGame()
  }, [])

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards
      const firstCard = cards[first]
      const secondCard = cards[second]

      if (firstCard.value === secondCard.value) {
        // Animación de match
        setAnimatingCards([first, second])
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isMatched: true }
              : card
          ))
          setMatchedCards(prev => [...prev, first, second])
          setMatchedPairs(prev => prev + 1)
          setFlippedCards([])
          setAnimatingCards([])
        }, 800)
      } else {
        // Animación de error
        setAnimatingCards([first, second])
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false }
              : card
          ))
          setFlippedCards([])
          setAnimatingCards([])
        }, 1000)
      }
      setMoves(prev => prev + 1)
    }
  }, [flippedCards, cards])

  useEffect(() => {
    if (matchedPairs === 8) {
      setGameWon(true)
    }
  }, [matchedPairs])

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length === 2 || cards[cardId].isFlipped || cards[cardId].isMatched || animatingCards.length > 0) {
      return
    }

    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, isFlipped: true } : card
    ))
    setFlippedCards(prev => [...prev, cardId])
  }

  return (
    <div className="space-y-6">
      <Confetti active={gameWon} />
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gradient mb-2">🧠 Memorama</h1>
        <p className="text-muted-foreground">Juego de memoria con mezcla criptográficamente segura</p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Stats */}
        <div className="card p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-8">
              <div className="text-center p-4 bg-primary-50 dark:bg-primary-950 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{moves}</div>
                <div className="text-sm text-primary-700 dark:text-primary-300">Movimientos</div>
              </div>
              <div className="text-center p-4 bg-success-50 dark:bg-success-950 rounded-lg">
                <div className="text-3xl font-bold text-success-600 dark:text-success-400">{matchedPairs}/8</div>
                <div className="text-sm text-success-700 dark:text-success-300">Pares encontrados</div>
              </div>
            </div>
            <button
              onClick={initializeGame}
              className="btn-secondary"
            >
              🔄 Nuevo Juego
            </button>
          </div>
        </div>

        {gameWon && (
          <div className="card p-6 text-center bg-linear-to-br from-success-500 to-primary-500 animate-slide-in-down">
            <div className="text-4xl mb-2 animate-heartbeat">🎉</div>
            <h2 className="text-2xl font-bold text-white mb-2 animate-bounce-in">
              ¡Felicidades!
            </h2>
            <p className="text-white/90 animate-fade-in">
              Completaste el juego en {moves} movimientos
            </p>
          </div>
        )}

        {/* Game Board */}
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          {cards.map((card, index) => {
            const isAnimating = animatingCards.includes(card.id)
            const isMatched = matchedCards.includes(card.id)
            const isFlipped = card.isFlipped || card.isMatched
            
            return (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`aspect-square rounded-xl text-3xl font-bold transition-all transform ${
                  isFlipped
                    ? 'bg-linear-to-br from-primary-500 to-accent-500 text-white scale-105 shadow-glow'
                    : 'card hover:scale-105 hover:shadow-lg text-muted-foreground hover-lift'
                } ${
                  isAnimating && !card.isMatched ? 'animate-card-shake' : ''
                } ${
                  isMatched ? 'animate-card-match' : ''
                } ${
                  gameWon ? 'animate-memorama-win' : ''
                }`}
                style={{
                  animationDelay: gameWon ? `${index * 100}ms` : '0ms'
                }}
                disabled={card.isFlipped || card.isMatched || gameWon || animatingCards.length > 0}
              >
                <span className={card.isFlipped || card.isMatched ? 'animate-card-flip' : ''}>
                  {card.isFlipped || card.isMatched ? card.value : '❓'}
                </span>
              </button>
            )
          })}
        </div>

        {/* Method Info */}
        <div className="card p-6 bg-accent-50 dark:bg-accent-950 border border-accent-200 dark:border-accent-800">
          <h3 className="font-semibold text-accent-700 dark:text-accent-300 mb-2">
            🔀 Mezcla Criptográficamente Segura
          </h3>
          <p className="text-sm text-accent-600 dark:text-accent-400">
            Las cartas se mezclan utilizando el algoritmo Fisher-Yates con números 
            verdaderamente aleatorios de la Web Crypto API para garantizar una distribución perfecta.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MemoramaGame