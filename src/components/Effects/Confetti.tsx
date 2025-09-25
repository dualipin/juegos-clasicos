import { useEffect, useState } from 'react'

interface ConfettiProps {
  active: boolean
  duration?: number
}

const Confetti = ({ active, duration = 3000 }: ConfettiProps) => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; color: string }>>([])

  useEffect(() => {
    if (active) {
      const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff']
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)]
      }))
      
      setParticles(newParticles)
      
      const timer = setTimeout(() => {
        setParticles([])
      }, duration)
      
      return () => clearTimeout(timer)
    }
  }, [active, duration])

  if (!active || particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 animate-confetti"
          style={{
            left: `${particle.left}%`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%'
          }}
        />
      ))}
    </div>
  )
}

export default Confetti