import productosMedios from "./metodo/productos-medios.js"
import { jugardorActual, setJugadorActual, tirarMaquina } from "./tic-tac.js"

export const jugadores = {
    jugador: '',
    maquina: ''
}

export const primerTiro = ()=>{
    const tiros = { min: 0, max: 0.5 }

    const turno = productosMedios(Math.random() * 10000, Math.random() * 10000)

    const turnoFigura = document.getElementById('turno-turno')

    console.log(turno)

    if (turno > tiros.min && turno < tiros.max) {
        turnoFigura.innerText = jugardorActual
        setJugadorActual(jugadores.jugador)
        
    }
    else {
        setJugadorActual(jugadores.maquina)
        tirarMaquina()
    }
} 