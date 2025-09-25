import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // Verificar preferencia guardada o preferencia del sistema
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      return JSON.parse(saved)
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = window.document.documentElement
    
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    // Guardar preferencia
    localStorage.setItem('darkMode', JSON.stringify(isDark))
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  return { isDark, toggleDarkMode }
}