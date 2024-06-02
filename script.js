var currentPlayer;
var state = [];
var moves;

function start() {
	currentPlayer = 0;
	state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	moves = 0;
}

function clickNew() {
	currentPlayer = 0;
	state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (var i = 0; i < 9; ++i) {
		document.getElementById("button" + String.fromCharCode(65 + i)).textContent = " ";
	}
	moves = 0;
	checkState();
}

function checkState() {
	var isWon = 0;
	if (window.currentPlayer == 0) {
		document.getElementById("game_stats").textContent = "X to click";
	} else {
		document.getElementById("game_stats").textContent = "O to click";
	}
	for (var i = 0; i < 3; i++)
		if ((state[i] == state[i + 3]) && (state[i] == state[i + 6]) && (state[i] > 0)) {
			isWon = 1;
			if (state[i] == 1)
				document.getElementById("game_stats").textContent = "X has won!";
			else
				document.getElementById("game_stats").textContent = "O has won!";
		}
	for (var i = 0; i < 7; i += 3)
		if ((state[i] == state[i + 1]) && (state[i] == state[i + 2]) && (state[i] > 0)) {
			isWon = 1;
			if (window.state[i] == 1)
				document.getElementById("game_stats").textContent = "X has won!";
			else
				document.getElementById("game_stats").textContent = "O has won!";
		}
	if ((state[0] == state[4]) && (state[0] == state[8]) && (state[0] > 0)) {
		isWon = 1;
		if (window.state[0] == 1)
			document.getElementById("game_stats").textContent = "X has won!";
		else
			document.getElementById("game_stats").textContent = "O has won!";
	}
	if ((state[2] == state[4]) && (state[2] == state[6]) && (state[2] > 0)) {
		isWon = 1;
		if (window.state[2] == 1)
			document.getElementById("game_stats").textContent = "X has won!";
		else
			document.getElementById("game_stats").textContent = "O has won!";
	}
	if ((isWon === 0) && (moves === 9)) {
		document.getElementById("game_stats").textContent = "Draw!";
	}
}

function clickA() {
	wrapperButton(0);
}

function clickB() {
	wrapperButton(1);
}

function clickC() {
	wrapperButton(2);
}

function clickD() {
	wrapperButton(3);
}

function clickE() {
	wrapperButton(4);
}

function clickF() {
	wrapperButton(5);
}

function clickG() {
	wrapperButton(6);
}

function clickH() {
	wrapperButton(7);
}

function clickI() {
	wrapperButton(8);
}

function wrapperButton(number) {
	if (state[number] == 0) {
		if (currentPlayer == 0) {
			currentPlayer = 1;
			state[number] = 1;
			document.getElementById("button" + String.fromCharCode(65 + number)).textContent = "X";
		} else {
			currentPlayer = 0;
			state[number] = 2;
			document.getElementById("button" + String.fromCharCode(65 + number)).textContent = "O";
		}
		++moves;
		checkState();
	}
}