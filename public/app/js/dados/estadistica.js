/**
 * Metodo que calcula la moda
 * @param {Array} listaM Recibe una lista de metodos
 * @returns moda
 */
export function moda(listaM) {
    const lista1Count = {};

    listaM.map((elemento) => {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    });

    const lista1Array = Object.entries(lista1Count).sort(function (
        elementoA,
        elementoB
    ) {
        return elementoA[1] - elementoB[1];
    });

    const moda = lista1Array[lista1Array.length - 1];

    return moda;
}

/**
 * Metodo que calcula la mediana de un array
 * @param {Array} lista de numeros que se desea calcular la mediana
 * @returns Mediana
 */
export function calcularMediana(lista) {
    const listaOrdenada = lista.sort(function (primerElemento, segundoElemento) {
        return primerElemento - segundoElemento;
    });

    const mitadLista = parseInt(listaOrdenada.length / 2);

    let mediana;

    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

        mediana = promedioElemento1y2;
    } else {
        mediana = listaOrdenada[mitadLista];
    }
    return mediana;
}

/**
 * Metodo que calcula la media aritmetica de una lista de numeros
 * @param {Array} lista lista de numeros
 * @returns media aritmetica
 */
export function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}
