import { jugadores } from "./jugador.js"
import productosMedios from "./metodo/productos-medios.js"
import './modal-action.js'

const tablero = [
    ['','',''],
    ['','',''],
    ['','','']
]


//#region Tablero elementos
document.getElementById('p1').addEventListener('click', (e) => {
    moverA(0, 0)
})
document.getElementById('p2').addEventListener('click', (e) => {
    moverA(0, 1)
})
document.getElementById('p3').addEventListener('click', (e) => {
    moverA(0, 2)

})
document.getElementById('p4').addEventListener('click', (e) => {
    moverA(1, 0)

})
document.getElementById('p5').addEventListener('click', (e) => {
    moverA(1, 1)

})
document.getElementById('p6').addEventListener('click', (e) => {
    moverA(1, 2)

})
document.getElementById('p7').addEventListener('click', (e) => {
    moverA(2, 0)

})
document.getElementById('p8').addEventListener('click', (e) => {
    moverA(2, 1)

})
document.getElementById('p9').addEventListener('click', (e) => {
    moverA(2, 2)

})
//#endregion

export let jugardorActual = ''

let juegoPerdido = false

export const setJugadorActual = (_jugadorActual)=>{
    jugardorActual = _jugadorActual
}

export const moverA = (x,y)=>{
    document.getElementById('estado-juego').innerText = ''
    const posicionTablero = document.getElementsByClassName('posicion')[parseInt(x) * 3 + parseInt(y)]

    if (juegoPerdido) {
        document.getElementById('estado-juego').innerText = `Juego Terminado`
        return
    }

    if(jugadores.jugador == posicionTablero.textContent || jugadores.maquina == posicionTablero.textContent){
        document.getElementById('estado-juego').innerText = `Casilla Ocupada`
        return
    }

    tablero[x][y] = jugardorActual

    posicionTablero.innerHTML = jugardorActual


    if(verificarGanador(jugardorActual)){
        //accion de ganador

        juegoPerdido = true
        document.getElementById('estado-juego').innerText = `Gano ${jugardorActual}`
        return
    }

    if(verificarEmpate()){
        juegoPerdido=true
        document.getElementById('estado-juego').innerText = 'Juego empatado'
        return
    }

    jugardorActual = (jugardorActual === jugadores.jugador) ? jugadores.maquina : jugadores.jugador
    if(jugardorActual === jugadores.maquina) {
        tirarMaquina()
    }

}

const verificarGanador = (jugador) => {
    for (let i = 0; i < 3; i++) {
        if(tablero[i][0]===jugador && tablero[i][1]==jugador&&tablero[i][2]==jugador){
            return true
        }
    }

    for (let j = 0; j < 3; j++) {
        if(tablero[0][j]===jugador&&tablero[1][j]===jugador&&tablero[2][j]===jugador){
            return true
        }
        
    }

    if (tablero[0][0] === jugador && tablero[1][1] === jugador && tablero[2][2]){
        return true
    }

    
    if (tablero[0][2] === jugador && tablero[1][1] === jugador && tablero[2][0]){
        return true
    }

    return false
}

const verificarEmpate = () => {
    //acciones 
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tablero[i][j] === '') {
                return false
            }
        }
    }
    return true
}

export const tirarMaquina = ()=>{
    let movimientosDisponibles = []
    for (let i = 0; i < 3; i++) {
        
        for (let j = 0; j < 3; j++) {
            if(tablero[i][j]===''){
                movimientosDisponibles.push({x:i,y:j})
            }
            
        }
        
    }


    const x0 = Math.random() * 10000
    const x1 = Math.random() * 10000
    const numeroAleatorio = movimientosDisponibles[Math.floor(productosMedios(x0,x1) * movimientosDisponibles.length)]
    moverA(numeroAleatorio.x, numeroAleatorio.y)
}


document.getElementById('reiniciar').addEventListener('click', (e)=>{
    window.location.reload()
})