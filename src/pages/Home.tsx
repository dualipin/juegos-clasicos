import GameCard from '../components/GameCard/GameCard'

const games = [
    {
        id: 'dados',
        title: 'Juego de dados',
        method: '🔐 Números Criptográficamente Seguros',
        description: 'Dados virtuales que utilizan la Web Crypto API para generar números verdaderamente aleatorios, garantizando resultados impredecibles y justos.',
        image: '/dados.jpg',
        path: '/dados'
    },
    {
        id: 'gato',
        title: 'Juego de Gato - Tic Tac Toe',
        method: '🤖 IA con Aleatoriedad Verdadera',
        description: 'Juega contra una IA que toma decisiones usando números verdaderamente aleatorios, creando una experiencia de juego única e impredecible.',
        image: '/gato.jpg',
        path: '/gato'
    },
    {
        id: 'memorama',
        title: 'Memorama',
        method: '🔀 Mezcla Criptográficamente Segura',
        description: 'Juego de memoria con cartas mezcladas usando algoritmos criptográficos para garantizar una distribución perfectamente aleatoria.',
        image: '/memorama.jpg',
        path: '/memorama'
    },
    {
        id: 'adivina-numero',
        title: 'Adivina el Número',
        method: '🎯 Generación Uniforme Perfecta',
        description: 'Adivina números generados con distribución perfectamente uniforme usando técnicas criptográficas avanzadas.',
        image: '/numeros.png',
        path: '/adivina-numero'
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

            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {games.map((game, index) => (
                    <GameCard key={game.id} {...game} index={index} />
                ))}
            </section>
        </div>
    )
}

export default Home