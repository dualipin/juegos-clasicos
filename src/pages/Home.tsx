import GameCard from '../components/GameCard/GameCard'

// Import images
import dadosImg from '../assets/images/dados.png'
import gatoImg from '../assets/images/gato.png'
import memoramaImg from '../assets/images/memorama.png'
import numerosImg from '../assets/images/numeros.png'
import piedraPapelTijeraImg from '../assets/images/piedra-papel-tijera.png'

const games = [
    {
        id: 'dados',
        title: 'Juego de dados',
        method: '🔐 Números Criptográficamente Seguros',
        description: 'Dados virtuales que utilizan la Web Crypto API para generar números verdaderamente aleatorios, garantizando resultados impredecibles y justos.',
        image: dadosImg,
        path: '/dados'
    },
    {
        id: 'gato',
        title: 'Juego de Gato - Tic Tac Toe',
        method: '🤖 IA con Aleatoriedad Verdadera',
        description: 'Juega contra una IA que toma decisiones usando números verdaderamente aleatorios, creando una experiencia de juego única e impredecible.',
        image: gatoImg,
        path: '/gato'
    },
    {
        id: 'memorama',
        title: 'Memorama',
        method: '🔀 Mezcla Criptográficamente Segura',
        description: 'Juego de memoria con cartas mezcladas usando algoritmos criptográficos para garantizar una distribución perfectamente aleatoria.',
        image: memoramaImg,
        path: '/memorama'
    },
    {
        id: 'adivina-numero',
        title: 'Adivina el Número',
        method: '🎯 Generación Uniforme Perfecta',
        description: 'Adivina números generados con distribución perfectamente uniforme usando técnicas criptográficas avanzadas.',
        image: numerosImg,
        path: '/adivina-numero'
    },
    {
        id: 'piedra-papel-tijera',
        title: 'Piedra, Papel o Tijera',
        method: '🤖 IA con Decisiones Aleatorias',
        description: 'Enfréntate a una IA que toma decisiones completamente impredecibles usando números criptográficamente seguros.',
        image: piedraPapelTijeraImg,
        path: '/piedra-papel-tijera'
    }
]

const Home = () => {
    return (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-gradient animate-slide-in-down">Bienvenido</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    Descubre una colección de juegos que utilizan números verdaderamente aleatorios
                    generados con tecnología criptográfica moderna para una experiencia completamente justa.
                </p>
            </div>

            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {games.map((game, index) => (
                    <GameCard key={game.id} {...game} index={index} />
                ))}
            </section>
        </div>
    )
}

export default Home