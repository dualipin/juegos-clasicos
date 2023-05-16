import { figurasJugadores } from "../gato.js"
import productosMedios from "../metodo/productos-medios.js"
import { tirarComputadora } from "./computadora.js"

const turnos = {
    maquina: false,
    jugador: false
}

/**
 * Metodo que calcula quien tirara primero, si el jugador o la maquina
 * @returns devuelve quien tira primero
 */
export const primerTiro = () => {
    const tiros = { min: 0, max: 0.5 }

    const turno = productosMedios(Math.random() * 10000, Math.random() * 10000)

    const turnoFigura = document.getElementById('turno-turno')

    if (turno > tiros.min && turno < tiros.max) {
        turnoFigura.innerText = figurasJugadores.jugador
        turnos.maquina = true
    }
    else {
        turnos.jugador = true
        document.getElementById('juego-gato').children[tirarComputadora()].innerHTML = figurasJugadores.computadora
        turnoFigura.innerText = figurasJugadores.jugador
    }
}


const turno = () => {
    
}