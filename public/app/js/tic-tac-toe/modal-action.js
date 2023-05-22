import { jugadores, primerTiro } from "./jugador.js"

/**
 * Generamos un evento para cuando elijamos muestro avatar?
 */
document.getElementById('seleccionar').addEventListener('click', (e) => {


    document.getElementById('modal').classList.add('hidden')
    const jugadorFigura = document.querySelector('input[name="figura"]:checked').value;
    const computadoraFigura = (jugadorFigura === '⭕') ? '❌' : '⭕'
    jugadores.jugador = jugadorFigura
    jugadores.maquina = computadoraFigura
    primerTiro()
    document.getElementById('turno-turno').innerText = jugadores.jugador
    console.log(jugadores)
})
