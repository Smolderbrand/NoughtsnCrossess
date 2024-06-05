var currentPlayer;
var state = [];
var moves;
var players = ["O", "X", "O"];

function start() {
	currentPlayer = 0;
	state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	moves = 0;
	let navButtons = document.getElementById("Buttons");
	let currenttr;
	navButtons.innerHTML = "";
	for (var i = 0; i < 9; ++i) {
		if (i % 3 === 0) {
			currenttr = document.createElement("tr");
		}
		let currenttd = document.createElement("td");
		let button = document.createElement("button");
		button.setAttribute("buttonid", i);
		button.setAttribute("style", "height:40px;width:40px;font-family:Arial;font-size:18px;");
		button.innerHTML = " ";
		button.addEventListener("click", function (event) {
			let btn = event.target;
			let page = btn.getAttribute("buttonid");
			wrapperButton(page);
		});
		currenttd.appendChild(button);
		currenttr.appendChild(currenttd);
		if (i % 3 === 2) {
			navButtons.appendChild(currenttr);
		}
	}
}

function clickNew() {
	currentPlayer = 0;
	state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (var i = 0; i < 9; ++i) {
		document.getElementById("Buttons").children[Math.floor(i / 3)].children[i % 3].children[0].textContent = " ";
	}
	moves = 0;
	checkState();
}

function checkState() {
	var isWon = 0;
	document.getElementById("game_stats").textContent = players[currentPlayer + 1] + " to click";
	for (var i = 0; i < 3; i++)
		if ((state[i] == state[i + 3]) && (state[i] == state[i + 6]) && (state[i] > 0)) {
			isWon = 1;
			document.getElementById("game_stats").textContent = players[state[i]] + " has won!";
		}
	for (var i = 0; i < 7; i += 3)
		if ((state[i] == state[i + 1]) && (state[i] == state[i + 2]) && (state[i] > 0)) {
			isWon = 1;
			document.getElementById("game_stats").textContent = players[state[i]] + " has won!";
		}
	if ((state[0] == state[4]) && (state[0] == state[8]) && (state[0] > 0)) {
		isWon = 1;
		document.getElementById("game_stats").textContent = players[state[0]] + " has won!";
	}
	if ((state[2] == state[4]) && (state[2] == state[6]) && (state[2] > 0)) {
		isWon = 1;
		document.getElementById("game_stats").textContent = players[state[2]] + " has won!";
	}
	if ((isWon === 0) && (moves === 9)) {
		document.getElementById("game_stats").textContent = "Draw!";
	}
}
function wrapperButton(number) {
	if (state[number] == 0) {
		state[number] = currentPlayer + 1;
		currentPlayer = (currentPlayer + 1) % 2;
		document.getElementById("Buttons").children[Math.floor(number / 3)].children[number % 3].children[0].textContent = players[currentPlayer];
		++moves;
		checkState();
	}
}