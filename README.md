# Juegos Clásicos - Versión Moderna

Una colección de juegos clásicos implementados con tecnologías web modernas, utilizando números verdaderamente aleatorios generados con la Web Crypto API.

🎮 **[Jugar Ahora](https://juegos-clasicos-modern.vercel.app)** 🎮

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dualipin/juegos-clasicos)

## 🚀 Tecnologías Utilizadas

- **React 18** con TypeScript para una experiencia de desarrollo robusta
- **Vite** para desarrollo rápido y builds optimizados
- **Tailwind CSS** para estilos modernos y responsivos
- **React Router** para navegación SPA

## 🎮 Juegos Incluidos

- **Dados** 🔐 - Números criptográficamente seguros
- **Gato (Tic Tac Toe)** 🤖 - IA con aleatoriedad verdadera  
- **Memorama** 🔀 - Mezcla criptográficamente segura
- **Adivina el Número** 🎯 - Generación uniforme perfecta

## 🛠️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Verificar tipos TypeScript
npm run type-check

# Ejecutar linter
npm run lint

# Construir para producción
npm run build

# Vista previa de la build
npm run preview

# Limpiar archivos de build
npm run clean
```

## 🚀 Despliegue en Vercel

Este proyecto está optimizado para Vercel y se despliega automáticamente:

### Despliegue Automático
1. Haz fork del repositorio
2. Conecta tu cuenta de GitHub con Vercel
3. Importa el proyecto en Vercel
4. ¡Listo! Se desplegará automáticamente

### Despliegue Manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Desplegar a producción
vercel --prod
```

### Configuración
- ✅ **Framework**: Vite (detección automática)
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `dist`
- ✅ **Install Command**: `npm install`
- ✅ **Dev Command**: `npm run dev`

## 📈 Mejoras de Performance y Seguridad

- **Web Crypto API**: Números verdaderamente aleatorios y criptográficamente seguros
- **Code Splitting**: Separación automática de chunks para carga optimizada
- **Tree Shaking**: Eliminación de código no utilizado
- **Lazy Loading**: Carga bajo demanda de componentes
- **TypeScript**: Detección temprana de errores y mejor IntelliSense
- **Vite HMR**: Hot Module Replacement para desarrollo rápido
- **Distribución Uniforme**: Algoritmos que garantizan aleatoriedad perfecta

## 🏗️ Arquitectura

```
src/
├── components/          # Componentes reutilizables
│   ├── Layout/         # Layout principal y navegación
│   ├── GameCard/       # Tarjetas de juegos
│   └── games/          # Componentes específicos de cada juego
├── pages/              # Páginas principales
├── utils/              # Utilidades y generadores aleatorios
├── types/              # Definiciones de TypeScript
└── hooks/              # Custom hooks (futuro)
```

## 🎯 Características

- **Aleatoriedad Verdadera**: Web Crypto API para números criptográficamente seguros
- **Responsive Design**: Funciona perfectamente en móviles y desktop
- **Componentes Modulares**: Código reutilizable y mantenible
- **Type Safety**: TypeScript para mayor confiabilidad
- **Performance Optimizada**: Builds rápidos y aplicación ligera
- **Accesibilidad**: Diseño inclusivo siguiendo mejores prácticas
- **Animaciones Fluidas**: Transiciones suaves y feedback visual

---

**Desarrollado por [dualipin](https://github.com/dualipin/)**
