/**
 * Metodo que genera una lista con las caras de un dado
 * @returns devuelve una cara del dado
 */
function cara() {
    const caras = [];
    for (let i = 1; i < 7; i++) {
        const div = document.createElement("div");
        div.className = `cara c${i}`;
        const element = document.createElement("img");
        element.src = `https://dualipin.github.io/proyecto-integrador/public/app/res/dado/c${i}.png`;
        div.appendChild(element);
        caras.push(div);
    }
    return caras;
}

/**
 * Funcion que genera un dado
 * @param {number} num dados a generar
 * @returns elemento dado
 */
export function dadoGenerador(num) {
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

/**
 * Metodo que mueve el dado y muestra el numero obtenido
 * @param {number} nums 
 * @param {*} id 
 */
export function moverDado(nums, id) {
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
  