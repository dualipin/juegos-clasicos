interface ChoiceButtonProps {
  choice: {
    id: 'rock' | 'paper' | 'scissors'
    emoji: string
    name: string
    color: string
  }
  onClick: () => void
  disabled: boolean
  isSelected: boolean
}

const ChoiceButton = ({ choice, onClick, disabled, isSelected }: ChoiceButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative p-6 rounded-xl border-2 transition-all duration-300 hover-lift
        ${isSelected 
          ? 'border-primary-500 bg-primary-50 dark:bg-primary-950 scale-105' 
          : 'border-border hover:border-primary-300'
        }
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
        disabled:hover:scale-100 disabled:hover:border-border
      `}
    >
      <div className="text-center space-y-2">
        <div className="text-4xl animate-bounce-subtle">
          {choice.emoji}
        </div>
        <div className="font-medium text-card-foreground">
          {choice.name}
        </div>
      </div>
      
      {isSelected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>
      )}
    </button>
  )
}

export default ChoiceButton