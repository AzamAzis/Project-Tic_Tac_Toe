import {cellItems, playerTag} from "./barrel.js";

const GameBoard = (() => {
	const columns = 3;
	const rows = 3;
	const gameBoard = [];
	const player = [
		{
			name: "Player 1",
			choice: "x"
		},
		{
			name: "Player 2",
			choice: "o"
		}
	];

	for (let i = 0; i < (columns * rows); i++) {
		gameBoard.push("");
	}

	/* Game Board Visualization
		[ 0 ] [ 1 ] [ 2 ]
		[ 3 ] [ 4 ] [ 5 ]
		[ 6] [ 7 ] [ 8 ]
	*/

	return {gameBoard, player};
})();

function Controller(board) {
	let result = "Game is going";
	let gameEnd = false;

	const addChoice = (location, choice) => {
		if (!board[location]) {
			board.splice(location, 1, choice);
		}
	};
	const getBoard = () => board;
	const setResult = () => {
		const winningCondition =[
			[0, 1, 2], [1, 4, 7], [2, 5, 8],
			[0, 3, 6], [3, 4, 5], [2, 4, 6],
			[0, 4, 8], [6, 7, 8]
		];
		for (let i = 0; i < winningCondition.length; i++) {
			const gameState = winningCondition[i];
			const condition1 = board[gameState[0]];
			const condition2 = board[gameState[1]];
			const condition3 = board[gameState[2]];
			const isEmpty = board.some((item) => !item);

			if (!condition1 || !condition2 || !condition3) continue;

			if (condition1 === condition2 && condition2 === condition3) {
				gameEnd = true;
				if (condition1 === "x") {
					result = GameBoard.player[0].name;
					break;
				} else if (condition1 === "o") {
					result = GameBoard.player[1].name;
					break;
				}
			} else if (!isEmpty) {
				gameEnd = true;
				result = "Tie";
				break;
			}
		}
	};
	const getResult = () => result;
	const isGameEnd = () => gameEnd;

	return {addChoice, gameEnd, getBoard, isGameEnd, setResult, getResult};
}

function Player() {
	let player = "";

	const setPlayer1 = () => {
		player = GameBoard.player[0].name;
	};
	const setPlayer2 = () => {
		player = GameBoard.player[1].name;
	};
	const getPlayer = () => player;

	return {setPlayer1, setPlayer2, getPlayer};
}

function startGame(item) {
	const board = GameBoard.gameBoard;
	const controller = Controller(board);
	const player = Player();
	const player1 = GameBoard.player[0];
	const player2 = GameBoard.player[1];
	const player1Choice = player1.choice;
	const player2Choice = player2.choice;
	const cell = item.currentTarget;

	if (cell.textContent !== "") return;

	for (let i = 0; i < cellItems.length; i++) {
		if (cellItems[i] === cell) {
			if (playerTag.textContent === "Player 1") {
				controller.addChoice(i, player1Choice);
			} else {
				controller.addChoice(i, player2Choice);
			}
		}
	}

	if (playerTag.textContent === "Player 1") {
		cell.textContent = player1Choice.toUpperCase();
		player.setPlayer2();
		playerTag.textContent = player.getPlayer();
	} else {
		cell.textContent = player2Choice.toUpperCase();
		player.setPlayer1();
		playerTag.textContent = player.getPlayer();
	}

	controller.setResult();

	if (controller.getResult() === player1.name) {
		playerTag.textContent = `The winner is ${player1.name}`;
	} else if (controller.getResult() === player2.name) {
		playerTag.textContent = `The winner is ${player2.name}`;
	} else if (controller.getResult() === "Tie") {
		playerTag.textContent = `It's a tie`;
	}

	if (controller.isGameEnd()) {
		cellItems.forEach((box) => {
			box.removeEventListener("click", startGame);
		});
	}
}

export {Controller, GameBoard, startGame};