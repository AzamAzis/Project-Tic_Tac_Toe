function GameBoard() {
	const columns = 3;
	const rows = 3;
	const gameBoard = [];
	const players = [
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

	return {gameBoard, players};
}

function start(board, location, choice) {
	board.splice(location, 1, choice);
	console.log(board);
}

const board = GameBoard().gameBoard;
const player1 = GameBoard().players[0];
const player2 = GameBoard().players[1];

// export {GameBoard, start};