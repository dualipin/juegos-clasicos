import { shuffleCards } from "./mezclar.js";

//Hacemos una función cuando seleccione un cuadro  
const cards = document.querySelector('#game-card');

const cardsNodes = cards.childNodes

let hasFlippedCard = false;
let firstCard, secondCard;

console.log(cardsNodes)


cardsNodes.forEach(element=>{
	//element.style.transform = 'rotateY(180deg)'
	element.innerHTML = '31231'
})

document.getElementById('reset-button').style.transform = 'rotateY(180deg)'

function flipCard() {
	
	this.style.transform = 'rotateY(180deg)'

	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;
	} else {
		hasFlippedCard = false;
		secondCard = this;

		if (firstCard.innerHTML === secondCard.innerHTML) {
			firstCard.removeEventListener('click', flipCard);
			secondCard.removeEventListener('click', flipCard);
		} else {
			setTimeout(() => {
				firstCard.classList.remove('visible');
				secondCard.classList.remove('visible');
			}, 1000);
		}
	}
}

cards.forEach(card => card.addEventListener('click', flipCard));

//Configuramos el bóton
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', resetGame);

function resetGame() {
  cards.forEach(card => {
    card.classList.remove('visible');
    card.addEventListener('click', flipCard);
  });
  shuffleCards();
}


