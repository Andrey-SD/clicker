const button = document.getElementById('button');
const scoreText = document.getElementById('scoreText');
let score = 0;

function hendler() {
	score++;
	scoreText.innerHTML = score;
}

function newPosition() {
	const x = Math.floor(Math.random() * 90);
	const y = Math.floor(Math.random() * 90);
	button.style.left = x + 'vw';
	button.style.top = y + 'vh';
}

function endGame() {
	alert('За 10 секунд ви натиснули ' + score + ' разів!')
}

setInterval(newPosition, 2000);
setTimeout(endGame, 10000);