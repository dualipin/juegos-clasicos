interface GameResultProps {
  playerChoice: 'rock' | 'paper' | 'scissors'
  computerChoice: 'rock' | 'paper' | 'scissors'
  result: 'win' | 'lose' | 'tie'
  choices: readonly {
    id: 'rock' | 'paper' | 'scissors'
    emoji: string
    name: string
    color: string
  }[]
}

const GameResult = ({ playerChoice, computerChoice, result, choices }: GameResultProps) => {
  const playerChoiceData = choices.find(c => c.id === playerChoice)!
  const computerChoiceData = choices.find(c => c.id === computerChoice)!
  
  const resultConfig = {
    win: {
      text: '¡Ganaste!',
      emoji: '🎉',
      color: 'text-success-600 dark:text-success-400',
      bgColor: 'bg-success-50 dark:bg-success-950'
    },
    lose: {
      text: '¡Perdiste!',
      emoji: '😔',
      color: 'text-error-600 dark:text-error-400',
      bgColor: 'bg-error-50 dark:bg-error-950'
    },
    tie: {
      text: '¡Empate!',
      emoji: '🤝',
      color: 'text-warning-600 dark:text-warning-400',
      bgColor: 'bg-warning-50 dark:bg-warning-950'
    }
  }
  
  const config = resultConfig[result]

  return (
    <div className={`p-6 rounded-xl ${config.bgColor} animate-slide-in-up`}>
      <div className="text-center mb-6">
        <div className="text-4xl mb-2 animate-bounce">
          {config.emoji}
        </div>
        <h3 className={`text-2xl font-bold ${config.color}`}>
          {config.text}
        </h3>
      </div>
      
      <div className="grid grid-cols-3 gap-4 items-center">
        {/* Jugador */}
        <div className="text-center space-y-2">
          <div className="text-3xl animate-pulse">
            {playerChoiceData.emoji}
          </div>
          <div className="text-sm font-medium">
            Tú: {playerChoiceData.name}
          </div>
        </div>
        
        {/* VS */}
        <div className="text-center">
          <div className="text-2xl font-bold text-muted-foreground">
            VS
          </div>
        </div>
        
        {/* Computadora */}
        <div className="text-center space-y-2">
          <div className="text-3xl animate-pulse">
            {computerChoiceData.emoji}
          </div>
          <div className="text-sm font-medium">
            IA: {computerChoiceData.name}
          </div>
        </div>
      </div>
      
      {result !== 'tie' && (
        <div className="mt-4 text-center text-sm text-muted-foreground">
          {result === 'win' 
            ? `${playerChoiceData.name} vence a ${computerChoiceData.name}`
            : `${computerChoiceData.name} vence a ${playerChoiceData.name}`
          }
        </div>
      )}
    </div>
  )
}

export default GameResult