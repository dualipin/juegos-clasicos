const mediat = document.getElementById("media");
const medianat = document.getElementById("mediana");
const modat = document.getElementById("moda");
const dado = document.getElementById("sectionDado");

function generarNumeros() {
  const semilla1 = 0
  const semilla2 = 0
  const d = 0
  const generear = document.getElementById("gen").value;

  const randoms = ProductosMedios(semilla1, semilla2, d, generear);

  const resultados = numerosGenerados(randoms);

  let c1 = 0,
    c2 = 0,
    c3 = 0,
    c4 = 0,
    c5 = 0,
    c6 = 0;

  resultados.forEach((x, i) => {
    document.getElementById("sectionDado").appendChild(dadoGenerador(i));
    moverDado(x, i);
    switch (x) {
      case 1:
        c1++;
        document.getElementById("c1").innerText = c1;
        break;
      case 2:
        c2++;
        document.getElementById("c2").innerText = c2;

        break;
      case 3:
        c3++;
        document.getElementById("c3").innerText = c3;

        break;
      case 4:
        c4++;
        document.getElementById("c4").innerText = c4;
        break;
      case 5:
        c5++;
        document.getElementById("c5").innerText = c5;

        break;
      case 6:
        c6++;
        document.getElementById("c6").innerText = c6;

        break;
      default:
        break;
    }
  });

  const mediaCaras = calcularMediaAritmetica(resultados);
  const mediaNumeros = calcularMediaAritmetica(randoms);

  mediat.innerText = mediaCaras;

  const medianaCaras = calcularMediana(resultados);
  const medianaNumeros = calcularMediaAritmetica(randoms);

  medianat.innerText = medianaCaras;

  const modaCaras = calcularMediana(resultados);
  const modaNumeros = calcularMediaAritmetica(randoms);

  modat.innerText = modaCaras;

  document.getElementById("caraMas").innerText = modaCaras;

  valoresGeneradosTabla(randoms, resultados);
}

function moverDado(nums, id) {
  const cube = document.getElementById(`${id}`);
  cube.style.transition = "";
  setTimeout(() => {
    cube.style.transition = `transform ${2}s`;
    console.log(`randomValue: ${nums}`);

    switch (nums) {
      case 1:
        cube.style.transform = ` rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
        break;
      case 6:
        cube.style.transform = ` rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
        break;
      case 5:
        cube.style.transform = ` rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
        break;
      case 2:
        cube.style.transform = ` rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
        break;
      case 3:
        cube.style.transform = ` rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
        break;
      case 4:
        cube.style.transform = ` rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
        break;
    }
  }, 10);
}

function valoresGeneradosTabla(numeros, valores) {
  for (let index = 0; index < numeros.length; index++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");

    tr.appendChild(td1);

    td1.innerText = numeros[index];

    document.getElementById("valoresgenerados").appendChild(tr);
  }
}



function numerosGenerados(arreglo) {
  const numersoVariables = [
    { min: 0, max: 0.16, cara: 1 },
    { min: 0.17, max: 0.33, cara: 2 },
    { min: 0.34, max: 0.5, cara: 3 },
    { min: 0.6, max: 0.76, cara: 4 },
    { min: 0.77, max: 0.93, cara: 5 },
    { min: 0.94, max: 0.99, cara: 6 }];

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

function dadoGenerador(num) {
  const contenido = document.createElement("div");
  contenido.className = "content";
  const dado = document.createElement("div");
  dado.id = num;
  dado.className = "dado";
  contenido.appendChild(dado);

  cara().forEach((x) => {
    dado.appendChild(x);
  });
  return contenido;
}

function cara() {
  const caras = [];
  for (let i = 1; i < 7; i++) {
    const div = document.createElement("div");
    div.className = `cara c${i}`;
    const element = document.createElement("img");
    element.src = `/public/app/res/dado/c${i}.png`;
    div.appendChild(element);
    caras.push(div);
  }
  return caras;
}
