import productosMedios from "../metodo/productos-medios.js"

const rangosTablero = [
    { min: 0, max: 1 / 9 },
    { min: 1 / 9, max: 2 / 9 },
    { min: 2 / 9, max: 3 / 9 },
    { min: 3 / 9, max: 4 / 9 },
    { min: 4 / 9, max: 5 / 9 },
    { min: 5 / 9, max: 6 / 9 },
    { min: 6 / 9, max: 7 / 9 },
    { min: 7 / 9, max: 8 / 9 },
    { min: 8 / 9, max: 1 }
]

/**
 * Funcion que calcula donde tirara la computadora
 * @returns indice en el que tirara la computadora
 */
export const tirarComputadora = () => {

    const semilla1 = Math.floor(Math.random() * 100000)
    const semilla2 = Math.floor(Math.random() * 100000)
    const number = productosMedios(semilla1, semilla2)
    const _index = rangosTablero.findIndex((rango) => (number > rango.min && number < rango.max))

    return _index
}