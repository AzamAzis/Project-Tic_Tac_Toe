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
				if (condition1 === "x") {
					result = "The winner is Player 1";
					break;
				} else if (condition1 === "o") {
					result = "The winner is Player 2";
					break;
				}
			} else if (!isEmpty) {
				result = "Tie";
				break;
			}
		}
	};
	const getResult = () => result;

	return {addChoice, getBoard, setResult, getResult}
}

export {Controller, GameBoard};