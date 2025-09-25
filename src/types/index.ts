export interface GameState {
  isPlaying: boolean
  score: number
  moves: number
}

export interface DiceResult {
  value: number
  timestamp: number
  id: string
}

export interface TicTacToeCell {
  value: 'X' | 'O' | null
  index: number
}

export interface MemoryCard {
  id: number
  value: string
  isFlipped: boolean
  isMatched: boolean
}

export interface GuessNumberGame {
  targetNumber: number
  attempts: number
  maxAttempts: number
  guesses: number[]
  isWon: boolean
  isGameOver: boolean
}

export interface RandomStats {
  entropy: number
  distribution: number[]
  uniformity: number
}

export interface RockPaperScissorsGame {
  playerChoice: 'rock' | 'paper' | 'scissors' | null
  computerChoice: 'rock' | 'paper' | 'scissors' | null
  result: 'win' | 'lose' | 'tie' | null
  playerScore: number
  computerScore: number
  round: number
}

export interface GameHistory {
  round: number
  playerChoice: 'rock' | 'paper' | 'scissors'
  computerChoice: 'rock' | 'paper' | 'scissors'
  result: 'win' | 'lose' | 'tie'
  timestamp: number
}