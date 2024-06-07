let currentPlayer;
let state = [];
let moves;
let players = ["O", "X", "O"];

function start() {
	currentPlayer = 0;
	state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	moves = 0;
	let navButtons = document.getElementById("Buttons");
	let currenttr;
	navButtons.innerHTML = "";
	for (let i = 0; i < 3; ++i) {
		currenttr = document.createElement("tr");
		for (let j = 0; j < 3; ++j) {
			let currenttd = document.createElement("td");
			let button = document.createElement("button");
			button.setAttribute("buttonid", i * 3 + j);
			button.setAttribute("style", "height:40px;width:40px;font-family:Arial;font-size:18px;");
			button.innerHTML = " ";
			button.addEventListener("click", function (event) {
				let btn = event.target;
				let buttonid = btn.getAttribute("buttonid");
				buttonClicked(buttonid);
			});
			currenttd.appendChild(button);
			currenttr.appendChild(currenttd);
		}
		navButtons.appendChild(currenttr);
	}
}

function clickNew() {
	currentPlayer = 0;
	state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (let i = 0; i < 3; ++i) {
		for (let j = 0; j < 3; ++j) {
			document.getElementById("Buttons").children[i].children[j].children[0].textContent = " ";
		}
	}
	moves = 0;
	checkState();
}

function checkState() {
	let isWon = 0;
	document.getElementById("game_stats").textContent = players[currentPlayer + 1] + " to click";
	for (let i = 0; i < 3; ++i) {
		if ((state[i] == state[i + 3]) && (state[i] == state[i + 6]) && (state[i] > 0)) {
			isWon = 1;
			document.getElementById("game_stats").textContent = players[state[i]] + " has won!";
		}
	}
	for (let i = 0; i < 7; i += 3) {
		if ((state[i] == state[i + 1]) && (state[i] == state[i + 2]) && (state[i] > 0)) {
			isWon = 1;
			document.getElementById("game_stats").textContent = players[state[i]] + " has won!";
		}
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

function buttonClicked(number) {
	if (state[number] == 0) {
		state[number] = currentPlayer + 1;
		currentPlayer = (currentPlayer + 1) % 2;
		let td = document.getElementById("Buttons").children[Math.floor(number / 3)].children[number % 3];
		td.children[0].textContent = players[currentPlayer];
		++moves;
		checkState();
	}
}