/**
 * Metodo que convierte a posicion de dados
 * @param {Array} arreglo de numeros
 * @returns lista de posicion para los dados
 */
export function numerosGenerados(arreglo) {
    const resultados = [];
    arreglo.forEach((random) => {
        if (random >= 0 && random <= 0.16) {
            resultados.push(1);
        } else if (random >= 0.16 && random <= 0.33) {
            resultados.push(2);
        } else if (random >= 0.33 && random <= 0.5) {
            resultados.push(3);
        } else if (random >= 0.5 && random <= 0.76) {
            resultados.push(4);
        } else if (random >= 0.76 && random < 0.93) {
            resultados.push(5);
        } else if (random > 0.93 && random < 1) {
            resultados.push(6);
        }
    });

    return resultados;
}

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
export function mediana(lista) {
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

        const promedioElemento1y2 = mediaAritmetica([elemento1, elemento2]);

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
export function mediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}
