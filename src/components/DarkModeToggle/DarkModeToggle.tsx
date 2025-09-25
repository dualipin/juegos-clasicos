import { useDarkMode } from '../../hooks/useDarkMode'

const DarkModeToggle = () => {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent 
        transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 
        focus:ring-offset-2 dark:focus:ring-offset-background hover:scale-105 active:scale-95
        items-center justify-start
        ${isDark 
          ? 'bg-primary-600 hover:bg-primary-700' 
          : 'bg-secondary-300 hover:bg-secondary-400'
        }
      `}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo oscuro activado' : 'Modo claro activado'}
    >
      <span className="sr-only">
        {isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      </span>
      
      {/* Toggle circle */}
      <span
        className={`
          pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg 
          ring-0 transition-all duration-300 ease-in-out flex items-center justify-center
          ${isDark ? 'translate-x-6' : 'translate-x-1'}
        `}
      >
        <span className="text-sm leading-none">
          {isDark ? '🌙' : '☀️'}
        </span>
      </span>
    </button>
  )
}

export default DarkModeToggle