/**
 * Funcion que genera un numero pseudoaleatorio
 * @param {number} x0 semilla 1
 * @param {number} x1 semilla 2
 * @param {number} index posicion del numero que se desea generar
 * @returns numero pseudoaleatorio
 */
const productosMedios = (x0, x1) => {
    const D = 4 //cantidad de numeros de la parte central
    const _x0 = parseInt(x0) //convertimos a entera nuestra semilla 1
    const _x1 = parseInt(x1) //convertimos a entera nuestra semilla 2
    const divisor = '1'.padEnd((D + 1), '0') //creamos el denominador que generara el decimal
    let result = 0

    const producto = _x0 * _x1
    const _productoStr = producto.toString()
    const start = (_productoStr.length / 2) - (D / 2)
    const end = start + D
    const generado = _productoStr.substring(start, end)
    result = generado / divisor

    return result
}

export default productosMedios