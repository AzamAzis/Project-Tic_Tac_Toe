import {cellItems, reset, resetBtn, startGame} from "./barrel.js";

cellItems.forEach((cell) => {
	cell.addEventListener("click", startGame);
});

resetBtn.addEventListener("click", reset);