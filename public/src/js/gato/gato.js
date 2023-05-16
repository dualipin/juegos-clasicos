import './pagina/index-gato.js'

//#region Constantes del tablero
export const posicion1 =  document.getElementById('1')
export const posicion2 =  document.getElementById('2')
export const posicion3 =  document.getElementById('3')
export const posicion4 =  document.getElementById('4')
export const posicion5 =  document.getElementById('5')
export const posicion6 =  document.getElementById('6')
export const posicion7 =  document.getElementById('7')
export const posicion8 =  document.getElementById('8')
export const posicion9 =  document.getElementById('9')
//#endregion


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

//Boton reiniciar juego
document.getElementById('reiniciar').addEventListener('click', (e) => {
    // limpiarTablero()
    document.querySelector('main').classList.add('blur-sm', 'pointer-events-none')
    document.getElementById('modal').classList.remove('invisible', 'hidden')
    reiniciarJuego()
})