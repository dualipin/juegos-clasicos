import { turnoJuego, vecesGanadas } from "./caracteristicas.js"

/**
 * Vuelve al juego al estado de origen
 */
export const reiniciarJuego = ()=>{
    turnoJuego.computadora = false
    turnoJuego.jugador = false

    vecesGanadas.computadora = 0
    vecesGanadas.jugador = 0
}

/**
 * Establece las figuras para cada jugador
 * @param {Array} _figurasJugadores 
 */
export const setJugadores = (_figurasJugadores) => {
    figurasJugadores = _figurasJugadores
    document.getElementById('jugador').innerText = figurasJugadores.jugador
    document.getElementById('maquina').innerText = figurasJugadores.computadora
}
