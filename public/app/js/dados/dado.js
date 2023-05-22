import { cuadradosMedios } from "./cuadrados-medios.js";
import { mediaAritmetica, mediana, moda, numerosGenerados } from "./estadistica.js";
import { dadoGenerador, moverDado } from "./generador-dados.js";


const tableroDado = document.getElementById('dados')
tableroDado.innerHTML = ''


/**
 * Evento cuando seleccionamos el boton
 */
document.getElementById('lanzar').addEventListener('click', (e) => {
    const generar = document.getElementById('generar').value
    const error = document.getElementById('error')
    if (generar == '') error.innerText = 'Rellene el campo'
    else if (generar < 0) error.innerText = 'El valor no puede ser menor a 0'
    else {
        error.innerText = ''
        generarNumeros(generar)
    }
})

/**
 * Metodo que genera los numeros y dados
 * @param {number} cantidad cantidad de numeros a generar
 */
function generarNumeros(cantidad) {
    document.getElementById('dados').innerHTML = ''

    const randoms = cuadradosMedios(cantidad)

    const resultados = numerosGenerados(randoms);

    let c1 = 0,
        c2 = 0,
        c3 = 0,
        c4 = 0,
        c5 = 0,
        c6 = 0;

    limpiarTablaGenerados()

    resultados.forEach((x, i) => {
        document.getElementById("dados").appendChild(dadoGenerador(i));
        moverDado(x,i)
        switch (x) {
            case 1:
                c1++;
                document.getElementById("c1-resultado").innerText = c1;
                break;
            case 2:
                c2++;
                document.getElementById("c2-resultado").innerText = c2;

                break;
            case 3:
                c3++;
                document.getElementById("c3-resultado").innerText = c3;

                break;
            case 4:
                c4++;
                document.getElementById("c4-resultado").innerText = c4;
                break;
            case 5:
                c5++;
                document.getElementById("c5-resultado").innerText = c5;

                break;
            case 6:
                c6++;
                document.getElementById("c6-resultado").innerText = c6;

                break;
            default:
                break;
        }
    });


    document.getElementById('media').innerText = mediaAritmetica(resultados)
    document.getElementById('mediana').innerText = mediana(resultados)
    document.getElementById('moda').innerText = moda(resultados)[0]

}

//limpia los valores de la tabla numeros generaos
function limpiarTablaGenerados() {
    document.getElementById("c1-resultado").innerText = 0;
    document.getElementById("c2-resultado").innerText = 0;
    document.getElementById("c3-resultado").innerText = 0;
    document.getElementById("c4-resultado").innerText = 0;
    document.getElementById("c5-resultado").innerText = 0;
    document.getElementById("c6-resultado").innerText = 0;
}