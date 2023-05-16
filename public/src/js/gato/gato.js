import {tirarComputadora } from "./juego/computadora.js"
import { tablero } from "./juego/ganador.js"
import './pagina/index-gato.js'

//#region Constantes del tablero
const posicion1 =  document.getElementById('1')
const posicion2 =  document.getElementById('2')
const posicion3 =  document.getElementById('3')
const posicion4 =  document.getElementById('4')
const posicion5 =  document.getElementById('5')
const posicion6 =  document.getElementById('6')
const posicion7 =  document.getElementById('7')
const posicion8 =  document.getElementById('8')
const posicion9 =  document.getElementById('9')
//#endregion

//Objeto que almacena que las figuras de los jugadores
export let figurasJugadores = {
    computadora: '',
    jugador: ''
}

const jugador = document.getElementById('jugador')
const maquina = document.getElementById('maquina')

/**
 * Establece las figuras para cada jugador
 * @param {Array} _figurasJugadores 
 */
export const setJugadores = (_figurasJugadores) => {
    figurasJugadores = _figurasJugadores
    jugador.innerText = figurasJugadores.jugador
    maquina.innerText = figurasJugadores.computadora
}


//#region Eventos de los botones del tablero
posicion1.addEventListener('click',(e)=>{
    console.log(tirarComputadora())
    tablero[0][0].jugador = 'x'
    console.log(tablero[0][0].jugador)
})
posicion2.addEventListener('click',(e)=>{})
posicion3.addEventListener('click',(e)=>{})
posicion4.addEventListener('click',(e)=>{})
posicion5.addEventListener('click',(e)=>{})
posicion6.addEventListener('click',(e)=>{})
posicion7.addEventListener('click',(e)=>{})
posicion8.addEventListener('click',(e)=>{})
posicion9.addEventListener('click',(e)=>{})
//#endregion

document.getElementById('reiniciar').addEventListener('click', (e) => {
    // limpiarTablero()
    document.querySelector('main').classList.add('blur-sm', 'pointer-events-none')
    document.getElementById('modal').classList.remove('invisible', 'hidden')
})