const Footer = () => {
  return (
    <footer className="bg-card border-t border-border p-6 text-center mt-12">
      <div className="container mx-auto">
        <p className="text-sm text-muted-foreground">
          Desarrollado con ❤️ por{' '}
          <a
            href="https://github.com/dualipin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
          >
            dualipin
          </a>
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Construido con React, TypeScript, Tailwind CSS y Web Crypto API &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer