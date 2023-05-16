import { setJugadores } from "../gato.js"
import { primerTiro } from "../juego/jugador.js"

const main = document.querySelector('main')//definimos nuestra tag main
document.getElementById('modal').classList.remove('invisible')

/**
 * Generamos un evento para cuando elijamos muestro avatar?
 */
document.getElementById('seleccionar').addEventListener('click', (e) => {

    main.classList.remove('blur-sm', 'pointer-events-none')
    document.getElementById('modal').classList.add('invisible', 'hidden')
    const jugadorFigura = document.querySelector('input[name="figura"]:checked').value;
    const computadoraFigura = (jugadorFigura === '⭕') ? '❌' : '⭕'

    const _figurasJugadores = { computadora: computadoraFigura, jugador: jugadorFigura }

    setJugadores(_figurasJugadores)
    primerTiro()
})
