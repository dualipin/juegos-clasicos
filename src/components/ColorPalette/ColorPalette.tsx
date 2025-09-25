const ColorPalette = () => {
  const colors = [
    { name: 'Primary', class: 'bg-primary-500', text: 'text-white' },
    { name: 'Secondary', class: 'bg-secondary-500', text: 'text-white' },
    { name: 'Accent', class: 'bg-accent-500', text: 'text-white' },
    { name: 'Success', class: 'bg-success-500', text: 'text-white' },
    { name: 'Warning', class: 'bg-warning-500', text: 'text-white' },
    { name: 'Error', class: 'bg-error-500', text: 'text-white' },
  ]

  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold mb-4 text-card-foreground">🎨 Paleta de Colores</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {colors.map((color) => (
          <div key={color.name} className={`${color.class} ${color.text} p-4 rounded-lg text-center font-medium`}>
            {color.name}
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-muted-foreground text-sm">
          Esta paleta se adapta automáticamente al modo oscuro para una experiencia visual óptima.
        </p>
      </div>
    </div>
  )
}

export default ColorPalette