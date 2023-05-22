// Genera un número aleatorio entre 1 y 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Inicializa el número de intentos en 10
let remainingGuesses = 10;

// Obtiene los elementos de la página
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const message = document.getElementById('message');
const remainingGuessesEl = document.getElementById('remaining-guesses');
const resultEl = document.getElementById('result');

// Agrega un controlador de eventos para el botón de adivinanza
guessBtn.addEventListener('click', () => {
  // Obtiene el número ingresado por el usuario
  let guess = parseInt(guessInput.value);

  // Verifica si el número es válido
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.innerText = 'Ingresa un número válido';
   if(!message.classList.contains('text-red-700')){message.classList.add('text-red-700')}
    
    return;
  }

  // Decrementa el número de intentos restantes
  remainingGuesses--;

  // Muestra el número de intentos restantes
  remainingGuessesEl.innerText = `Te quedan ${remainingGuesses} intentos`;

  // Verifica si el usuario adivinó el número
    if (guess === secretNumber) {
        // El usuario adivinó el número
        resultEl.innerText = `Felicidades, adivinaste el número en ${11 - remainingGuesses} intentos`;
        // Deshabilita el campo de entrada y el botón
        guessInput.disabled = true;
        guessBtn.disabled = true;

        // Muestra el mensaje de finalización del juego
        message.innerText = '¡Has ganado ✅🎉🎉!';

        const clase = message.classList
        if (clase.contains('') || clase.contains('') || clase.contains('')){
            message.classList.remove('text-red-700')
            message.classList.remove('text-blue-400')
            message.classList.remove('text-blue-400')
        }
        message.classList.add('text-green-500')
        remainingGuessesEl.innerText = ''

    } else if (remainingGuesses === 0) {
        // El usuario se quedó sin intentos
        resultEl.innerText = `El número era ${secretNumber}`;
        message.innerText = 'Has perdido ❌💀';
        remainingGuessesEl.innerText = ''
    } else if (guess < secretNumber) {
        // El número ingresado es demasiado bajo
        message.innerText = 'Muy bajo';
        if (message.classList.contains('text-red-700') || message.classList.contains('text-blue-400')) {
            message.classList.remove('text-red-700')
            message.classList.remove('text-blue-400')
        }

        message.classList.add('text-orange-500')

    } else {
        // El número ingresado es demasiado alto
        message.innerText = 'Muy alto';
        if (message.classList.contains('text-red-700') || message.classList.contains('text-orange-500')) {
            message.classList.remove('text-red-700')
            message.classList.remove('text-orange-500')
        }

        message.classList.add('text-blue-400')
    }
});
    
    const resetBtn = document.getElementById("reset-btn");
    resetBtn.addEventListener("click", reiniciarJuego);
    
    function reiniciarJuego() {
      // Reinicia las variables del juego y comienza un nuevo juego
      remainingGuesses = 10;
      secretNumber = Math.floor(Math.random() * 100) + 1;
      resultEl.innerHTML = "";
      guessInput.value = "";
      guessInput.disabled = false;
      guessBtn.disabled = false;
      message.innerText = ""; // Agrega esta línea para restablecer el mensaje
      remainingGuessesEl.innerText = `Te quedan ${remainingGuesses} intentos`; // Agrega esta línea para restablecer los intentos restantes
      guessInput.focus();
    }
    

