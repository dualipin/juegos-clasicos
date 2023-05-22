//Mezclar las cartas
function shuffleCards() {
	cards.forEach(card => {
		let randomPos = Math.floor(Math.random() * 12);
		card.style.order = randomPos;
	});
}

//Hacemos una función cuando seleccione un cuadro  
const cards = document.querySelectorAll('.game-card');
shuffleCards()

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
	this.classList.add('visible');

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


