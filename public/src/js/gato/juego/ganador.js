/**
 * Logica para saber quien gano
 */


export let tablero = [
    [
        { jugador: '', isOcupado: false },
        { jugador: '', isOcupado: false },
        { jugador: '', isOcupado: false }
    ],
    [
        { jugador: '', isOcupado: false },
        { jugador: '', isOcupado: false },
        { jugador: '', isOcupado: false }
    ],
    [
        { jugador: '', isOcupado: false },
        { jugador: '', isOcupado: false },
        { jugador: '', isOcupado: false }
    ],
]

export const comprobarGanador = () => {
    if (
        tablero[0][0].jugador === tablero[0][1].jugador && tablero[0][1].jugador === tablero[0][2].jugador
        || tablero[1][0].jugador === tablero[1][1].jugador && tablero[1][1].jugador === tablero[1][2].jugador
        || tablero[2][0].jugador === tablero[2][1].jugador && tablero[2][1].jugador === tablero[2][2].jugador
        || tablero[0][0].jugador === tablero[1][1].jugador && tablero[1][1].jugador === tablero[2][2].jugador
        || tablero[2][0].jugador === tablero[1][1].jugador && tablero[1][1].jugador === tablero[0][2].jugador
    ) { }
}

// const limpiarTablero = () => {

//     //#region Arreglo de objeto original para el tablero
//     tablero = [
//         [
//             { jugador: '', isOcupado: false },
//             { jugador: '', isOcupado: false },
//             { jugador: '', isOcupado: false }
//         ],
//         [
//             { jugador: '', isOcupado: false },
//             { jugador: '', isOcupado: false },
//             { jugador: '', isOcupado: false }
//         ],
//         [
//             { jugador: '', isOcupado: false },
//             { jugador: '', isOcupado: false },
//             { jugador: '', isOcupado: false }
//         ],
//     ]
//     //#endregion




// }

