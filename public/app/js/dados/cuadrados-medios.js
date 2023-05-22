export function cuadradosMedios(semilla, cantidad) {
  let resultados = [];

  // Generar la secuencia
  for (var i = 0; i < cantidad; i++) {
    // Calcular el cuadrado de la semilla
    let cuadrado = semilla * semilla;

    // Convertir el cuadrado a una cadena de texto
    let cuadradoStr = cuadrado.toString();

    // Asegurarse de que la cadena tenga una longitud par
    if (cuadradoStr.length % 2 === 1) {
      cuadradoStr = '0' + cuadradoStr;
    }

    // Extraer los dígitos centrales como la nueva semilla
    let inicio = (cuadradoStr.length - semilla.toString().length) / 2;
    let fin = inicio + semilla.toString().length;
    semilla = parseInt(cuadradoStr.substring(inicio, fin), 10);

    // Normalizar el número entre 0 y 1
    let normalizado = semilla / Math.pow(10, semilla.toString().length);

    // Agregar el número normalizado a los resultados
    resultados.push(normalizado);
  }

  return resultados;
}