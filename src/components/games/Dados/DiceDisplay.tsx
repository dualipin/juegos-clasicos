interface DiceDisplayProps {
  value: number
  index: number
  isAnimating?: boolean
  showResult?: boolean
}

const DiceDisplay = ({ value, index, isAnimating = false, showResult = false }: DiceDisplayProps) => {
  const getDiceFace = (value: number) => {
    const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
    return faces[value - 1] || '⚀'
  }

  const getDiceColor = (value: number) => {
    const colors = [
      'from-red-400 to-red-600',
      'from-orange-400 to-orange-600', 
      'from-yellow-400 to-yellow-600',
      'from-green-400 to-green-600',
      'from-blue-400 to-blue-600',
      'from-purple-400 to-purple-600'
    ]
    return colors[value - 1] || colors[0]
  }

  return (
    <div className={`card p-4 text-center transition-all duration-500 hover-lift ${
      isAnimating ? 'animate-dice-pulse' : ''
    } ${
      showResult ? 'animate-dice-result' : ''
    }`}>
      <div className="text-xs text-muted-foreground mb-1">Dado #{index}</div>
      <div className={`text-5xl mb-2 transition-all duration-1000 ${
        isAnimating ? 'animate-dice-roll' : showResult ? 'animate-zoom-in' : ''
      }`}>
        {isAnimating ? '🎲' : getDiceFace(value)}
      </div>
      <div className={`text-lg font-bold transition-all duration-700 px-3 py-1 rounded-full ${
        isAnimating 
          ? 'text-accent-500 animate-pulse bg-accent-100 dark:bg-accent-900' 
          : `text-white bg-linear-to-r ${getDiceColor(value)} shadow-lg`
      }`}>
        {isAnimating ? '🎯' : value}
      </div>
    </div>
  )
}

export default DiceDisplay