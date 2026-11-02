import {cellItems, startGame} from "./barrel.js";

cellItems.forEach((cell) => {
	cell.addEventListener("click", startGame);
});